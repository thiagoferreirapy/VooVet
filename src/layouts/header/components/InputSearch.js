import style from '../../../styles/header/InputSearch.module.css'
import { IoIosSearch } from "react-icons/io";


function InputSearch({type, name, placeholder, value}){
    return (
        <label htmlFor={name} className={style.label_input_search}>
            <input type={type} name={name} placeholder={placeholder} value={value}/>
            <IoIosSearch className={style.icon}/>
        </label>
    )
}

export default InputSearch