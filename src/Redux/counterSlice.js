import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loginData: {},

}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {

        incrementByAmount: (state, action) => {
            state.loginData = action.payload
            
            console.log("ff",state )
            console.log("action",action )
        },
        
       
    },
})

export const {incrementByAmount } = counterSlice.actions

export default counterSlice.reducer