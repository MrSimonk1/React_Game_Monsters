import {createSlice} from "@reduxjs/toolkit";

export const myCharacterSlice = createSlice({
    name: "myCharacter",
    initialState: {
        value: null
    },
    reducers: {
        chooseMyCharacter: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const {chooseMyCharacter} = myCharacterSlice.actions;

export default myCharacterSlice.reducer;