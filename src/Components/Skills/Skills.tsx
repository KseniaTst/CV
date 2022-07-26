import s from './Skills.module.scss'
import {ProgressItem} from "./ProgressItem";
const Fade = require('react-reveal/Fade')


export const Skills = () => {
    return (
        <div className={s.main} id={'skills'}>

            <div className={s.container}>
                <div className={s.textAbout}>
                    <div className={s.subTitle}>
                        <span className={s.three}/>
                        <span className={s.one}/>
                        <span className={s.two}/>
                        <h6> ABOUT ME</h6>

                    </div>
                    <Fade bottom className={s.fade}>
                    <p className={s.txtBig}>Some text with big letters</p>
                    <p className={s.txtSmall}>Some text about me with little letters</p>
                    <a download style={{color:'#dc965a', fontSize:'13px', fontWeight:'300', letterSpacing:'4px', lineHeight:'1.5',
                    fontFamily:'Poppins, sans serif',textTransform:'uppercase' }}
                       href={'https://drive.google.com/file/d/1cgv1T9Nuzc0c2CTT_HCxVjGgY6u3yHXh/view?usp=sharing'}>
                        Download CV</a>
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