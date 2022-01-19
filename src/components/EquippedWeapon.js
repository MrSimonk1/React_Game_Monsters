import React from 'react';
import {useSelector} from "react-redux";

const EquippedWeapon = () => {

    const weapon = useSelector((state) => state.weapon.value);

    return (
        <div className="p-20">
            <h2>Equipped weapon:</h2>
            {Object.keys(weapon).length === 0 ? <h2>Nothing is equipped</h2> : <div className="d-flex gap-10">
                <img src={weapon.image} alt=""/>
                <div>
                    <div>Max dmg: {weapon.maxDamage}</div>
                    <div>Energy per hit: {weapon.energyPerHit}</div>
                    <div>Effects: {weapon.effects}</div>
                </div>

            </div>}
        </div>
    );
};

export default EquippedWeapon;