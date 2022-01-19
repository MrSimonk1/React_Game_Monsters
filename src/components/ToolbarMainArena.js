import React from 'react';
import {useNavigate} from "react-router-dom";

const ToolbarShopArena = () => {

    const navigate = useNavigate();

    return (
        <div className="toolbar">
            <div onClick={() => {navigate("/my-character")}}>Main</div>
            <div onClick={() => {navigate("/arena")}}>Arena</div>
        </div>
    );
};

export default ToolbarShopArena;