import React, { useState } from "react";

const heroImages = [
  "https://images.unsplash.com/photo-1764377848067-aefbce306f80?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop",
];

function Hero() {
  const [active, setActive] = useState(0);

  return (
    <div className="mt-10 rounded-2xl overflow-hidden shadow-lg relative">

      {/* Background Image */}
      <img
        src={heroImages[active]}
        alt="Hero background"
        className="w-full h-[420px] object-cover transition-all duration-700"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/10 flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Discover Stunning Media
          </h1>
          <p className="text-lg opacity-90">
            Search photos and videos from the world’s best creators
          </p>
        </div>
      </div>

      {/* Thumbnail Strip */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 bg-black/30 backdrop-blur-md px-4 py-2 rounded-full">
        {heroImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            onClick={() => setActive(index)}
            className={`h-12 w-16 object-cover rounded-lg cursor-pointer transition border
              ${
                active === index
                  ? "border-white scale-105"
                  : "border-transparent opacity-70 hover:opacity-100"
              }
            `}
          />
        ))}
      </div>
    </div>
  );
}

export default Hero;
