import s from './Header.module.scss'

export const Header=()=>{



    return (
        // <ThemeProvider theme={darkTheme}>
        //     <AppBar position="absolute" color="inherit" style={{height:'10vh'}}>
        //         <Typography className={s.typogr}>
        <div className={s.main} id={'navbar'}>
        <nav className={s.typogr} >

                        <a href={'#front'}>Home</a>

                        <a href={'#skills'}>Skills</a>

                        <a href={'#works'} >My works</a>

                        <a href={'#contacts'} >Contacts</a>
        </nav>
        </div>
        //         </Typography>
        //     </AppBar>
        // </ThemeProvider>
    )
}
