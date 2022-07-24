import s from './ProgressItem.module.scss';
import { motion } from "framer-motion"

type PropsType = {
    value: string
    skillName: string
}



export const ProgressItem=(props:PropsType)=>{

const progressAnimation ={
    hidden:{
        width: 0
    },
    visible: {
        width: props.value,
        'transition-timing-function': 'ease',
        'transition-duration': '2s'
    }
}

    return(
        <motion.div className={s.skillItem}  initial='hidden' whileInView='visible' viewport={{amount:0.1, once:true}}>
            <h6>{props.skillName}</h6>
            <div className={s.skillProgress}>
                <motion.div
                    title={props.value}
                    className={s.progress}
                    variants={progressAnimation}
                     />
            </div>
        </motion.div>
    )
}
