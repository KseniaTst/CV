import {AppBar, Button, createTheme, IconButton, ThemeProvider, Toolbar, Typography} from "@mui/material";
import { NavLink } from "react-router-dom";

export const Header=()=>{


    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
            primary: {
                main: '#1976d2',
            },
        },
    });

    return (
        <ThemeProvider theme={darkTheme}>
            <AppBar position="static" color="inherit" style={{height:'10vh'}}>
                <Typography>
                        <Button variant={'outlined'} color={'inherit'} style={{margin:'17px'}}>Главная</Button>

                        <Button variant={'outlined'} color={'inherit'} style={{margin:'17px'}}>Скилы</Button>

                        <Button variant={'outlined'} color={'inherit'} style={{margin:'17px'}}>Работы</Button>

                        <Button variant={'outlined'} color={'inherit'} style={{margin:'17px'}}>Контакты</Button>
                </Typography>
            </AppBar>
        </ThemeProvider>
    )
}
