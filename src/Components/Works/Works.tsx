import s from "./Works.module.scss";
import {OneWork} from "./OneWork";
import {socialNet, todolist} from "../../assets/icons/icons";
import {BigHeader} from "../TextHeaders/BigHeader";
import {LittleHeader} from "../TextHeaders/LittleHeader";
const Slide = require('react-reveal/Slide')



export const Works = () => {
    return (
        <div className={s.main} id={'works'}>
            <div className={s.heading}>
                <LittleHeader text={'Portfolio'}/>
                <BigHeader text={'My works'}/>

            </div>
            <div className={s.withWorks}>
                <Slide bottom>
                    <OneWork icon={socialNet} projectName={'Social network demo'} title={'socialNet'}
                             imgAddress={'https://www.pixelstalk.net/wp-content/uploads/2015/01/Colorful-3D-Social-Media-Wallpaper-Widescreen-HD-620x413.jpg'}
                             description={'vTempore corrupti temporibus fuga earum asperiores fugit laudantium.'}
                    address={'https://kseniatst.github.io/Social-network/#/profile'}/>
                    <OneWork icon={todolist} projectName={'Todolist demo '} title={'todo'}
                             imgAddress={'https://scontent.fgme1-1.fna.fbcdn.net/v/t39.30808-6/228029020_4455379694506012_688416722599575150_n.jpg?stp=dst-jpg_p843x403&_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=2LvynofDa8sAX8YzRVE&_nc_ht=scontent.fgme1-1.fna&oh=00_AT-4MBLDFW27D2QamAPX-siFbLY9c_geZzQZnWwlzwn5Ig&oe=62E15D03'}
                             description={'Tempore corrupti temporibus fuga earum asperiores fugit laudantium.'}
                    address={'https://KseniaTst.github.io/Todolist'}/>
                </Slide>
            </div>
        </div>
    )
}
