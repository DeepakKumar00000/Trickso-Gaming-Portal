import React from "react";
import img1 from "/img1.jpg";
import img2 from "/img2.jpg";
import img3 from "/img3.jpg";
import img4 from "/img5.avif";

const challenges = [
  { img: img1, title: "YAS: Valorant Season 1" },
  { img: img2, title: "YAS: Valorant Season 2" },
  { img: img3, title: "YAS: Valorant Season 3" },
  { img: img4, title: "YAS: Valorant Season 4" },
];

const ChallengesSection = () => {
  return (
    <div id="challenge" className="bg-blue-900 py-10 px-4">
      <h2 className="text-center text-white text-3xl italic font-bold mb-10">
        CHALLENGES
      </h2>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-[1500px] px-4 mx-auto">

        {challenges.map((item, index) => (
          <div
            key={index}
            className="bg-yellow-400 rounded-xl overflow-hidden shadow-lg flex flex-col min-w-[330px]"
          >
            <img
              src={item.img}
              alt="Challenge"
              className="h-[300px] w-full object-cover"
            />
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div className="relative mb-6">
                {/* Slim separator bar */}
                <div className="absolute left-0 bottom-[-6px] w-full h-[2px] bg-blue-900 rounded"></div>
                {/* Title */}
                <h3 className="relative text-lg font-bold z-10 text-center">
                  {item.title}
                </h3>
              </div>

              <div className="text-sm space-y-1 text-black">
                <div className="flex items-center justify-between">
                  <span>📅 Registration Date</span>
                  <span>10/06/2025</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>🏆 Prize Pool</span>
                  <span>1,00,000 INR</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>👥 Participants</span>
                  <span>1200+</span>
                </div>
              </div>


              <div className="flex items-center mt-4 justify-between">
                <div className="flex flex-col items-center w-full">
                  {/* Slim separator bar above sponsor text */}
                  <div className="mb-2 h-[2px] bg-blue-900 w-full rounded"></div>

                  <div className="flex items-center space-x-2 justify-center">
                    <img src="/logo.png" alt="logo" className="h-6 w-6" />
                    <span className="text-sm font-medium">
                      Sponsored by Trickso
                    </span>
                  </div>
                </div>
              </div>

              <button className="mt-4 w-full bg-blue-900 text-white py-2 font-bold rounded">
                JOIN
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChallengesSection;
