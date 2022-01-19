import React from 'react';
import ToolbarShopArena from "../components/ToolbarShopArena";
import MyCharacterInfo from "../components/MyCharacterInfo";
import MyInventory from "../components/MyInventory";

const MainPage = () => {
    return (
        <div className="mainPage">
            <ToolbarShopArena/>
            <div className="d-flex">
                <MyCharacterInfo/>
                <MyInventory/>
            </div>
        </div>
    );
};

export default MainPage;