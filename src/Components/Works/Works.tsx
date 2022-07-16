import s from "./Works.module.scss";
import {OneWork} from "./OneWork";
import {socialNet, todolist} from "../../assets/icons/icons";
import {BigHeader} from "../TextHeaders/BigHeader";
import {LittleHeader} from "../TextHeaders/LittleHeader";

export const Works = () => {
    return (
        <div className={s.main}>
            <div className={s.heading}>
                <LittleHeader text={'Portfolio'}/>
                <BigHeader text={'My works'}/>
            </div>
            <div className={s.withWorks}>
                <OneWork icon={socialNet} projectName={'Social network demo'} description={'vTempore corrupti temporibus fuga earum asperiores fugit laudantium.'}/>
                <OneWork icon={todolist} projectName={'Todolist demo '} description={'Tempore corrupti temporibus fuga earum asperiores fugit laudantium.'}/>
            </div>
        </div>
    )
}
