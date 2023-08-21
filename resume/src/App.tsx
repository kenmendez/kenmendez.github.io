import React from 'react';
import './App.css';
import { Container, createTheme, CssBaseline, Drawer, ThemeProvider } from "@mui/material"
import MenuContainer from './components/LeftMenu/MenuContainer';
import { useAppSelector } from './store/hooks/hooks';

function App() {
    const systemState = useAppSelector(state => state.system)
    const mode = systemState.systemTheme
    const darkTheme = createTheme({
        palette: {
            mode,
            ...(mode === 'light'
                ? {
                    /* palette values for light mode
                    primary: amber,
                    divider: amber[200],
                    text: {
                        primary: grey[900],
                        secondary: grey[800],
                    },*/
                }
                : {
                    /* palette values for dark mode
                    primary: deepOrange,
                    divider: deepOrange[700],
                    background: {
                        default: deepOrange[900],
                        paper: deepOrange[900],
                    },
                    text: {
                        primary: '#fff',
                        secondary: grey[500],
                    },*/
                }),
        }
    });

    

    return (
      <ThemeProvider theme={darkTheme}>
                <CssBaseline />
            <Container>
                <Drawer sx={{
                    width: 200,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: 200,
                        boxSizing: 'border-box',
                    },
                }}
                    variant="permanent"
                    anchor="left">
                    <MenuContainer />
                </Drawer>
            </Container>
            </ThemeProvider>
      
  );
}

export default App;
