import { motion } from 'framer-motion'
import s from './Works.module.scss'


type PropsType={
    icon:JSX.Element
    projectName:string
    description:string
    title:string
    address:string
}

export const OneWork = (props: PropsType) => {

    return (
        <div className={s.oneWork}>
            <motion.div className={s.watch} id={props.title}  >
                <motion.img  src={props.address} whileHover={{scale:1.1, opacity:0.4}}/>
                <motion.span className={s.span} >click to watch</motion.span>
                {/*{props.icon}*/}
            </motion.div>
            <div className={s.projectName}>
                <p>{props.projectName}</p>
                <div  >{props.description}</div>

            </div>
        </div>
    )
}