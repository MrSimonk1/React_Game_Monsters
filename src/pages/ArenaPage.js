import React, {useState} from 'react';
import MyCharacterInfo from "../components/MyCharacterInfo";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {createMonster} from "../features/Monster";
import {removeOnlyPotion} from "../features/Inventory";
import MyInventory from "../components/MyInventory";
import {useNavigate} from "react-router-dom";
import {clearWeapon} from "../features/Weapon";
import {clearInventory} from "../features/Inventory";
import {addItems} from "../features/DropItems";
import {removeDroppedItem} from "../features/DropItems";
import {addToInventory} from "../features/Inventory";

const ArenaPage = () => {

    const navigate = useNavigate();
    const monsters = [
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/b/b1/Basilisk.png",
            name: "Basilisk",
            maxDamage: 5,
            health: 100,
            maxItemsDrop: 1
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/7/75/VampireBat.png",
            name: "Bat",
            maxDamage: 8,
            health: 80,
            maxItemsDrop: 1
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/a/a4/Bear.png",
            name: "Bear",
            maxDamage: 20,
            health: 150,
            maxItemsDrop: 3
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/6/60/Beetle.png",
            name: "Beetle",
            maxDamage: 3,
            health: 300,
            maxItemsDrop: 1
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/6/6f/Boar.png",
            name: "Boar",
            maxDamage: 7,
            health: 85,
            maxItemsDrop: 1
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/0/01/Vulture.png",
            name: "Carrion bird",
            maxDamage: 6,
            health: 170,
            maxItemsDrop: 1
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/3/36/Chimera.png",
            name: "Chimaera",
            maxDamage: 12,
            health: 190,
            maxItemsDrop: 2
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/3/33/Clefthoof.png",
            name: "Clefthoof",
            maxDamage: 50,
            health: 500,
            maxItemsDrop: 4
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/6/63/Crab.png",
            name: "Crab",
            maxDamage: 8,
            health: 120,
            maxItemsDrop: 3
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/4/46/Crocolisk.png",
            name: "Crocolisk",
            maxDamage: 38,
            health: 420,
            maxItemsDrop: 3
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/5/51/Devilsaur.png",
            name: "Devilsaur",
            maxDamage: 25,
            health: 250,
            maxItemsDrop: 3
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/6/6c/Diemetradon.png",
            name: "Diemetradon",
            maxDamage: 12,
            health: 90,
            maxItemsDrop: 2

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/3/34/Dragonhawk1.png",
            name: "Dragonhawk",
            maxDamage: 120,
            health: 20,
            maxItemsDrop: 5
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/0/03/Elekk.png",
            name: "Elekk",
            maxDamage: 34,
            health: 160,
            maxItemsDrop: 4

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/7/73/Fox.png",
            name: "Fox",
            maxDamage: 5,
            health: 50,
            maxItemsDrop: 2

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/2/2f/Gryphon.png",
            name: "Gryphon",
            maxDamage: 18,
            health: 350,
            maxItemsDrop: 2

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/8/84/Gorilla.png",
            name: "Gorilla",
            maxDamage: 30,
            health: 240,
            maxItemsDrop: 3

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/c/c3/Horse.png",
            name: "Horse",
            maxDamage: 3,
            health: 150,
            maxItemsDrop: 1

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/9/9d/Hydra.png",
            name: "Hydra",
            maxDamage: 40,
            health: 500,
            maxItemsDrop: 5
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/e/ee/HyenaBlue.png",
            name: "Hyena",
            maxDamage: 9,
            health: 120,
            maxItemsDrop: 2

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/e/e5/Cat_lion.png",
            name: "Lion",
            maxDamage: 13,
            health: 200,
            maxItemsDrop: 2

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/b/b8/Lynx.png",
            name: "Lynx",
            maxDamage: 12,
            health: 150,
            maxItemsDrop: 1

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/9/9c/Mastiff.png",
            name: "Mastiff",
            maxDamage: 7,
            health: 80,
            maxItemsDrop: 1

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/2/27/Monkey.png",
            name: "Monkey",
            maxDamage: 4,
            health: 300,
            maxItemsDrop: 1

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/0/08/Netherray.png",
            name: "Nether ray",
            maxDamage: 6,
            health: 120,
            maxItemsDrop: 1

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/b/be/OwlWhite.png",
            name: "Owl",
            maxDamage: 7,
            health: 70,
            maxItemsDrop: 2

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/3/36/Panther.png",
            name: "Panther",
            maxDamage: 19,
            health: 40,
            maxItemsDrop: 3

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/1/16/Parrot.png",
            name: "Parrot",
            maxDamage: 2,
            health: 30,
            maxItemsDrop: 1

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/6/66/Raven.png",
            name: "Raven",
            maxDamage: 8,
            health: 150,
            maxItemsDrop: 1

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/c/c2/Rhino.png",
            name: "Rhinoceros",
            maxDamage: 120,
            health: 1500,
            maxItemsDrop: 8
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/a/ab/Scorpion.png",
            name: "Scorpid",
            maxDamage: 25,
            health: 300,
            maxItemsDrop: 3

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/1/1a/Sea_Snake.png",
            name: "Sea snake",
            maxDamage: 5,
            health: 50,
            maxItemsDrop: 1

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/8/89/Serpent.png",
            name: "Serpent",
            maxDamage: 12,
            health: 80,
            maxItemsDrop: 1

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/1/14/Shark.png",
            name: "Shark",
            maxDamage: 15,
            health: 210,
            maxItemsDrop: 2

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/5/51/Sporebat.png",
            name: "Spore bat",
            maxDamage: 9,
            health: 150,
            maxItemsDrop: 2
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/1/10/Stag.png",
            name: "Stag",
            maxDamage: 4,
            health: 200,
            maxItemsDrop: 2

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/1/12/Strider.png",
            name: "Tallstrider",
            maxDamage: 20,
            health: 80,
            maxItemsDrop: 2
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/3/3c/Threshadon.png",
            name: "Threshadon",
            maxDamage: 70,
            health: 800,
            maxItemsDrop: 3

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/e/e9/Turtle.png",
            name: "Turtle",
            maxDamage: 5,
            health: 5000,
            maxItemsDrop: 10
        }
    ];

    const myChar = useSelector((state) => state.character.value);
    const monster = useSelector((state) => state.monster.value);
    const weaponEquipped = useSelector((state) => state.weapon.value);
    const inventory = useSelector((state) => state.inventory.value);
    const droppedItems = useSelector((state) => state.drop.value);

    const dispatch = useDispatch();

    const [getLost, setLost] = useState(false);
    const [getMyHealth, setMyHealth] = useState(myChar.health);
    const [getMyEnergy, setMyEnergy] = useState(myChar.energy);
    const [getIsFighting, setIsFighting] = useState(false);
    const [getShowDropped, setShowDropped] = useState(false);
    const [getMonsterHealth, setMonsterHealth] = useState(0);
    const [getInitialMonsterHealth, setInitialMonsterHealth] = useState(0);
    const [getMessage, setMessage] = useState("");

    function showHealth() {

        let stylingMain = {
            height: 50,
            width: 350,
            border: "1px solid black",
            marginLeft: 20,
        }

        let healthPercentage = getMyHealth/myChar.health*100;

        let stylingLittle = {
            height: "100%",
            width: `${healthPercentage}%`,
            backgroundColor: "green"
        }

        return (
            <div>
                <div style={stylingMain}>
                    <div style={stylingLittle}>

                    </div>

                    <div className="healthAndEnergyInfo">
                        {getMyHealth} / {myChar.health}
                    </div>

                </div>
            </div>
        )
    }

    function showEnergy() {

        let stylingMain = {
            height: 50,
            width: 350,
            border: "1px solid black",
            marginLeft: 20,
            marginTop: 20
        }

        let energyPercentage = getMyEnergy/myChar.energy*100;

        let stylingLittle = {
            height: "100%",
            width: `${energyPercentage}%`,
            backgroundColor: "lightBlue"
        }

        return (
            <div>
                <div style={stylingMain}>
                    <div style={stylingLittle}>
                    </div>
                    <div className="healthAndEnergyInfo">
                        {getMyEnergy} / {myChar.energy}
                    </div>
                </div>
            </div>
        )
    }

    function showMonsterHealth() {

            let stylingMain = {
                height: 50,
                width: 350,
                border: "1px solid black",
                marginLeft: 20,
            }

            let healthPercentage = getMonsterHealth/getInitialMonsterHealth*100;

            let stylingLittle = {
                height: "100%",
                width: `${healthPercentage}%`,
                backgroundColor: "green"
            }

            return (
                <div>
                    <div style={stylingMain}>
                        <div style={stylingLittle}>

                        </div>
                        <div className="healthAndEnergyInfo">
                            {getMonsterHealth} / {getInitialMonsterHealth}
                        </div>
                    </div>
                </div>
            )
    }

    function changeIsFighting(boolean) {
        setIsFighting(boolean);
    }

    function changeShowDropped(boolean) {
        setShowDropped(boolean)
    }

    function generateDrop(num) {
        const dropItems = [
            {
                image: "https://wow.gamepressure.com/gfx/icons/INV_Chest_Leather_09.gif",
                price: 245,
            },
            {
                image: "https://wow.gamepressure.com/gfx/icons/INV_Chest_Chain.gif",
                price: 63
            },
            {
                image: "https://wow.gamepressure.com/gfx/icons/INV_Chest_Cloth_33.gif",
                price: 3
            }, {
                image: "https://wow.gamepressure.com/gfx/icons/INV_Chest_Plate04.gif",
                price: 497
            }, {
                image: "https://wow.gamepressure.com/gfx/icons/INV_Shirt_Blue_01.gif",
                price: 33
            }, {
                image: "https://wow.gamepressure.com/gfx/icons/INV_Shirt_05.gif",
                price: 52
            }, {
                image: "https://wow.gamepressure.com/gfx/icons/INV_Shirt_Grey_01.gif",
                price: 27
            }, {
                image: "https://wow.gamepressure.com/gfx/icons/INV_Shirt_16.gif",
                price: 22
            }, {
                image: "https://wow.gamepressure.com/gfx/icons/INV_Chest_Chain.gif",
                price: 173
            }, {
                image: "https://wow.gamepressure.com/gfx/icons/INV_Chest_Cloth_23.gif",
                price: 3
            }, {
                image: "https://wow.gamepressure.com/gfx/icons/INV_Chest_Chain.gif",
                price: 123
            }, {
                image: "https://wow.gamepressure.com/gfx/icons/INV_Chest_Wolf.gif",
                price: 70
            }, {
                image: "https://wow.gamepressure.com/gfx/icons/INV_Chest_Chain_05.gif",
                price: 48
            }, {
                image: "https://wow.gamepressure.com/gfx/icons/INV_Chest_Cloth_22.gif",
                price: 3
            }, {
                image: "https://wow.gamepressure.com/gfx/icons/INV_Chest_Cloth_40.gif",
                price: 44
            }, {
                image: "https://wow.gamepressure.com/gfx/icons/INV_Chest_Cloth_13.gif",
                price: 3
            }, {
                image: "https://wow.gamepressure.com/gfx/icons/INV_Chest_Cloth_16.gif",
                price: 3
            }, {
                image: "https://wow.gamepressure.com/gfx/icons/INV_Chest_Plate04.gif",
                price: 1088
            },
            {
                image: "https://wow.gamepressure.com/gfx/icons/INV_Misc_Bag_09_Red.gif",
                price: 20
            },
            {
                image: "https://wow.gamepressure.com/gfx/icons/INV_Misc_Bag_EnchantedMageweave.gif",
                price: 200
            },    {
                image: "https://wow.gamepressure.com/gfx/icons/INV_Misc_Bag_FelclothBag.gif",
                price:240
            },    {
                image: "https://wow.gamepressure.com/gfx/icons/INV_Misc_Bag_10_Red.gif",
                price: 180
            },    {
                image: "https://wow.gamepressure.com/gfx/icons/INV_Misc_Bag_07_Black.gif",
                price: 150
            },    {
                image: "https://wow.gamepressure.com/gfx/icons/INV_Misc_Bag_02.gif",
                price: 120
            },    {
                image: "https://wow.gamepressure.com/gfx/icons/INV_Misc_Bag_08.gif",
                price: 0
            },    {
                image: "https://wow.gamepressure.com/gfx/icons/INV_Misc_Bag_27.gif",
                price: 500
            },    {
                image: "https://wow.gamepressure.com/gfx/icons/INV_Boots_09.gif",
                price: 349
            },    {
                image: "https://wow.gamepressure.com/gfx/icons/INV_Boots_01.gif",
                price: 88
            },    {
                image: "https://wow.gamepressure.com/gfx/icons/INV_Boots_08.gif",
                price: 458
            },    {
                image: "https://wow.gamepressure.com/gfx/icons/INV_Boots_Leather01.gif",
                price: 255
            },
            {
                image: "https://wow.gamepressure.com/gfx/icons/INV_Boots_Cloth_03.gif",
                price: 128
            },
            {
                image: "https://wow.gamepressure.com/gfx/icons/INV_Boots_05.gif",
                price: 16
            },
            {
                image: "https://wow.gamepressure.com/gfx/icons/INV_Boots_Plate_07.gif",
                price: 612
            },
            {
                image: "https://wow.gamepressure.com/gfx/icons/INV_Boots_Chain_05.gif",
                price: 605
            },
            {
                image: "https://wow.gamepressure.com/gfx/icons/INV_Boots_02.gif",
                price: 52
            },
            {
                image: "https://wow.gamepressure.com/gfx/icons/INV_Boots_Fabric_01.gif",
                price: 24
            },
            {
                image: "https://wow.gamepressure.com/gfx/icons/INV_Boots_Cloth_16.gif",
                price: 177
            },
            {
                image: "https://wow.gamepressure.com/gfx/icons/INV_Gauntlets_32.gif",
                price: 38
            },
            {
                image: "https://wow.gamepressure.com/gfx/icons/INV_Gauntlets_49.gif",
                price: 198
            },
            {
                image: "https://wow.gamepressure.com/gfx/icons/INV_Gauntlets_16.gif",
                price: 97
            },
            {
                image: "https://wow.gamepressure.com/gfx/icons/INV_Gauntlets_14.gif",
                price: 118
            },
            {
                image: "https://wow.gamepressure.com/gfx/icons/INV_Gauntlets_28.gif",
                price: 59
            },
            {
                image: "https://wow.gamepressure.com/gfx/icons/INV_Gauntlets_63.gif",
                price: 148
            },
            {
                image: "https://wow.gamepressure.com/gfx/icons/INV_Gauntlets_21.gif",
                price: 21
            },
            {
                image: "https://wow.gamepressure.com/gfx/icons/INV_Gauntlets_05.gif",
                price: 123
            },
            {
                image: "https://wow.gamepressure.com/gfx/icons/INV_Gauntlets_06.gif",
                price: 114
            },
            {
                image: "https://wow.gamepressure.com/gfx/icons/INV_Gauntlets_05.gif",
                price: 48
            },
            {
                image: "https://wow.gamepressure.com/gfx/icons/INV_Gauntlets_23.gif",
                price: 38
            },
            {
                image: "https://wow.gamepressure.com/gfx/icons/INV_Gauntlets_20.gif",
                price: 27
            },
            {
                image: "https://wow.gamepressure.com/gfx/icons/INV_Gauntlets_05.gif",
                price: 6
            },
            {
                image: "https://wow.gamepressure.com/gfx/icons/INV_Gauntlets_21.gif",
                price: 29
            },
            {
                image: "https://wow.gamepressure.com/gfx/icons/INV_Helmet_69.gif",
                price: 689
            },
            {
                image: "https://wow.gamepressure.com/gfx/icons/INV_Helmet_121.gif",
                price: 178
            },
            {
                image: "https://wow.gamepressure.com/gfx/icons/INV_Helmet_31.gif",
                price: 38
            },    {
                image: "https://wow.gamepressure.com/gfx/icons/INV_Helmet_39.gif",
                price: 183
            },
            {
                image: "https://wow.gamepressure.com/gfx/icons/INV_Helmet_125.gif",
                price: 140
            },    {
                image: "https://wow.gamepressure.com/gfx/icons/INV_Helmet_108.gif",
                price: 258
            },
            {
                image: "https://wow.gamepressure.com/gfx/icons/INV_Helmet_13.gif",
                price: 95
            },
            {
                image: "https://wow.gamepressure.com/gfx/icons/INV_Helmet_20.gif",
                price: 683
            },
            {
                image: "https://wow.gamepressure.com/gfx/icons/INV_Helmet_30.gif",
                price: 122
            },
            {
                image: "https://wow.gamepressure.com/gfx/icons/INV_Belt_22.gif",
                price: 48
            },
            {
                image: "https://wow.gamepressure.com/gfx/icons/INV_Helmet_09.gif",
                price: 78
            },
            {
                image: "https://wow.gamepressure.com/gfx/icons/INV_Pants_Mail_21.gif",
                price: 800
            },
            {
                image: "https://wow.gamepressure.com/gfx/icons/INV_Pants_Cloth_16.gif",
                price: 110
            },
            {
                image: "https://wow.gamepressure.com/gfx/icons/INV_Pants_Cloth_14.gif",
                price: 136
            },
            {
                image: "https://wow.gamepressure.com/gfx/icons/INV_Pants_07.gif",
                price: 92
            },
            {
                image: "https://wow.gamepressure.com/gfx/icons/INV_Pants_06.gif",
                price: 239
            },
            {
                image: "https://wow.gamepressure.com/gfx/icons/INV_Pants_03.gif",
                price: 263
            },
            {
                image: "https://wow.gamepressure.com/gfx/icons/INV_Pants_07.gif",
                price: 18
            },
            {
                image: "https://wow.gamepressure.com/gfx/icons/INV_Pants_13.gif",
                price: 38
            },
            {
                image: "https://wow.gamepressure.com/gfx/icons/INV_Pants_Leather_20.gif",
                price: 197
            },
            {
                image: "https://wow.gamepressure.com/gfx/icons/INV_Pants_Plate_12.gif",
                price: 1200
            },
            {
                image: "https://wow.gamepressure.com/gfx/icons/INV_Pants_Leather_13.gif",
                price: 316
            },
            {
                image: "https://wow.gamepressure.com/gfx/icons/INV_Jewelry_Ring_31.gif",
                price: 12
            },
            {
                image: "https://wow.gamepressure.com/gfx/icons/INV_Jewelry_Ring_36.gif",
                price: 15
            },
            {
                image: "https://wow.gamepressure.com/gfx/icons/INV_Jewelry_Ring_40.gif",
                price: 58
            },
            {
                image: "https://wow.gamepressure.com/gfx/icons/INV_Jewelry_Ring_12.gif",
                price: 1
            },
            {
                image: "https://wow.gamepressure.com/gfx/icons/Achievement_Dungeon_UlduarRaid_Misc_02.gif",
                price: 440
            },
            {
                image: "https://wow.gamepressure.com/gfx/icons/INV_Jewelry_Ring_35.gif",
                price: 57
            },
            {
                image: "https://wow.gamepressure.com/gfx/icons/INV_Jewelry_Ring_33.gif",
                price: 20
            }
        ]
        let items = [];

        for (let i = 0; i <= num-1; i++) {
            const randomNum = Math.floor(Math.random()*dropItems.length);
            items.push(dropItems[randomNum]);
        }

        dispatch(addItems(items))
    }

    function removeFromDropped(item, index) {
        if (inventory.length < myChar.inventorySlots) {
            dispatch(removeDroppedItem(index))
            dispatch(addToInventory(item))
        } else {
            setMessage("Not enough room in Inventory");
            timeout();
        }
    }

    function showDroppedItems() {
        return (
            <div className="droppedItems">
                {droppedItems.length === 0 && <h2>Monster didn't drop any items or you already collected all of them</h2>}
                {droppedItems.length > 0 && droppedItems.map((x, i) => <div key={i}>
                    <img src={x.image} alt=""/>
                    <div>Worth: {x.price}</div>
                    <button onClick={() => removeFromDropped(x, i)}>Collect</button>
                </div>)}
            </div>
        )
    }

    function drinkPotion(potion) {
        dispatch(removeOnlyPotion(potion));
        const key = Object.keys(potion.effect);
        if (key[0] === "health") {
            if (getMyHealth + potion.effect[key] <= myChar.health) {
                setMyHealth(getMyHealth + potion.effect[key])  // adding health
            } else {
                setMyHealth(myChar.health);
            }
        }
        if (key[0] === "energy") {

            if (getMyEnergy + potion.effect[key] <= myChar.energy) {
                setMyEnergy(getMyEnergy + potion.effect[key]) // adding energy
            } else {
                setMyEnergy(myChar.energy);
            }
        }
    }

    function showPotions() {
        let newArr = [];
        if (inventory.length > 0) {
            inventory.map(x => {
                if (Object.keys(x).length < 5 && Object.keys(x).length > 2) {
                    newArr.push(x);
                }
            })
        }

        return (
            newArr.map((potion, index) => <div className="d-flex a-center" key={index}>
                <img src={potion.image} alt=""/>

                <div className="d-flex column j-center a-center">
                    <div>{potion.title}</div>
                    {!getShowDropped &&
                    <button className="drinkBtn" onClick={() => drinkPotion(potion)}>Drink</button>
                    }
                </div>
            </div>)
        )
    }

    function generateMonster() {
        setMessage("");
        const randomNum = Math.floor(Math.random()*monsters.length);
        dispatch(createMonster(monsters[randomNum]));
        setMonsterHealth(monsters[randomNum].health);
        setInitialMonsterHealth(monsters[randomNum].health);
        changeIsFighting(true);
        changeShowDropped(false);
    }

    function displayMonster() {
        if (monster === null) {
            return (
                <div>no monster</div>
            )
        } else {
            return (
                <div className="d-flex a-center">
                    <div className="monsterAbout grow1">
                        <div>Max Damage: {monster.maxDamage}</div>
                        <div>Health: {monster.health}</div>
                        <div>Max Item Drop: {monster.maxItemsDrop}</div>
                    </div>
                    <div className="monster grow1">
                        <h2>{monster.name}</h2>
                        <img className="monsterImg" src={monster.image} alt=""/>
                    </div>
                </div>
            )
        }
    }

    function eraseCharacter() {
        dispatch(clearWeapon());
        dispatch(clearInventory());
    }

    function eraseMessage() {
        setMessage("");
    }

    const timeout = () => {
        setTimeout(eraseMessage, 2000);
    }

    function goToStartPage() {
        {navigate("/")}
    }

    function attack() {
        setMessage("");
        clearTimeout(timeout)

        const randomDmgToPlayer = Math.floor(Math.random()*monster.maxDamage);
        const reducePlayerEnergy = weaponEquipped.energyPerHit;
        const energyAdded = myChar.stamina;
        let playerDoesDamage = myChar.damage;
        const additionalWeaponDmg = weaponEquipped.maxDamage;
        let randomWeaponDmg = Math.floor(Math.random()*additionalWeaponDmg);
        const numberForCriticalHit = Math.ceil(Math.random()*100)

        if (numberForCriticalHit <= myChar.strength) {
            playerDoesDamage = playerDoesDamage * 3;
            randomWeaponDmg = randomWeaponDmg * 3;
            setMessage(`Made a critical hit. Damage x3. Total damage: ${playerDoesDamage + randomWeaponDmg}`);
            timeout();
        }

        if (getMyEnergy >= reducePlayerEnergy && getMyHealth > randomDmgToPlayer) {
            setMyHealth(getMyHealth-randomDmgToPlayer); // damage to player
            if (getMyEnergy - reducePlayerEnergy + energyAdded <= myChar.energy) {
                setMyEnergy(getMyEnergy - reducePlayerEnergy + energyAdded); // energy reduction to player and added
            } else {
                setMyEnergy(myChar.energy)
            }
            setMonsterHealth(getMonsterHealth - playerDoesDamage - randomWeaponDmg) // attacking monster
        }
        if (getMyEnergy < reducePlayerEnergy && getMyHealth > randomDmgToPlayer) {
            setMyHealth(getMyHealth-randomDmgToPlayer); // damage to player
            setMyEnergy(getMyEnergy + energyAdded); // energy just added
            setMessage("You did NOT have enough energy to attack, but animal did and he attacked you");
            timeout();
        }
        if (getMyEnergy < reducePlayerEnergy && getMyHealth < randomDmgToPlayer) {
            setMyHealth(0);
            setMonsterHealth(getMonsterHealth - playerDoesDamage - randomWeaponDmg) // attacking monster
            setMessage("You lost, you didn't have enough energy to attack");
            setLost(true);
            setTimeout(goToStartPage, 3000);
            setTimeout(eraseCharacter, 3000);
            eraseCharacter();
            return;
        }
        if (getMyHealth <= randomDmgToPlayer && playerDoesDamage + randomWeaponDmg < getMonsterHealth) {
            setMyHealth(0);
            setMonsterHealth(getMonsterHealth - playerDoesDamage - randomWeaponDmg) // attacking monster
            setMessage("You lost");
            setLost(true);
            setTimeout(goToStartPage, 3000);
            setTimeout(eraseCharacter, 3000);
            return;
        }
        if (playerDoesDamage + randomWeaponDmg >= getMonsterHealth && getMyHealth > randomDmgToPlayer) {
            setMonsterHealth(0);
            setMyHealth(getMyHealth-randomDmgToPlayer); // damage to player
            if (getMyEnergy - reducePlayerEnergy + energyAdded <= myChar.energy) {
                setMyEnergy(getMyEnergy - reducePlayerEnergy + energyAdded); // energy reduction to player and added
            } else {
                setMyEnergy(myChar.energy)
            }
            setMonsterHealth(getMonsterHealth - playerDoesDamage - randomWeaponDmg) // attacking monster
            setMessage("You won")
            timeout();
            changeIsFighting(false);
            const randomNum = Math.round(Math.random()*monster.maxItemsDrop);
            changeShowDropped(true);
            generateDrop(randomNum);
        }
    }

    return (
        <div className="arena d-flex">
            <div className="grow1">
                <MyCharacterInfo/>
                {showHealth()}
                {showEnergy()}
                <div className="d-flex potionsInArena">
                    {showPotions()}
                </div>}
            </div>
            <div className="grow1 d-flex j-center">
                <div className="messageDiv">
                    {getMessage}
                </div>
                {!getIsFighting && <button className="fightBtn" onClick={generateMonster}>FIND ENEMY</button>}
                {!getLost ? getIsFighting && <button className="fightBtn" onClick={attack}>ATTACK</button> : null}
                {getShowDropped && <button className="fightBtn br-left-none" onClick={() => {navigate("/shop")}}>LEAVE ARENA</button>}
            </div>
            <div className="grow1 mt-160 mr-20">
                {getIsFighting && displayMonster()}
                {getIsFighting && showMonsterHealth()}
                {getShowDropped && <MyInventory/>}
                {getShowDropped && showDroppedItems()}
            </div>

        </div>
    );
};

export default ArenaPage;