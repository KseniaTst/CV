import s from './TextHeader.module.scss'
const Reveal = require('react-reveal/Reveal')

type PropsType={
    text:string
}
export const LittleHeader=(props:PropsType)=>{
    return(
        <Reveal >
        <h6 className={s.little}>{props.text}</h6>
        </Reveal>
    )
}