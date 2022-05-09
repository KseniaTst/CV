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
                <div><img className={s.img} src={'https://psv4.userapi.com/c236331/u182082274/docs/d15/4247eef6c1da/IMG_20220510_182738_102.jpg?extra=Dazc2X4CrVcLufoJ5-FbSPaQrDyp5qgE7X-9E8chDxDcBFhKvEyz_EuFcgkasnKJYnV7O2rZfFmY-51x-LvsfPs5Ih5_XFCoyMnuGJdAdvaAZwpUaavLEGHSpJV7CdLzcp8babu2kQi-U_QrdLfMfK-A'}/></div>
            </Paper>
        </div>
    )
}
