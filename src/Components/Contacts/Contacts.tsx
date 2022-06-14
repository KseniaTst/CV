import s from './Contacts.module.css'
import {BigHeader} from "../TextHeaders/BigHeader";
import {LittleHeader} from "../TextHeaders/LittleHeader";
import {Button} from "@mui/material";
import {CustomButton} from "../Button";

export const Contacts=()=>{
    return (
        <div className={s.main}>
            <div className={s.container}>
                <LittleHeader text={'Get in touch'}/>
                <BigHeader text={'Contact me'}/>
                <div className={s.formContainer } >
                    <form className={s.form} >
                        <div className={s.inputContainer}>
                            <div className={s.formInputContainer}><input placeholder={'Name'} className={s.formInput}/></div>
                            <div className={s.formInputContainer}> <input placeholder={'Email'} className={s.formInput}/></div>
                        </div>
                        <textarea placeholder={'Message'} />
                    </form>
                </div>
                <div >
                    <CustomButton text={'Send message'}/>
                </div>
            </div>
        </div>
    )
}