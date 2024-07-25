import React from "react";
import heroVideo from "../assets/kid-with-telescope.mp4";

function Hero() {
  return (
    <div className="relative w-full h-[80vh] sm:h-[100vh] overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-25" />
      <section className="absolute bottom-8 right-4 p-4 bg-black bg-opacity-75 rounded-lg shadow-lg max-w-xs sm:max-w-md">
        <p className="text-white text-sm md:text-xl font-extrabold font-serif">
          Welcome to Springdale Public School,
        </p>
        <p className="text-white text-xs md:text-base font-light font-sans mt-2">
          where we nurture young minds for a brighter future....
        </p>
      </section>
    </div>
  );
}

export default Hero;

