import React from 'react';
import ToolbarShopArena from "../components/ToolbarShopArena";
import MyCharacterInfo from "../components/MyCharacterInfo";
import MyInventory from "../components/MyInventory";

const MainPage = () => {
    return (
        <div className="mainPage">
            <ToolbarShopArena/>
            <div className="d-flex">
                <div className="grow1">
                    <MyCharacterInfo/>
                </div>
                <div className="grow1">
                    <MyInventory/>
                </div>
            </div>
        </div>
    );
};

export default MainPage;