import s from './TextHeader.module.scss'
const Fade = require('react-reveal/Fade')

type PropsType={
    text:string
}
export const BigHeader=(props:PropsType)=>{
    return(
        <Fade bottom cascade>
        <span className={s.span}>{props.text}</span>
        </Fade>
    )
}