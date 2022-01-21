import {createSlice} from "@reduxjs/toolkit";

export const dropItemsSlice = createSlice({
    name: "dropItems",
    initialState: {
        value: []
    },
    reducers: {
        addItems: (state, action) => {
            state.value = action.payload;
            console.log(action.payload)
        },
        removeDroppedItem: (state, action) => {
            state.value.splice(action.payload, 1);
        }
    }
})

export const {addItems, removeDroppedItem} = dropItemsSlice.actions;

export default dropItemsSlice.reducer;