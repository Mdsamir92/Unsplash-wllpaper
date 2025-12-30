import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos, fetchVideos } from "../api/mediaApi";
import SearchBar from "./SearchBar";
import Tabs from "./Tabs";
import {
  setResults,
  setLoading,
  setError,
  clearResults,
} from "../features/searchSlice";
import { saveMedia } from "./SaveMedia";
import Collection from "./Collection";


function Home() {


  const [savedId, setSavedId] = useState(null);

  const dispatch = useDispatch();

  const { query, activeTab, results, loading, error } = useSelector(
    (state) => state.search
  );

  // 🔍 Fetch data when tab or query changes
  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      try {
        dispatch(setLoading());
        dispatch(clearResults());

        let data;
        if (activeTab === "photos") {
          data = await fetchPhotos(query);
        } else {
          data = await fetchVideos(query);
        }
        dispatch(setResults(data));
      } catch (err) {
        dispatch(setError("Failed to fetch data"));
      }
    };

    fetchData();
  }, [query, activeTab, dispatch]);

  const showHero = results.length === 0 && !loading && !error;


  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* Search */}
        <div className="mb-6 ">
          <SearchBar />
        </div>

        {/* Tabs */}
        {/* <div className="mb-8">
          <Tabs />
        </div> */}

        {/* Loading */}
        {loading && (
          <p className="text-center text-gray-500 mt-10 animate-pulse">
            Loading media...
          </p>
        )}

        {/* Error */}
        {error && (
          <p className="text-center text-red-500 mt-10">
            {error}
          </p>
        )}

        {/* HERO IMAGE */}
        {showHero && (
          <div className="mt-10 rounded-2xl overflow-hidden shadow-lg relative">
            <img
              src="https://images.unsplash.com/photo-1764377848067-aefbce306f80?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0"
              alt="Hero"
              className="w-full h-[420px] object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Discover Stunning Media
                </h1>
                <p className="text-lg opacity-90">
                  Search photos and videos from the world’s best creators
                </p>
              </div>
            </div>
          </div>
        )}


        {/* Results */}
        {results.length > 0 && (
          <div className="mt-10">

            {/* PHOTOS */}
            {activeTab === "photos" && (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {results.filter(item => item?.urls?.small)
                  .map(photo => (
                    <div
                      key={photo.id}
                      className="group relative overflow-hidden rounded-xl shadow-sm bg-white"
                    >
                      <a
                        href={photo.urls.small}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={photo.urls.small}
                          alt=""
                          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </a>

                      <div className="absolute bottom-3 right-3 z-20">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();

                            saveMedia({
                              id: photo.id,
                              type: "photo",
                              data: photo,
                            });

                            setSavedId(photo.id);
                            setTimeout(() => setSavedId(null), 600);
                          }}
                          className="bg-white text-sm px-3 py-1 rounded-full shadow hover:bg-gray-100"
                        >
                          ❤️ Save
                        </button>

                        {savedId === photo.id && (
                          <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-red-500 animate-ping">
                            ❤️
                          </span>
                        )}
                      </div>




                      {/* Overlay (click-through) */}
                      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition pointer-events-none" />
                    </div>

                  ))}
              </div>
            )}

            {/* VIDEOS */}
            {activeTab === "videos" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {results.map(video => {
                  const src = video.video_files?.[0]?.link;
                  if (!src) return null;

                  return (
                    <div
                      key={video.id}
                      className="relative rounded-xl overflow-hidden shadow-sm bg-white hover:shadow-md transition"
                    >
                      <button
                        onClick={(e) => {
                          e.stopPropagation();

                          saveMedia({
                            id: video.id,
                            type: "video",
                            data: video,
                          });

                          setSavedId(video.id);
                          setTimeout(() => setSavedId(null), 600);
                        }}
                        className="absolute top-3 right-3 z-20 bg-white text-sm px-3 py-1 rounded-full shadow hover:bg-gray-100"
                      >
                        ❤️ Save
                      </button>

                      <video controls className="w-full h-64 object-cover">
                        <source src={src} type="video/mp4" />
                      </video>

                      {savedId === video.id && (
                        <span className="absolute top-8 right-5 text-red-500 animate-ping">
                          ❤️
                        </span>
                      )}
                    </div>

                  );
                })}
              </div>
            )}
            

          </div>

        )}


        {activeTab === "collection" && <Collection />}

      </div>
    </div>
  );

}

export default Home;