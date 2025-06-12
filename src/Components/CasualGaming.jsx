import React from "react";
// import clg3 from "/clg3.jpg"; // Your downloaded collage image

const CasualGaming = () => {
  return (
    <div
      id="casual-gaming"
      className="min-h-screen bg-blue-900 p-6 flex items-center justify-center"
    >
      <div className="relative w-full max-w-[1500px] px-4 mx-auto">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-white mb-6 italic text-center">
          CASUAL GAMING
        </h2>

        {/* Main container with collage image */}
        <div className="relative w-full bg-blue-800 p-0 rounded-xl shadow-xl overflow-hidden h-[620px]">
          {/* Play Button in top-right corner (in its own div like Tournament section) */}
          <div className="absolute -top-4 right-0 bg-blue-900 px-4 py-4 rounded-bl-2xl shadow-lg z-10">
            <button className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded-md shadow">
              Play
            </button>
          </div>

          {/* Collage Image */}
          {/* <img
            src={clg3}
            alt="Gaming Collage"
            className="w-full h-full object-cover"
          /> */}

          <video
            src="/clip.mp4"
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>
    </div>
  );
};

export default CasualGaming;
