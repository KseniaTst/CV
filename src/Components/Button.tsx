import s from './Button.module.scss'
type PropsType={
    text:string
    href?: string
}

export const CustomButton=(props:PropsType)=>{
    return(
        <button className={s.button}><a href={props.href}>{props.text}</a></button>
    )
}