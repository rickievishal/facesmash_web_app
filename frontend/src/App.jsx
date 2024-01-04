



import Ratingpage from "./components/Ratingpage";
import { Route, Routes } from "react-router-dom";

import Queensboard from "./components/Queensboard";
import Loginpage from "./components/Loginpage";
import Leaderboard from "./components/Leaderboard";

const App = () => {



  return (
    <div className="w-screen h-screen relative bg-white">
      {/* <nav className="w-full h-[50px] bg-red-600 flex justify-center items-center absolute top-0">
        <p className="text-[20pt] text-white">Facesmash</p>
      </nav> */}
      <Routes>

      <Route path="/" element={<Ratingpage />}></Route>
      <Route path="/queensboard" element={<Queensboard/>}></Route>
      <Route path="/loginpage" element={<Loginpage/>}></Route>
      <Route path="/leaderboard" element={<Leaderboard/>}></Route>


      </Routes>
    </div>
  );
};

export default App;
