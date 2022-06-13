import s from './Contacts.module.css'
import {Button, Input, Paper} from "@mui/material";
import {BigHeader} from "../TextHeaders/BigHeader";
import {LittleHeader} from "../TextHeaders/LittleHeader";

export const Contacts=()=>{
    return (
        <div className={s.main}>
            <div className={s.container}>
                <LittleHeader text={'Get in touch'}/>
                <BigHeader text={'Contact me'}/>
                <div >
                    <form className={s.form} >
                        <label>Name:</label>
                        <Input color={'primary'} type="text" name="name"/>
                        <Input type="submit" value="Save"/>
                    </form>
                </div>
                <div className={s.withWorks}>
                    <Button color={'inherit'} variant={'outlined'}>Send</Button>
                </div>
            </div>
        </div>
    )
}