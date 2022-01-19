import React from 'react';
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {removeFromInventory} from "../features/Inventory";

const MyInventory = () => {

    const dispatch = useDispatch();

    const inventory = useSelector((state) => state.inventory.value);
    const myCharacter = useSelector((state) => state.character.value);

    function sell(i) {
        dispatch(removeFromInventory(i));
    }

    return (
        <div className="d-flex column">
            {inventory.length === 0 ? <div className="d-flex space-evenly">
                <h2>Inventory: 0/{myCharacter.inventorySlots} </h2>
                <h2>Gold: {myCharacter.gold}</h2>
            </div> : <div className="d-flex space-evenly">
                <h2>Inventory: {inventory.length}/{myCharacter.inventorySlots}</h2>
                <h2>Gold: {myCharacter.gold}</h2>
            </div>}
            <div className="inventoryDiv d-flex f-wrap">
                {inventory.length > 0 && inventory.map((x, i) => <div key={i} className="d-flex">
                    <img src={x.image} alt=""/>
                    <div>
                        <div>Max dmg: {x.maxDamage}</div>
                        <div>Selling price: {x.price/2}</div>
                        <div>Energy per hit: {x.energyPerHit}</div>
                        <div>Effects: {x.effects}</div>
                    </div>
                    <button onClick={() => sell(i)}>Sell</button>
                </div>)}
            </div>

        </div>
    );
};

export default MyInventory;