import s from './Front.module.scss'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

export const Front = () => {
    return (
        <div className={s.main}>
            <nav className={s.nav}>
                <a>Home</a>
                <a>Skills</a>
                <a>My works</a>
                <a>Contacts</a>
            </nav>
            <div className={s.container}>
                <div className={s.row}>
                    <h6>HELLO, I'M</h6>
                    <h1>Ksenia Tst</h1>
                    <h4>FRONTEND DEVELOPER</h4>
                    <div className={s.socialBox}>
                        <FacebookOutlinedIcon fontSize={'large'} style={{color: 'white', paddingRight: '15px'}}/>
                        <InstagramIcon fontSize={'large'} style={{color: 'white', paddingRight: '15px'}}/>
                        <GitHubIcon fontSize={'large'} style={{color: 'white', paddingRight: '15px'}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
