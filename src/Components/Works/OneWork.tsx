import {Button} from "@mui/material";
import s from './Works.module.css'

export const OneWork=()=>{
    return(
        <div className={s.oneWork} >
            <div className={s.watch}>
                <Button variant={'outlined'} color={'inherit'}>Watch</Button>
            </div>
            <div className={s.description}>
                <p>Project Name</p>
                <div>Description</div>
            </div>
        </div>
    )
}