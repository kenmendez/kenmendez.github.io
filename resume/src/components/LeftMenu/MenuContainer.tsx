import { Divider, List, Toolbar, ListItem, ListItemButton, ListItemIcon, ListItemText, Collapse } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { systemSlice } from "../../store/system/reducer";
import { MenuType } from "../../store/system/types";


export function MenuContainer  (){

    const dispatch = useAppDispatch()

    const systemState = useAppSelector(state => state.system)


        return (
            <div>
                <Toolbar />
                <Divider />
                <List>
                    <Collapse in={systemState.currMenu === MenuType.Classes} collapsedSize={80}>
                        <ListItem key={"Classes"} disablePadding>
                            <ListItemButton onClick={() => dispatch(systemSlice.actions.setMenu(MenuType.Classes))} sx={{
                                height: 150,
                                backgroundImage: `url(${"https://tomedunn.github.io/the-finished-book/assets/images/classes-image1.jpg"})`,
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                            }}>
                                <ListItemText primary={"Classes"} />
                            </ListItemButton>
                        </ListItem>
                    </Collapse>
                    <Collapse in={systemState.currMenu === MenuType.Monsters} collapsedSize={80}>
                        <ListItem key={"Monsters"} disablePadding>
                            <ListItemButton onClick={() => dispatch(systemSlice.actions.setMenu(MenuType.Monsters))} sx={{
                                height: 150,
                                backgroundImage: `url(${"https://tomedunn.github.io/the-finished-book/assets/images/monsters-image1.jpg"})`,
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                            }}>
                                <ListItemText primary={"Monsters"} />
                            </ListItemButton>
                        </ListItem>
                    </Collapse>
                    
                    <Collapse in={systemState.currMenu === MenuType.Theory} collapsedSize={80}>
                        <ListItem key={"Theory"} disablePadding>
                            <ListItemButton onClick={() => dispatch(systemSlice.actions.setMenu(MenuType.Theory))} sx={{
                                height: 150,
                                backgroundImage: `url(${"https://tomedunn.github.io/the-finished-book/assets/images/theory-image1.jpg"})`,
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                            }}>
                                <ListItemText primary={"Theory"} />
                            </ListItemButton>
                        </ListItem>
                    </Collapse>
                    
                </List>
            </div>
        )

}

export default MenuContainer