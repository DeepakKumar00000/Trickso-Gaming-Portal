
// import { Routes, Route } from 'react-router-dom';
// import Navbar from './Components/Navbar';
// import TournamentSection from './Components/TournamentSection';
// import ChallengesSection from './Components/ChallengesSection';
// import CasualGaming from './Components/CasualGaming';
// import CategoryGames from './Components/CategoryGames';

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={
//           <>
//             <div id="tournament"><TournamentSection /></div>
//             <div id="challenge"><ChallengesSection /></div>
//             <div id="casual-gaming"><CasualGaming /></div>
//           </>
//         } />
//         <Route path="/category/:categoryName" element={<CategoryGames />} />
//       </Routes>
//     </>
//   );
// }

// export default App;


import { Routes, Route } from "react-router-dom";
import TournamentSection from "./Components/TournamentSection";
import CategoryGames from "./Components/CategoryGames";
import Layout from "./Components/Layout";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<TournamentSection />} />
        <Route path="/category/:categoryName" element={<CategoryGames />} />
       
      </Route>
    </Routes>
  );
}

export default App;
