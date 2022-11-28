import React, { useEffect, useState } from "react";
import '../styles/Form.scss';
import axios from 'axios';
import InputComponent from "./InputComponent";
import CheckboxComponent from "./CheckboxComponent";
import DropdownComponent from "./DropdownComponent";
import RadioComponent from "./RadiobuttonComponent";
import ButtonComponent from "./ButtonComponent";
import ToggleComponent from "./ToggleComponent";
import warningImg from '../warningImg.svg'

const FormComponent = () => {

const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [rememberStatus, setRememberStatus] = useState(false);
const [toggleStatus, setToggleStatus] = useState(false);

//single states for options, fix this to arrays
const [radioDataOption1, setRadioDataOption1] = useState(false);
const [radioDataOption2, setRadioDataOption2] = useState(false);
const [radioDataOption3, setRadioDataOption3] = useState(false);
const [dropdownDataOption1, setDropdownDataOption1] = useState(false);
const [dropdownDataOption2, setDropdownDataOption2] = useState(false);
const [dropdownDataOption3, setDropdownDataOption3] = useState(false);

const [usernameWrong, setUsernameWrong] = useState(true);
const [passwordWrong, setPasswordWrong] = useState(true);
const [usernameErr, setUsernameErr] = useState('Your username must be between 4 and 24 characters!');
const [passwordErr, setPasswordErr] = useState('Your password bust be between 4 and 12 characters!');
const [nextButton, setNextButton] = useState(false);
const [formValid, setFormValid] = useState(false);

const checkStat = () => {
    setRememberStatus(!rememberStatus)
}
const clickToggle = () =>{
    setToggleStatus(!toggleStatus);
}

//single functions for options, fix this to arrays
const sendOption1 = () => {
    setDropdownDataOption1(!dropdownDataOption1)
}
const sendOption2 = () => {
    setDropdownDataOption2(!dropdownDataOption2)
}
const sendOption3 = () => {
    setDropdownDataOption3(!dropdownDataOption3)
}

const sendRadio1= () => {
    setRadioDataOption1(!radioDataOption1)
}
const sendRadio2 = () => {
    setRadioDataOption2(!radioDataOption2)
}
const sendRadio3 = () => {
    setRadioDataOption3(!radioDataOption3)
}

//handler for set user\password state to not allowed status
const checkHandler = (e) => {
    switch (e.target.name) {
        case 'Username':
            setUsernameWrong(true);
            break
        case 'Password':
            setPasswordWrong(true)
            break
    }
}

//handler for checking username
const usernameHandler = (e) => {
    setUsername(e.target.value)
    if (e.target.value.length < 4 || e.target.value.length > 24) {
        setUsernameErr('Your username bust be between 4 and 24 characters!')
        
        if (!e.target.value) {
            setUsernameErr('Username must not be empty')
        }
    } else {
        
        setUsernameErr('');
    }
}
//handler for checking password
const passwordHandler = (e) => {
    setPassword(e.target.value)
    if (e.target.value.length < 4 || e.target.value.length > 12) {
        setPasswordErr('Your password bust be between 4 and 12 characters!')
        if (!e.target.value) {
            setPasswordErr('Password must not be empty')
        }
    } else {

        setPasswordErr('')
    }
}
useEffect (() => {
    console.log(usernameErr, passwordErr, 'check');
    if (usernameErr || passwordErr){
        setFormValid(false)
    }
    else {
        setFormValid(true)
    }
}, [usernameErr, passwordErr]);

const cancelAction = () => {
    console.log('cancel');
}

const nextAction = () => {
    if (formValid){
        console.log('senden data:', JSON.stringify({
            name:username,
            password:password, 
            rememberStatus: rememberStatus,
            toggleStatus: toggleStatus,
            Radio1: radioDataOption1,
            Radio2: radioDataOption2,
            Radio3: radioDataOption3,
            Option1: dropdownDataOption1,
            Option2: dropdownDataOption2,
            Option3: dropdownDataOption3, 
        }));
        fetch('/root/create', {
            method : 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                name:username,
                password:password,

            })
        })
        .then((res) => {
            console.log('done');
        })
        .catch((err)=> {
            console.warn('error', err);
        })
    }   
}
    return(
        <div>
            <div className='form_bg'>

            </div>
            
            <div className = 'form'>
                {<InputComponent 
                    inputType = 'placeholder'
                    check = {checkHandler}
                    change = {usernameHandler} 
                    warnStatus = {usernameWrong} 
                    Label='Username' 
                    Field = 'Enter username' 
                    warnMessage = {usernameErr}
                    typeProp = 'text'
                    Icon ={warningImg}/>}
                    
                {<InputComponent
                    inputType = 'placeholder' 
                    check = {checkHandler}
                    change = {passwordHandler}  
                    warnStatus = {passwordWrong}  
                    Label='Password' 
                    Field = 'Enter password' 
                    Assistive= 'Your password is between 4 and 12 characters' 
                    warnMessage = {passwordErr}
                    typeProp = 'password' 
                    Icon ={warningImg}/>}
                {<InputComponent inputType = 'placeholder' check = {checkHandler} warnStatus = {true} Label='Input Text Label' Field = 'Type here' Assistive= 'Assistive Text' warnMessage = 'Errormessage' Icon ={warningImg}/>}
            <CheckboxComponent title = {'Remember me'} checkStat = {checkStat}/>
            <ToggleComponent activeTitle = {'On'} disableTitle = {'Off'} toggleStat = {clickToggle}/>
            <div className='radioList'>
                <RadioComponent title = {'Radio selection 1'} radioAction = {sendRadio1}/>
                <RadioComponent title = {'Radio selection 2'} radioAction = {sendRadio2}/>
                <RadioComponent title = {'Radio selection 3'} radioAction = {sendRadio3}/>
            </div>
            
            <DropdownComponent 
            elementArray = {
                [
                    {id:1, text:'Dropdown option'},
                    {id:2, text:'Dropdown option 2'},
                    {id:3, text:'Dropdown option 3'},
                ]
            }
            sendOption1 = {sendOption1}
            sendOption2= {sendOption2}
            sendOption3 ={sendOption3}/>
            
            <div className='form_buttons'>
            <ButtonComponent 
            action ={cancelAction}
            text = 'Cancel'
            active={false}/>
            <ButtonComponent 
            action ={nextAction}
            text = 'Next'
            active={true}
            disable = {formValid}/>
            </div>
            </div>
          
        </div>
        
    );

}

export default FormComponent
