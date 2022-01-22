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
        if (Object.keys(x).length === 2) {
            dispatch(addGold(x.price));
        } else {
            dispatch(addGold(x.price/2));
        }
    }

    function equip(x, i) {

        let removingItemSlots = 0;
        if (Object.keys(equippedWeapon).length > 0) {
            equippedWeapon.effectsEffects.map(y => {
                if (y.title.includes("Inventory")) {
                    removingItemSlots = y.effect.inventorySlots;
                }
            })
        }

        let addingItemSlots = 0;
        x.effectsEffects.map(z => {
            if (z.title.includes("Inventory")) {
                addingItemSlots = z.effect.inventorySlots;
            }
        })

        if (Object.keys(equippedWeapon).length > 0) {
            if ((myCharacter.inventorySlots - removingItemSlots + addingItemSlots) >= inventory.length) {
                dispatch(addToInventory(equippedWeapon))
                dispatch(removeStatsFromWeapon(equippedWeapon))
            } else {
                alert("you can't change this weapon, because CURRENTLY EQUIPPED weapon is adding inventory slots and the WEAPON YOU WANT TO EQUIP does not provide enough inventory slots. " +
                    "Either equip another weapon or sell some inventory Items to free up space" +
                    `Max inventory slots without weapon: ${myCharacter.inventorySlots - removingItemSlots}`)
                return
            }
        }
        dispatch(chooseWeapon(x));
        dispatch(removeFromInventory(i));
        dispatch(addStatsFromWeapon(x));
    }

    let windowOpened = window.location.href

    function showBtn(x, i, category) {
        if (windowOpened.includes("my-character")) {
            if (Object.keys(x)[1] === "maxDamage") {
                return (
                    <div>
                        <button onClick={() => equip(x, i, category)}>Equip</button>
                    </div>
                )
            }
        }
        if (windowOpened.includes("shop")) {
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
                            <div>{x.title}</div>
                            {Object.keys(x).length === 2 ? <div>Selling price: {x.price}</div> : <div>Selling price: {x.price/2}</div>}
                        </div>}
                        {Object.keys(x)[1] === "maxDamage" ? showBtn(x, i) : showBtn(x, i)}
                </div>)}
            </div>

        </div>
    );
};

export default MyInventory;