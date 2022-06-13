import s from './Header.module.css'

type PropsType={
    text:string
}
export const BigHeader=(props:PropsType)=>{
    return(
        <span className={s.span}>{props.text}</span>
    )
}