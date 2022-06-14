import style from './OneSkill.module.css'

export type SkillPropsType={
    name:string
}

export const OneSkill=(props:SkillPropsType)=>{
    return (
        <div className={style.main}>
            <p>{props.name}</p>
            <div> подробное описание навыка </div>
        </div>
    )
}