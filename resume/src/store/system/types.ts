import { PaletteMode } from "@mui/material";
export interface SystemState {
    currMenu: MenuType,
    systemTheme: PaletteMode
}

export enum MenuType {
    Classes = "Classes",
    Monsters = "Monsters",
    Theory = "Theory"
}

