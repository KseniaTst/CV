import s from './Button.module.scss'
type PropsType={
    text:string
}

export const CustomButton=(props:PropsType)=>{
    return(
        <button className={s.button}><a>{props.text}</a></button>
    )
}