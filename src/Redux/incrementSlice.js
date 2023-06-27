import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 222,
}

export const incrementSlice = createSlice({
    name: 'hello',
    initialState,
    reducers: {
        showData: (state) => {
            state.value = state.value;
        },
        inc: (state) => {

            state.value = state.value + 1;
        },
        dec: (state) => {
            state.value -= 1
        },
        incrByAmount: (state, action) => {
            state.value += action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { showData,inc,dec,incrByAmount } = incrementSlice.actions

export default incrementSlice.reducer