import s from './ProgressItem.module.css'

type PropsType = {
    value: string
    skillName: string
}

export const ProgressItem=(props:PropsType)=>{
    return(
        <div className={s.skillItem}>
            <h6>{props.skillName}</h6>
            <div className={s.skillProgress}>
                <div title={props.value}  className={s.progress}/>
            </div>
        </div>
    )
}