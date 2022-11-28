import React from "react";
import '../styles/Form.scss'
const ButtonComponent = ({action, text, active, disable, ...props}) => {

    const clickButton = () => {
        console.log('ayaya');
            action();
    }
    return (
            <button onClick={clickButton} className={active ? 'form_buttons_button active' : 'form_buttons_button'} disabled ={!disable}>
                <div className={active ? 'form_buttons_button_innerText active' : 'form_buttons_button_innerText'}>{text}</div>
            </button>
    );
}

export default ButtonComponent;