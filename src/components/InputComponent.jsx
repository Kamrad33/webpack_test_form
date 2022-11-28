import React, { useEffect, useState } from "react";
import '../styles/InputComponent.scss'

const InputComponent = ({check, change, typeProp, warnStatus, Label, Field, Assistive, warnMessage, Icon, inputType, value, clickButtonEvent, ...props}) => {

    const [focused, setFocused] = useState(false);
    const [warning, setWarning] = useState('')

    const checkFunc = (e) => {
        check(e);
    }
    const changeFunc = (e) => {
        console.log('chane', warnStatus);
        if (warnStatus) {
            setWarning('warning');
        } else {
            setWarning('')
        }
        change(e);
    }
    const onFocus = () => {
        console.log(focused);    
        if (warnStatus) {
            setWarning('warning');
        } else {
            setWarning('')
        }   
        setFocused(true);
    }
    const onBlur = () => {
        console.log(focused);
        console.log(warnStatus, 'dfadsflasdjhfldj');
        if (warnStatus) {
            setWarning('warning');
        } else {
            setWarning('')
        }
        console.log('warning', warning);
        setFocused(false);
    }

    useEffect (() => {
        setWarning('')
    }, [focused])

    if (warnStatus) {   
        Assistive = warnMessage;
    }
    
    const clickButton = () => {
        console.log('clic');
        clickButtonEvent()
    }

    if (inputType == 'placeholder') {
    return(
        
        <div className= 'TextInput'>
            <div className='TextInput_Label' >{Label}</div>
            <div className= {focused ? 'TextInput_InputField active' : warnStatus ? 'TextInput_InputField warning' : 'TextInput_InputField'}>
                <div className= 'TextInput_InputField_Text'>
                    <input
                    onChange={e => changeFunc(e)} 
                    onFocus={onFocus} 
                    onBlur={e => {checkFunc(e); onBlur()}} 
                    className='TextInput_InputField_Text_Input' 
                    name = {Label}
                    placeholder = {Field}
                    type = {typeProp} 
                    />
                    <div className='TextInput_InputField_Text_Icon'
                    >
                        {(warnStatus) && <img src = {Icon} />}
                    </div>
                </div>
            </div>
            {(Assistive !=undefined) && <div className={`TextInput_AssistiveText ${warning}`}>{Assistive}</div>}
        </div>
    );

} else {
    return (
        <div className= 'TextInput'>
        <div className='TextInput_Label' >{Label}</div>
        <div className= {focused ? 'TextInput_InputField active' : warnStatus ? 'TextInput_InputField warning' : 'TextInput_InputField'}>
            <div className= 'TextInput_InputField_Text'>
                <input
                onChange={e => changeFunc(e)} 
                onFocus={onFocus} 
                onBlur={e => {checkFunc(e); onBlur()}} 
                className='TextInput_InputField_Text_Input' 
                name = {Label}
                placeholder = {Field}
                type = {typeProp} 
                disabled = {true}
                value = {value}
                />
                <div className='TextInput_InputField_Text_Icon active'
                    onClick={clickButton}>
                 <img src = {Icon} />
                </div>
            </div>
        </div>
        {(Assistive !=undefined) && <div className={`TextInput_AssistiveText ${warning}`}>{Assistive}</div>}
    </div>
    )
}
}
export default InputComponent;