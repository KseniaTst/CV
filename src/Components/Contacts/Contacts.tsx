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
                    <motion.form action={'https://usebasin.com/f/bbf86370c756'} method={'POST'} className={s.form} variants={formAnimation} >
                        <div className={s.inputContainer} >
                            <div className={s.formInputContainer}>
                                <input placeholder={'Name'} name={'name'} className={s.formInput}/>
                            </div>
                            <div className={s.formInputContainer}>
                                <input type={'email'} placeholder={'Email'} name={'email'} className={s.formInput}/>
                            </div>
                        </div>
                        <div className={s.textareaContainer}>
                        <textarea placeholder={'Message'} name={'user-text'}/>
                        </div>
                        <div >
                            <CustomButton type={'submit'} text={'Send message'}/>
                        </div>
                    </motion.form>


                </div>
            </div>
        </motion.div>
    )
}