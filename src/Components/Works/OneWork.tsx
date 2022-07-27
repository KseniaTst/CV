import { motion } from 'framer-motion'
import s from './Works.module.scss'


type PropsType={
    icon:JSX.Element
    projectName:string
    description:string
    title:string
    address:string
    imgAddress:string
}

export const OneWork = (props: PropsType) => {

    const onClickHandler=()=>{
window.open(props.address, '_blank')
    }

    return (
        <div className={s.oneWork} >
            <motion.div className={s.watch} id={props.title} onClick={onClickHandler} >
                <motion.img  src={props.imgAddress} whileHover={{scale:1.1, opacity:0.4}}/>
                <motion.span className={s.span} >click to watch</motion.span>
                {/*{props.icon}*/}
            </motion.div>
            <div className={s.projectName}>
                <motion.p whileHover={{scale:1.1}} onClick={onClickHandler}>{props.projectName}</motion.p>
                <div  >{props.description}</div>

            </div>
        </div>
    )
}