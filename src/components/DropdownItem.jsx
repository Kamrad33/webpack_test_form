import React, { useState } from "react";
import '../styles/DropdownComponent.scss';
const DropdownItem = ({id, optionText, optionClick, ...props}) =>{
    
    const [active, setActive] = useState(false);

    const clickItem =() =>{
        setActive(!active);
        optionClick(id, optionText);
    }

    return (
        <li onClick={clickItem} className={active ? 'dropdownItem active' : 'dropdownItem'}>
            <div className={  active ? 'dropdownItem_text active': 'dropdownItem_text'}>
                {optionText}
            </div>
        </li>
    )
}

export default DropdownItem;