import {AppBar, Button, createTheme, IconButton, ThemeProvider, Toolbar, Typography} from "@mui/material";
import s from './Header.module.css'

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
                <Typography className={s.typogr}>
                        <Button variant={'outlined'} color={'inherit'} className={s.button}>Главная</Button>

                        <Button variant={'outlined'} color={'inherit'} className={s.button}>Скилы</Button>

                        <Button variant={'outlined'} color={'inherit'} className={s.button}>Работы</Button>

                        <Button variant={'outlined'} color={'inherit'} className={s.button}>Контакты</Button>
                </Typography>
            </AppBar>
        </ThemeProvider>
    )
}
