import s from './Contacts.module.scss'

import {BigHeader} from "../TextHeaders/BigHeader";
import {LittleHeader} from "../TextHeaders/LittleHeader";
import {CustomButton} from "../Button";
import { motion } from 'framer-motion';

export const Contacts=()=>{
    const formAnimation ={
        hidden:{
            opacity: 0
        },
        visible: {
            opacity: 1,
            'transition-timing-function': 'ease',
            'transition-duration': '2s'
        }
    }

    return (
        <motion.div id={'contacts'} className={s.main} initial='hidden' whileInView='visible'
                    viewport={{amount:0.3, once:true}}>
            <div className={s.container}>
                <LittleHeader text={'Get in touch'}/>
                <BigHeader text={'Contact me'}/>
                <div className={s.formContainer}  >
                    <motion.form className={s.form} variants={formAnimation} >
                        <div className={s.inputContainer} >
                            <div className={s.formInputContainer}><input placeholder={'Name'} className={s.formInput}/></div>
                            <div className={s.formInputContainer}> <input placeholder={'Email'} className={s.formInput}/></div>
                        </div>
                        <textarea placeholder={'Message'} />
                    </motion.form>
                </div>
                <div >
                    <CustomButton text={'Send message'}/>
                </div>
            </div>
        </motion.div>
    )
}