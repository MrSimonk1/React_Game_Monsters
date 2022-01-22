import React from 'react';
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

const ToolbarShopArena = () => {

    const equippedWeapon = useSelector((state) => state.weapon.value)

    const navigate = useNavigate();

    function navigateToArena() {
        if (Object.keys(equippedWeapon).length > 0) {
            {navigate("/arena")};
        } else {
            alert("To go to battle you must equip a weapon. Equip/buy a weapon.")
        }
    }

    return (
        <div className="toolbar">
            <div onClick={() => {navigate("/my-character")}}>My Character</div>
            <div onClick={() => navigateToArena()}>Arena</div>
        </div>
    );
};

export default ToolbarShopArena;