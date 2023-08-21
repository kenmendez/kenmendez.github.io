import { configureStore } from '@reduxjs/toolkit'
import {systemSlice} from "./system/reducer"

export const store = configureStore({
    reducer: {
        system: systemSlice.reducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch