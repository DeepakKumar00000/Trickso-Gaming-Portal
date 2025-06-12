// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";

// const CategoryGames = () => {
//   const { categoryName } = useParams();
//   const [games, setGames] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     console.log("useEffect is running...");
//     axios.get("https://api.panzcon.com/fetch-games")
      
//       .then((res) => {
//         console.log("API Response:", res);
      
        
//         const filtered = res.data.games.filter(
//           (game) =>
//             game.category?.toLowerCase().trim() ===
//             categoryName.toLowerCase().trim()
//         );
//         setGames(filtered);
//       })
//       .catch((err) => {
//         console.error("API error:", err);
//       });
//   }, [categoryName]);

//   return (
//     <div className="min-h-screen bg-blue-900 text-white px-6 py-10">
//       <h1 className="text-3xl font-bold mb-6 text-center italic">
//         {categoryName.toLocaleUpperCase()} GAMES
//       </h1>

//       <div className="flex justify-end mb-4">
//         <button
//           onClick={() => navigate("/")}
//           className="bg-yellow-400 text-blue-900 font-bold px-4 py-2 rounded shadow hover:bg-yellow-300 transition"
//         >
//           ← Back
//         </button>
//       </div>

//       {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"> */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-[1500px] px-4 mx-auto">

//         {games.length > 0 ? (
//           games.map((game) => (
//             <div
//               key={game.gameid}
//               className="bg-yellow-400 text-blue-900 rounded-xl overflow-hidden shadow-lg p-4"
//             >
//               <img
//                 src={game.imgurl}
//                 alt={game.gamename}
//                 className="w-full h-[300px] object-cover rounded"
//               />
//               <h3 className="mt-3 font-bold text-xl">{game.gamename}</h3>
//               <a
//                 href={game.gameurl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-block mt-2 px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-700 transition"
//               >
//                 Play Now
//               </a>
//             </div>
//           ))
//         ) : (
//           <p className="text-center col-span-3">
//             {/* No games found in this category. */}
//              Games Loading......
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CategoryGames;


import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const CategoryGames = () => {
  const { categoryName } = useParams();
  const [games, setGames] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const gamesPerPage = 8;

  // Calculate pagination slice
  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = games.slice(indexOfFirstGame, indexOfLastGame);
  const totalPages = Math.ceil(games.length / gamesPerPage);

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  useEffect(() => {
    // axios.get("https://api.panzcon.com/fetch-games")
    console.log("API URL:", import.meta.env.VITE_API_URL);

    axios.get(import.meta.env.VITE_API_URL)
      .then((res) => {

        console.log("API Response:", res.data);

        const filtered = res.data.games.filter(
          (game) =>
            game.category?.toLowerCase().trim() ===
            categoryName.toLowerCase().trim()
        );
        setGames(filtered);
        setCurrentPage(1); // Reset to first page when category changes
      })
      .catch((err) => {
        console.error("API error:", err);
      });
  }, [categoryName]);

  return (
    <div className="min-h-screen bg-blue-900 text-white px-6 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center italic">
        {categoryName.toLocaleUpperCase()} GAMES
      </h1>

      <div className="flex justify-end mb-4">
        <button
          onClick={() => navigate("/")}
          className="bg-yellow-400 text-blue-900 font-bold px-4 mr-9 py-2 rounded shadow hover:bg-yellow-300 transition"
        >
          ← Back
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-[1500px] px-4 mx-auto">
        {currentGames.length > 0 ? (
          currentGames.map((game) => (
            <div
              key={game.gameid}
              className="bg-yellow-400 text-black rounded-xl overflow-hidden shadow-lg flex flex-col"
            >
              <img
                src={game.imgurl}
                alt={game.gamename}
                className="w-full h-[350px] object-cover "
              />
              
              <div className="p-4">
                {/* <h3 className="mt-1 font-bold text-xl">{game.gamename}</h3> */}
                <h3 className="mt-1 font-bold text-xl">
  {game.gamename.charAt(0).toUpperCase() + game.gamename.slice(1)}
</h3>


              
              <a
                href={game.gameurl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-4 py-2 bg-blue-900 font-bold text-white rounded hover:bg-blue-700 transition"
              >
                Play Now
              </a>
            </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-4">
            Games Loading......
          </p>
        )}
      </div>

      {/* Pagination */}
      {games.length > gamesPerPage && (
        <div className="flex justify-center mt-8 space-x-4">
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-300 text-blue-900 font-bold rounded disabled:opacity-50"
          >
            Previous
          </button>

          <span className="text-white font-bold py-3">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-300 text-blue-900 font-bold rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default CategoryGames;
