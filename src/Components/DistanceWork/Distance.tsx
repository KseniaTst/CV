import s from './Distance.module.css'
import {Button, Paper} from "@mui/material";

export const Distance=()=>{
    return (
        <div className={s.main}>
            <Paper elevation={3} className={s.paper}>
                <div>Considering options for remote work</div>
                <Button variant={'outlined'} color={'inherit'}>Contact Me</Button>
            </Paper>
        </div>
    )
}