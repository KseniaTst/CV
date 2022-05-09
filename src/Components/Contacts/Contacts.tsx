import s from './Contacts.module.css'
import {Button, Input, Paper} from "@mui/material";

export const Contacts=()=>{
    return (
        <div className={s.main}>
            <Paper elevation={3} className={s.paper}>
                <div>Contacts</div>
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
            </Paper>
        </div>
    )
}