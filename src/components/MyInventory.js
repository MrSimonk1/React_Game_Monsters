import React from 'react';
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {removeFromInventory} from "../features/Inventory";
import {addToInventory} from "../features/Inventory";
import {addGold} from "../features/MyCharacter";
import {chooseWeapon} from "../features/Weapon";


const MyInventory = () => {

    const dispatch = useDispatch();

    const inventory = useSelector((state) => state.inventory.value);
    const myCharacter = useSelector((state) => state.character.value);
    const equippedWeapon = useSelector((state) => state.weapon.value);

    function sell(x, i) {
        dispatch(removeFromInventory(i));
        dispatch(addGold(x.price/2));
    }

    function equip(x, i) {
        if (Object.keys(equippedWeapon).length > 0) {
            dispatch(addToInventory(equippedWeapon))
        }
        dispatch(chooseWeapon(x));
        dispatch(removeFromInventory(i));
    }

    let windowOpened = window.location.href

    function showBtn(x, i) {
        if (windowOpened.includes("my-character")) {
            return (
                <div>
                    <button onClick={() => equip(x, i)}>Equip</button>
                </div>

            )
        } else {
            return (
                <div>
                    <button onClick={() => sell(i)}>Sell</button>
                </div>
            )
        }
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
                    {showBtn(x, i)}
                </div>)}
            </div>

        </div>
    );
};

export default MyInventory;