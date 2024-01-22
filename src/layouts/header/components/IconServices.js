import style from '../../../styles/header/IconServices.module.css'
import { Link } from 'react-router-dom';

function IconServices({text, iconName}){
    return (
        <div className={style.content_icons}>
            <div className={style.icon}>{iconName}</div> 
            <p>{text}</p>
        </div>
    )
}

export default IconServices