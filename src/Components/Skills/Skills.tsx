import {Paper} from "@mui/material";
import s from './Skills.module.css'
import {OneSkill} from "./OneSkill";

export const Skills = () => {
    return (
        <div className={s.main}>
            <Paper className={s.paper} elevation={3}>
                <div >Мои навыки</div>
                <div className={s.skills}>
                    <OneSkill name={'React'}/>
                    <OneSkill name={'Css'}/>
                    <OneSkill name={'JS'}/>
                </div>
            </Paper>
        </div>
    )
}