import {createSlice} from "@reduxjs/toolkit";

export const inventorySlice = createSlice({
    name: "inventory",
    initialState: {
        value: []
    },
    reducers: {
        addToInventory: (state, action) => {
            state.value.push(action.payload);
        },
        removeFromInventory: (state, action) => {
            state.value.splice(action.payload, 1);
        }
    }
})


export const {addToInventory, removeFromInventory} = inventorySlice.actions;

export default inventorySlice.reducer;