import React from 'react';
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {removeFromInventory} from "../features/Inventory";
import {addToInventory} from "../features/Inventory";
import {addGold} from "../features/MyCharacter";
import {chooseWeapon} from "../features/Weapon";
import {addStatsFromWeapon} from "../features/MyCharacter";
import {removeStatsFromWeapon} from "../features/MyCharacter";


const MyInventory = () => {

    const dispatch = useDispatch();

    const inventory = useSelector((state) => state.inventory.value);
    const myCharacter = useSelector((state) => state.character.value);
    const equippedWeapon = useSelector((state) => state.weapon.value);

    function sell(x, i) {
        dispatch(removeFromInventory(i));
        dispatch(addGold(x.price/2));
    }

    function equip(x, i, category) {
        if (category === "weapon") {
            if (Object.keys(equippedWeapon).length > 0) {
                dispatch(addToInventory(equippedWeapon))
                dispatch(removeStatsFromWeapon(equippedWeapon))
            }
            dispatch(chooseWeapon(x));
            dispatch(removeFromInventory(i));
            dispatch(addStatsFromWeapon(x));
        }
        if (category === "potion") {
            dispatch(removeFromInventory(i));
        }

    }

    let windowOpened = window.location.href

    function showBtn(x, i, category) {
        if (windowOpened.includes("my-character")) {
            console.log(Object.keys(x))
            if (Object.keys(x)[1] === "maxDamage") {
                return (
                    <div>
                        <button onClick={() => equip(x, i, category)}>Equip</button>
                    </div>
                )
            }
        } else {
            return (
                <div>
                    <button onClick={() => sell(x, i)}>Sell</button>
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
                {inventory.length > 0 && inventory.map((x, i) =>
                    <div key={i} className="d-flex">
                    <img src={x.image} alt=""/>
                        {Object.keys(x)[1] === "maxDamage" ?
                        <div>
                            <div>Max dmg: {x.maxDamage}</div>
                            <div>Selling price: {x.price/2}</div>
                            <div>Energy per hit: {x.energyPerHit}</div>
                            {x.effectsEffects.length === 0 && <div>Effects: none</div>}
                            {x.effectsEffects.length > 0 && <div>
                                <div>Effects:</div>
                                {x.effectsEffects.map((eff, index) => <div key={index}>{eff.title}</div>)}
                            </div>}
                        </div> :
                        <div>
                            <div>Title: {x.title}</div>
                            <div>Selling price: {x.price/2}</div>
                        </div>}
                        {Object.keys(x)[1] === "maxDamage" ? showBtn(x, i, "weapon") : showBtn(x, i, "potion")}
                </div>)}
            </div>

        </div>
    );
};

export default MyInventory;