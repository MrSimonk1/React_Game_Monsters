import React from 'react';
import {useSelector} from "react-redux";
import {clearWeapon} from "../features/Weapon";
import {removeStatsFromWeapon} from "../features/MyCharacter";
import {addToInventory} from "../features/Inventory";
import {useDispatch} from "react-redux";

const EquippedWeapon = () => {

    const weapon = useSelector((state) => state.weapon.value);
    const myChar = useSelector((state) => state.character.value);
    const inventory = useSelector((state) => state.inventory.value)
    const dispatch = useDispatch()

    function unequipWeapon(weapon) {
        let removingItemSlots = 0;
        weapon.effectsEffects.map(x => {
            if (x.title.includes("Inventory")) {
                removingItemSlots = x.effect.inventorySlots
            }
        })
        if ((myChar.inventorySlots - removingItemSlots) >= (inventory.length + 1)) {
            dispatch(clearWeapon());
            dispatch(removeStatsFromWeapon(weapon));
            dispatch(addToInventory(weapon))
        } else {
            alert("you can't unequip this weapon, because CURRENTLY EQUIPPED weapon is adding inventory slots and by removing it you won't have enough slots for your inventory. " +
                "Either equip another weapon or sell some inventory Items to free up space" +
                `Max inventory slots without weapon: ${myChar.inventorySlots - removingItemSlots}`)
        }
    }

    return (
        <div className="p-20">
            <h2>Equipped weapon:</h2>
            {Object.keys(weapon).length === 0 ? <div className="emptySlot">Weapon is not equipped</div> : <div className="d-flex gap-10">
                <div>
                    <img src={weapon.image} alt=""/>
                </div>
                <div>
                    <div>Max dmg: {weapon.maxDamage}</div>
                    <div>Energy per hit: {weapon.energyPerHit}</div>
                    {weapon.effectsEffects.length === 0 && <div>Effects: none</div>}
                    {weapon.effectsEffects.length > 0 && <div>
                        <div>Effects:</div>
                        {weapon.effectsEffects.map((eff, index) => <div key={index}>{eff.title}</div>)}
                    </div>}
                </div>
                {window.location.href.includes("my-character") &&
                <div>
                    <button className="unequipBtn" onClick={() => unequipWeapon(weapon)}>Unequip</button>
                </div>}
            </div>}
        </div>
    );
};

export default EquippedWeapon;