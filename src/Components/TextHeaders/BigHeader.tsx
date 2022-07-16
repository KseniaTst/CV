import s from './Header.module.scss'

type PropsType={
    text:string
}
export const BigHeader=(props:PropsType)=>{
    return(
        <span className={s.span}>{props.text}</span>
    )
}