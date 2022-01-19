import {createSlice} from "@reduxjs/toolkit";

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
        }
    }
})

export const {chooseMyCharacter, deductGold, addGold} = myCharacterSlice.actions;

export default myCharacterSlice.reducer;