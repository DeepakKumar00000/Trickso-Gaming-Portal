// import React, { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/autoplay";
// import { Autoplay } from "swiper/modules";
// import { Menu } from "lucide-react"; // Hamburger icon

// import img1 from "/img2.jpg";
// import img2 from "/img1.jpg";
// import img3 from "/img3.jpg";
// import img5 from "/img5.avif";
// import img6 from "/img6.avif";
// import img7 from "/img7.avif";

// const Navbar = () => {
//   const images = [img2, img1, img3, img5, img6,img7];
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <div className="relative w-full bg-[#0a2a66] text-white overflow-hidden">

//       {/* 🔶 Logo – Top Left */}
//       <div className="absolute top-4 left-4 z-30">
//         <div className="bg-yellow-400 rounded-full px-4 py-2 shadow-lg flex items-center space-x-2">
//           <img src="/logo.png" alt="Logo" className="w-14 h-9 object-contain" />
//         </div>
//       </div>

//       {/* 🔶 Navigation – Desktop */}
//       <div className="hidden md:flex absolute top-4 right-4 z-30">
//         <div className="bg-yellow-400 rounded-full flex items-center px-5 py-2 shadow-lg space-x-6 text-blue-900 font-bold text-base">
//           <button className="hover:text-blue-700">TOURNAMENT</button>
//           <button className="hover:text-blue-700">CHALLENGE</button>
//           <button className="hover:text-blue-700">CASUAL GAMING</button>
//           <button className="bg-blue-900 text-yellow-300 px-3 py-2 rounded-full text-sm font-bold">User ID</button>
//         </div>
//       </div>

//       {/* 🔽 Hamburger – Mobile */}
//       <div className="md:hidden absolute top-4 right-4 z-30">
//         <button
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           className="bg-yellow-400 p-2 rounded-full shadow-lg text-blue-900"
//         >
//           <Menu size={24} />
//         </button>
//         {isMenuOpen && (
//           <div className="mt-2 absolute right-0 bg-yellow-400 rounded-lg shadow-xl p-4 flex flex-col text-blue-900 font-semibold space-y-3 w-44">
//             <button className="hover:text-blue-700">TOURNAMENT</button>
//             <button className="hover:text-blue-700">CHALLENGE</button>
//             <button className="hover:text-blue-700">CASUAL GAMING</button>
//             <button className="bg-blue-900 text-yellow-300 px-3 py-1 rounded-full text-sm font-bold">User ID</button>
//           </div>
//         )}
//       </div>

//       {/* 🖼️ Swiper Carousel */}
//       <Swiper
//         modules={[Autoplay]}
//         autoplay={{ delay: 2000 }}
//         loop={true}
//         className="w-full h-screen"
//       >
//         {images.map((img, index) => (
//           <SwiperSlide key={index}>
//             <div
//               className="w-full h-screen bg-cover bg-center"
//               style={{ backgroundImage: `url(${img})` }}
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

// Images
import img1 from "/img1.jpg";
import img2 from "/img2.jpg";
import img3 from "/img3.jpg";
import img4 from "/img4.avif";
// import img5 from "/img5.avif"
import img6 from "/img6.avif"



const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const images = [img1, img2, img3, img4,img6];

  return (
    <div className="relative w-full h-screen bg-blue-900 overflow-hidden ">
      {/* Top right nav block */}
      {/* <div className="absolute top-0 right-0 w-[60vw] h-[100px] bg-blue-900 z-20 flex items-center justify-around px-8 space-x-4 text-yellow-400 font-bold text-sm md:text-base rounded-bl-3xl"> */}
      <div className="absolute top-0 right-0  md:w-[60vw] w-[calc(100%-125px)] h-[100px] bg-blue-900 z-20 flex items-center justify-around px-4 space-x-2 text-yellow-400 font-bold text-sm md:text-base rounded-bl-3xl">

        {/* Mobile User ID button inside yellow rounded pill */}
        <div className="ml-auto"><button className="bg-yellow-400 text-blue-900 px-7 py-4 mt-3 rounded-full text-xs font-bold md:hidden">
          User ID
        </button>
        </div>
        {/* Mobile Hamburger icon with spacing */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-yellow-400 text-4xl ml-3"
          >
            ☰
          </button>
        </div>

        {/* Desktop nav links + User ID button inside one yellow rounded pill */}
        <div className="hidden md:flex items-center bg-yellow-400 px-10 py-2 rounded-2xl text-blue-900 font-bold text-sm md:text-base flex-grow max-w-[1000px] justify-between">
        
          <div className="flex space-x-8">
            <button
              onClick={() => {
                document
                  .getElementById("category")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="hover:text-blue-700 font-bold text-xl"
            >
              CATEGORY
            </button>
            <button
              onClick={() => {
                document
                  .getElementById("challenge")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="hover:text-blue-700 font-bold text-xl"
            >
              CHALLENGE
            </button>
            <button
              onClick={() => {
                document
                  .getElementById("casual-gaming")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="hover:text-blue-700 font-bold text-xl"
            >
              CASUAL GAMING
            </button>
          </div>

          <button className="bg-blue-900 text-yellow-300 px-9 py-2 rounded-full text-xl font-bold">
            User ID
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
    
      {menuOpen && (
        <div className="absolute top-[90px] right-4 bg-yellow-400 text-blue-900 p-4 rounded-lg flex flex-col space-y-2 md:hidden z-40 shadow-lg">
          <button
            onClick={() => {
              document
                .getElementById("category")
                ?.scrollIntoView({ behavior: "smooth" });
              setMenuOpen(false);
            }}
            className="hover:text-blue-700"
          >
            CATEGORY
          </button>
          <button
            onClick={() => {
              document
                .getElementById("challenge")
                ?.scrollIntoView({ behavior: "smooth" });
              setMenuOpen(false);
            }}
            className="hover:text-blue-700"
          >
            CHALLENGE
          </button>
          <button
            onClick={() => {
              document
                .getElementById("casual-gaming")
                ?.scrollIntoView({ behavior: "smooth" });
              setMenuOpen(false);
            }}
            className="hover:text-blue-700"
          >
            CASUAL GAMING
          </button>
        </div>
      )}

      {/* Top left logo block - square style like image 2 */}
      <div className="absolute top-0 left-0 w-[150px] h-[100px] bg-blue-900 z-30 flex items-center justify-center  rounded-br-3xl">
        <img
          src="/zxc1.png"
          alt="Logo"
          className="w-[250px] h-auto object-contain"
        />
      </div>

      {/* Main content container with Swiper */}
      {/* <div className="absolute top-[30px] left-0 w-full h-[calc(100%-30px)] z-10 bg-blue-900 p-5">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000 }}
          loop={true}
          className="w-full h-full"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div
                className="w-full h-full bg-cover bg-center rounded-2xl overflow-hidden"
                style={{ backgroundImage: `url(${img})` }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div> */}

      <div
  className="absolute left-0 w-full z-10 bg-blue-900 p-5"
  style={{
    top: window.innerWidth < 768 ? "100px" : "30px",
    height: window.innerWidth < 768 ? "calc(100% - 100px)" : "calc(100% - 30px)",
  }}
>
  <div className="w-full h-full rounded-2xl overflow-hidden">
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 3000 }}
      loop={true}
      className="w-full h-full"
    >
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${img})` }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</div>

      
    </div>
  );
};

export default Navbar;
