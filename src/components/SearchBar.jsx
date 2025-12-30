import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { setQuery } from "../features/searchSlice";

const SearchBar = () => {

    const [search, setSearch] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!search.trim()) return;
        dispatch(setQuery(search));
        setSearch("");
    };

    return (
        <div className="flex justify-center mt-4 px-3">
          
            <form
                onSubmit={handleSubmit}
                className="  w-full max-w-sm bg-white rounded-full shadow-xl border border-gray-200 flex items-center
                 px-6 h-12 focus-within:ring-2 focus-within:ring-blue-500"
            >
               

                {/* Input */}
                <input
                    type="text"
                    placeholder="Search photos & videos"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="flex-1 text-sm text-gray-700 outline-none placeholder:text-gray-400 "
                />
                {/* Button */}
                <button
                    type="submit"
                    className="cursor-pointer text-gray-600 h-8 w-8 flex items-center justify-center rounded-full transition"
                >
                  
                   
                   <FiSearch className="text-gray-500 ml-3" size={18} />
                </button>

            </form>
        </div>
    );
};

export default SearchBar;
