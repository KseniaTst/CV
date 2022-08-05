import s from './Front.module.scss'
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MyPh from '../../assets/images/1659277940157_20220731_171542_mr1659277939593_mh1659277980413.jpg'

export const Front = () => {
    return (
        <div className={s.main} id={'front'}>
            <img src={MyPh}/>
            <nav className={s.nav}>
                <a href={'#front'}>Home</a>
                <a href={'#skills'}>Skills</a>
                <a href={'#works'} >My works</a>
                <a href={'#contacts'} >Contacts</a>
            </nav>
            <div className={s.container} >
                <div className={s.row}>
                    <h6>HELLO, I'M</h6>
                    <h1>Ksenia Tsytrikova</h1>
                    <h4>FRONTEND DEVELOPER</h4>
                    <div className={s.socialBox}>
                       <a href={'https://t.me/KseniaTst'}> <TelegramIcon fontSize={'large'} style={{color: 'white', paddingRight: '15px'}}/></a>
                       <a href={'https://github.com/KseniaTst'}> <GitHubIcon fontSize={'large'} style={{color: 'white', paddingRight: '15px'}}/></a>
                        <a href={'https://www.linkedin.com/in/ksenia-tsytrikova-993b66240/'}><LinkedInIcon fontSize={'large'} style={{color: 'white', paddingRight: '15px', height:'35px'}}/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
