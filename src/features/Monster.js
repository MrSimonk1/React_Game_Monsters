import {createSlice} from "@reduxjs/toolkit";

export const monsterSlice = createSlice({
    name: "monster",
    initialState: {
        value: null
    },
    reducers: {
        createMonster: (state, action) => {
            state.value = action.payload
        }
    }
})

export const {createMonster} = monsterSlice.actions;

export default monsterSlice.reducer;