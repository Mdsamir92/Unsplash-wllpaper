import React, { useEffect, useState } from "react";
import { getSavedMedia, removeMedia } from "./SaveMedia";

function Collection() {

  const [saved, setSaved] = useState([]);

  useEffect(() => {
    setSaved(getSavedMedia());
  }, []);

  if (saved.length === 0) {
    return <p className="text-center mt-10">No saved items</p>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-6">My Collection</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {saved.map(item => (
          <div
            key={item.id}
            className="relative rounded-xl overflow-hidden shadow bg-white"
          >
            {item.type === "photo" ? (
                <a
                        href={item.data.urls.small}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
              <img
                src={item.data.urls.small}
                alt=""
                className="w-full h-48 object-cover"
              />
              </a>
            ) : (
              <video controls className="w-full h-48 object-cover">
                <source src={item.data.video_files?.[0]?.link} />
              </video>
            )}

            <button
              onClick={() => {
                removeMedia(item.id);
                setSaved(getSavedMedia());
              }}
              className="absolute top-2 right-2 bg-white text-xs px-2 py-1 rounded-full shadow"
            >
              ❌ Remove
            </button>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default Collection;
