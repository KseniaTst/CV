import s from './Button.module.scss'
type PropsType={
    text:string
    href?: string
    type?:"button" | "submit" | "reset"
}

export const CustomButton=(props:PropsType)=>{
    return(
        <button className={s.button} type={props.type}><a href={props.href}>{props.text}</a></button>
    )
}