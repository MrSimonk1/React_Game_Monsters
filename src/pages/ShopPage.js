import React from 'react';
import ToolbarMainArena from "../components/ToolbarMainArena";
import MyInventory from "../components/MyInventory";
import Shop from "../components/Shop";

const ShopPage = () => {
    return (
        <div className="shopDiv">
            <ToolbarMainArena/>
            <div className="d-flex">
                <div className="grow1">
                    <Shop/>
                </div>
                <div className="grow1">
                    <MyInventory/>
                </div>
            </div>
        </div>
    );
};

export default ShopPage;