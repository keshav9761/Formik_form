import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../Redux/counterSlice'
import showData from '../Redux/incrementSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        show: showData
    },
})