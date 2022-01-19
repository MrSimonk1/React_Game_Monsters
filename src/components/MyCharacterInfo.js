import React from 'react';
import {useSelector} from "react-redux";
import EquippedWeapon from "./EquippedWeapon";

const MyCharacterInfo = () => {

    const myCharacter = useSelector((state) => state.character.value)

    return (
        <div className="grow1">
            <div className="d-flex a-center">
                <img className="grow1" src={myCharacter.image} alt=""/>

                <div className="myCharInfo grow1">
                    <div>Damage: {myCharacter.damage}</div>
                    <div>Health: {myCharacter.health}</div>
                    <div>Energy: {myCharacter.energy}</div>
                    <div>Stamina: {myCharacter.stamina}</div>
                    <div>Strength: {myCharacter.stamina}</div>
                    <div>Inventory slots: {myCharacter.inventorySlots}</div>
                    <div>Gold: {myCharacter.gold}</div>
                </div>
            </div>

            <EquippedWeapon/>

        </div>
    );
};

export default MyCharacterInfo;