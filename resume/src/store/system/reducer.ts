import { PaletteMode } from '@mui/material'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {MenuType, SystemState } from "./types"

const initialState: SystemState = {
    currMenu: MenuType.Classes,
    systemTheme: "dark"
}

export const systemSlice = createSlice({
    name: 'system',
    initialState:  initialState,
    reducers: {
        setMenu: (state, action: PayloadAction<MenuType>) => {
            state.currMenu = action.payload
        },
        setPaletteMode: (state, action: PayloadAction<PaletteMode>) => {
            state.systemTheme = action.payload
        }
    },
})

export const {setMenu } = systemSlice.actions