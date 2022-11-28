import React ,{useEffect, useState} from "react";
import DropdownItem from "./DropdownItem";
import InputComponent from "./InputComponent";
import '../styles/DropdownComponent.scss';
import arrowUp from '../arrowUp.svg';
import arrowDown from '../arrowDown.svg';
const DropdownComponent = ({elementArray, sendOption1, sendOption2, sendOption3, ...props}) => {
  console.log(elementArray);

  const [elements, setElements] = useState(elementArray);
  const [active, setActive] = useState(false);
  const [arrow, setArrow] = useState(arrowDown);
  const [dropdownDataOption1, setDropdownDataOption1] = useState(false);
  const [dropdownDataOption2, setDropdownDataOption2] = useState(false);
  const [dropdownDataOption3, setDropdownDataOption3] = useState(false);

  useEffect (() => {
    active ? setArrow(arrowUp) : setArrow(arrowDown) ;
    console.log('log', dropdownDataOption1, dropdownDataOption2, dropdownDataOption3);
    sendOption1(dropdownDataOption1);
    sendOption2(dropdownDataOption2);
    sendOption3(dropdownDataOption3);
  }, [active, dropdownDataOption1, dropdownDataOption2, dropdownDataOption3]);

  const changeArray = (id, text) => {
    console.log('asdads', id, text);
    switch (id) {
      case 1:
        setDropdownDataOption1(!dropdownDataOption1)
      case 2:
        setDropdownDataOption2(!dropdownDataOption2)
      case 3:
        setDropdownDataOption3(!dropdownDataOption3)
    }
  }
  const dropDown = () => {
    setActive(!active);
  }
    return (
      <div className='dropdown_container'>
      
      <ul className='dropdown_container_ul'>
      <InputComponent Label = {'Dropdown title'}  Icon ={arrow} value = {'Dropdown options'} clickButtonEvent = {dropDown}/>
        {active && elements.map(elm => (
         <DropdownItem
         key = {elm.id}
         id = {elm.id}  
         optionText={elm.text}
         optionClick = {changeArray}/>
        ))}
        
      </ul>
      </div>
    )
}

export default DropdownComponent;