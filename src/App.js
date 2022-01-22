import './App.css';
import StartGamePage from "./pages/StartGamePage";
import MainPage from "./pages/MainPage";
import ShopPage from "./pages/ShopPage";
import ArenaPage from "./pages/ArenaPage";
import {BrowserRouter, Routes, Route} from "react-router-dom";

//need to fix timeouts of error messages when fighting;

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartGamePage/>}/>
          <Route path="/my-character" element={<MainPage/>}/>
          <Route path="/shop" element={<ShopPage/>}/>
          <Route path="/arena" element={<ArenaPage/>}/>
        </Routes>
      </BrowserRouter>


    </div>

  );
}

export default App;
