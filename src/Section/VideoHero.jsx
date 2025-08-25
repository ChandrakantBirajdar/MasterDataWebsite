import { div } from "framer-motion/client";
import React, { useState, useRef } from "react";

const VideoHero = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    setIsPlaying(true);
    videoRef.current.play();
  };

  const handleStop = () => {
    setIsPlaying(false);
    videoRef.current.pause();
    videoRef.current.currentTime = 0; // reset to start
  };

  return (
    <div className="bg-black w-screen flex justify-center pt-10">
      <div className="relative w-[80%] h-[400px] md:h-[500px] lg:h-[600px] bg-black flex items-center justify-center overflow-hidden">
        {/* Video */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover rounded-lg"
          src="/images/Pardesiya.mp4" // place video in public/videos
          controls={false}
          poster="/images/closeup.jpg"
        />

        {/* Dark overlay for readability */}
        {!isPlaying && (
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        )}

        {/* Content Overlay (only when not playing) */}
        {!isPlaying && (
          <div className="relative z-10 text-white max-w-md p-6">
            <span className="bg-white text-black text-xs font-semibold px-3 py-1 rounded-full mb-3 inline-block">
              All Episodes Available
            </span>
            <h3 className="text-sm uppercase tracking-wide">Original Series</h3>
            <h1 className="text-2xl md:text-3xl font-extrabold mb-3">
              The Science of Parenting
            </h1>
            <p className="text-sm md:text-base text-gray-200 mb-4">
              Leading child psychologists break down the science of raising
              confident kids—and how to end parenting stress.
            </p>

            <button
              onClick={handlePlay}
              className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-md font-semibold hover:bg-gray-200 transition"
            >
              ▶ Watch Trailer
            </button>
          </div>
        )}

        {/* Stop button (only when video is playing) */}
        {isPlaying && (
          <button
            onClick={handleStop}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 bg-white text-black px-5 py-2 rounded-md font-semibold shadow-lg hover:bg-gray-200 transition"
          >
            ✖ Stop Video
          </button>
        )}
      </div>
    </div>
  );
};

export default VideoHero;
