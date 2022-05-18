import s from './Front.module.css'
import {Paper} from "@mui/material";

export const Front = () => {
    return (
        <div className={s.main}>
            <Paper elevation={3} className={s.paper}>
                <div className={s.text}> Здравствуйте!<br/>
                    Меня зовут Ксения<br/>
                    Я front-end разработчик
                </div>
                <div><img className={s.img} src={''}/> img</div>
            </Paper>
        </div>
    )
}
