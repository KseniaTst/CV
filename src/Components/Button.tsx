import {Button} from "@mui/material";
import s from './Button.module.css'
type PropsType={
    text:string
}

export const CustomButton=(props:PropsType)=>{
    return(
        <button className={s.button}><a>{props.text}</a></button>
    )
}