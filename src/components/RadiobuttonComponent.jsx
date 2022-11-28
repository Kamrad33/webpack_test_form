import React from "react";
import '../styles/RadiobuttonComponent.scss';
const RadioComponent = ({title, radioAction, ...props}) => {
  const clickRadio = () =>{
    radioAction()
  }
    return (
        <label className='radio_container'>
        <input onChange={clickRadio} className='radio_container_input' type= 'radio' name = 'name1'/>
        <span className='radio_container_background'></span>
        <span className='radio_container_text'>{title}</span>
      </label>
    )
}

export default RadioComponent;