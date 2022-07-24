import s from './Skills.module.scss'
import {ProgressItem} from "./ProgressItem";
const Fade = require('react-reveal/Fade')


export const Skills = () => {
    return (
        <div className={s.main}>

            <div className={s.container}>
                <div className={s.textAbout}>
                    <div className={s.subTitle}>
                        <span className={s.three}/>
                        <span className={s.one}/>
                        <span className={s.two}/>
                        <h6> ABOUT ME</h6>

                    </div>
                    <Fade bottom>
                    <p className={s.txtBig}>Some text with big letters</p>
                    <p className={s.txtSmall}>Some text about me with little letters</p>
                    <p>Download CV</p>
                    </Fade>
                </div>
                <div className={s.skills}>
                    <ProgressItem value={'80%'} skillName={'REACT'}/>
                    <ProgressItem value={'90%'} skillName={'REDUX'} />
                    <ProgressItem value={'70%'} skillName={'SCSS'} />
                    <ProgressItem value={'85%'} skillName={'ENGLISH (upper intermediate)'}/>
                </div>
            </div>

        </div>
    )
}