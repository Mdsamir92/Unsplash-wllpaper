import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTabs } from "../features/searchSlice";
import { FiImage, FiVideo, FiHeart } from "react-icons/fi";

function Tabs() {
  const tabs = [
    { tab: "photos", label: "Photos", icon: FiImage },
    { tab: "videos", label: "Videos", icon: FiVideo },
    { tab: "collection", label: "Collection", icon: FiHeart },
   
  ];


  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.search.activeTab);

  const indicatorPosition = {
    photos: "translate-x-0",
    videos: "translate-x-full",
    collection: "translate-x-[200%]",
  };

  return (
    <div className="flex justify-center mt-3">
      <div className="relative flex bg-gray-100 rounded-full p-1 shadow-inner w-fit">

        {/* Sliding indicator */}
        <div
          className={`
            absolute top-1 bottom-1
            w-1/3 
            bg-blue-600 rounded-full
            transition-transform duration-300 ease-in-out
            ${indicatorPosition[activeTab]}
          `}
        />

        {tabs.map(({ tab, label, icon: Icon }) => (
          <button
            key={tab}
            onClick={() => dispatch(setActiveTabs(tab))}
            className={`
              relative z-10
              flex items-center gap-2
              px-8 py-2
              text-sm font-semibold
              rounded-full
              transition-colors duration-300 cursor-pointer
              ${activeTab === tab ? "text-white" : "text-gray-600"}
            `}
          >
            <Icon size={16} />
            <span className="hidden sm:inline">
              {label.toUpperCase()}
            </span>

          </button>
        ))}
      </div>
    </div>
  );
}

export default Tabs;
