import s from './Works.module.css'


type PropsType={
    icon:JSX.Element
    projectName:string
    description:string
}

export const OneWork=(props:PropsType)=>{
    return(
        <div className={s.oneWork} >
            <div className={s.watch}>
                {props.icon}
            </div>
            <div className={s.description}>
                <p>{props.projectName}</p>
                <div>{props.description}</div>
            </div>
        </div>
    )
}