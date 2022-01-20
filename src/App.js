import './App.css';
import StartGamePage from "./pages/StartGamePage";
import MainPage from "./pages/MainPage";
import ShopPage from "./pages/ShopPage";
import ArenaPage from "./pages/ArenaPage";
import Modal from "./components/Modal";
import {BrowserRouter, Routes, Route} from "react-router-dom";

//need to remove item when potion is used

function App() {
  return (
    <div className="App">
      <Modal/>

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
