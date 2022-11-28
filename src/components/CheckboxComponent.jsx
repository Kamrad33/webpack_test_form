import React, { useState } from "react";
import '../styles/CheckboxComponent.scss';
import checkImg from '../checkImg.svg'
const CheckboxComponent = ({title, checkStat, ...props}) => {
    const [active, setActive] = useState(false);

    const clickCheck = () =>{
        setActive(!active);
        checkStat()
    }

    return (
            <label onClick={clickCheck} className='checkbox_container'>
    
                <div  className='checkbox_container_check'>
                    {active && <img src = {checkImg} />}
                </div>

                <div className='checkbox_container_title'>{title}</div>

            </label>
            
    )
}

export default CheckboxComponent;