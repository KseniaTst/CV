import s from "./Works.module.css";
import {Paper} from "@mui/material";
import {OneWork} from "./OneWork";

export const Works = () => {
    return (
        <div className={s.main}>
            <Paper elevation={3} className={s.paper}>
                <div>
                    <p>My works</p>
                </div>
                <div className={s.withWorks} >
                    <OneWork/>
                    <OneWork/>
                </div>
            </Paper>
        </div>
    )
}
