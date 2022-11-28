import React, { useState } from "react";
import '../styles/ToggleComponent.scss';
import toggleOnImg from '../toggleOnImg.svg';
import toggleOffImg from '../toggleOffImg.svg';
const ToggleComponent = ({activeTitle, disableTitle, toggleStat, ...props}) => {

  const [active, setActive] = useState(false);
  const [toggleTitle, setToggleTitle] = useState(disableTitle);

  const clickToggle = () =>{
    setActive(!active);
    active ? setToggleTitle(disableTitle) : setToggleTitle(activeTitle);
    toggleStat();
  }
    return (
        <label  className="toggle_container" >
               <div onClick={clickToggle} className='toggle_container_check'>
                    {active ? <img src = {toggleOnImg} /> : <img src = {toggleOffImg}/>}
                </div>

                <div className='toggle_container_title'>{toggleTitle}</div>
      </label>
    )
}

export default ToggleComponent;