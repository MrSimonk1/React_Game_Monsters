import {createSlice} from "@reduxjs/toolkit";

export const weaponSlice = createSlice({
    name: "weapon",
    initialState: {
        value: {}
    },
    reducers: {
        chooseWeapon: (state, action) => {
            state.value = action.payload;
        },
        clearWeapon: (state, action) => {
            state.value = {};
        }
    }
})

export const {chooseWeapon, clearWeapon} = weaponSlice.actions;

export default weaponSlice.reducer;

