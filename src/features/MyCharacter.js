import {createSlice, current} from "@reduxjs/toolkit";

export const myCharacterSlice = createSlice({
    name: "myCharacter",
    initialState: {
        value: null
    },
    reducers: {
        chooseMyCharacter: (state, action) => {
            state.value = action.payload;
        },
        deductGold: (state, action) => {
            state.value.gold -= action.payload;
        },
        addGold: (state, action) => {
            state.value.gold += action.payload;
        },
        addStatsFromWeapon: (state, action) => {
            let allEffects = [...action.payload.effectsEffects];
            let myCharacter = {...current(state.value)}
            if (allEffects.length > 0) {
                allEffects.map(x => {
                    let key = Object.keys(x.effect);
                    myCharacter[key] += x.effect[key];
                })
            }
            state.value = {...myCharacter}
        },
        removeStatsFromWeapon: (state, action) => {
            let allEffects = [...action.payload.effectsEffects];
            let myCharacter = {...current(state.value)}
            if (allEffects.length > 0) {
                allEffects.map(x => {
                    let key = Object.keys(x.effect);
                    console.log(x.effect, key, x.effect[key], myCharacter[key]) //obj, key, reiksme.
                    myCharacter[key] -= x.effect[key];
                })
            }
            state.value = {...myCharacter}
        }
    }
})

export const {chooseMyCharacter, deductGold, addGold,
    addStatsFromWeapon, removeStatsFromWeapon, addPotionStats} = myCharacterSlice.actions;

export default myCharacterSlice.reducer;