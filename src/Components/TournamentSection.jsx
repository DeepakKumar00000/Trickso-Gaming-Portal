
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { useNavigate } from "react-router-dom";

import img1 from "/racing.jpg";
import img2 from "/action.jpg";
import img3 from "/kids.jpg";
import img4 from "/adventure.jpg";
import img5 from "/funny.jpg";
import img6 from "/sports.jpg";
import img7 from "/puzzle.png";

import img8 from "/arcade.jpeg";

const TournamentSection = () => {
  const navigate = useNavigate();

  const images = [
    { src: img1, title: "Racing" },
    { src: img2, title: "Action" },
    { src: img3, title: "Kids" },
    { src: img4, title: "Adventure" },
    { src: img5, title: "Funny" },
    { src: img6, title: "Sports" },
    { src: img7, title: "Puzzle" },
    { src: img8, title: "Arcade" },
  ];

  // Break images into chunks of 4
  const chunked = [];
  for (let i = 0; i < images.length; i += 4) {
    chunked.push(images.slice(i, i + 4));
  }

  return (
    <div
      id="category"
      className="min-h-screen bg-blue-900 p-6 flex items-center justify-center"
    >
      <div className="relative w-full max-w-[1500px] px-4 mx-auto">
        <h2 className="text-3xl font-bold text-white mb-6 italic text-center">
          CATEGORIES
        </h2>

        <div className="relative w-full bg-gradient-to-r from-yellow-400 to-orange-400 p-6 rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-xl shadow-xl overflow-hidden">
          <div className="absolute -top-4 right-0 bg-blue-900 px-4 py-4 rounded-bl-2xl flex gap-2 shadow-lg z-10">
            <select className="bg-yellow-400 text-blue-900 font-semibold px-2 py-2 rounded-md shadow">
              <option>Select Country</option>
              <option>India</option>
              <option>USA</option>
              <option>Canada</option>
              <option>Australia</option>
            </select>
            <button className="bg-gray-400 text-black px-4 py-2 rounded-md font-semibold shadow">
              Tournament &raquo;
            </button>
          </div>

          {/* Swiper for 4 cards at a time */}
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000 }}
            loop={true}
            className="mt-12"
          >
            {chunked.map((group, slideIndex) => (
              <SwiperSlide key={slideIndex}>
                <div className="flex justify-center gap-4 flex-wrap pt-10">
                  {group.map((imgObj, index) => (
                    <div
                      key={index}
                      onClick={() =>
                        navigate(`/category/${imgObj.title.toLowerCase()}`)
                      } 
                      className={`cursor-pointer
      overflow-hidden w-[310px] bg-black shadow-lg rounded-2xl transition-transform duration-300 transform skew-y-[-5deg] md:hover:scale-95
      ${index < 3 ? "h-[420px] -translate-y-6" : "h-[390px]"}`}
                      style={{ position: "relative" }}
                    >
                      <img
                        src={imgObj.src}
                        alt={imgObj.title}
                        className="w-full h-full object-cover rounded-2xl"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-2xl">
                        <h3 className="text-white text-2xl font-bold uppercase tracking-wider text-center drop-shadow-md">
                          {imgObj.title}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TournamentSection;
