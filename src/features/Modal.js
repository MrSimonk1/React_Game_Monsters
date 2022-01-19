import {createSlice} from "@reduxjs/toolkit";

export const modalSlice = createSlice({
    name: "modal",
    initialState: {
        value: {
            show: false,
            text: "Hello"
        }
    },
    reducers: {
        showOrCloseModal: (state, action) => {
            state.value.show = false;
        }
    }
})

export const {showOrCloseModal} = modalSlice.actions;

export default modalSlice.reducer;