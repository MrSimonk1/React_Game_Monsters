import {createSlice} from "@reduxjs/toolkit";

export const weaponSlice = createSlice({
    name: "weapon",
    initialState: {
        value: {}
    },
    reducers: {
        chooseWeapon: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const {chooseWeapon} = weaponSlice.actions;

export default weaponSlice.reducer;

