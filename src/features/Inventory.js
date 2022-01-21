import {createSlice, current} from "@reduxjs/toolkit";

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
        },
        removeOnlyPotion: (state, action) => {
            const index = current(state.value).indexOf(action.payload);
            state.value.splice(index, 1);
        },
        clearInventory: (state, action) => {
            state.value = [];
        }
    }
})


export const {addToInventory, removeFromInventory, removeOnlyPotion, clearInventory} = inventorySlice.actions;

export default inventorySlice.reducer;