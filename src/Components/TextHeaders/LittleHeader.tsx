import s from './Header.module.scss'

type PropsType={
    text:string
}
export const LittleHeader=(props:PropsType)=>{
    return(
        <h6 className={s.little}>{props.text}</h6>
    )
}