import React, { useEffect, useRef, useState } from 'react';
import OnBordText from './Components/OnBordText';
import InputField from './Components/InputField';
import ButtonLo from './Components/ButtonLo';
import '../../CSS/Register.css'


const Name = ({ setIsName }) => {

    const inputRef = useRef(null);

    useEffect(
        () => {
            inputRef.current.focus();
            inputRef.current.classList.add('focused_input');
        }, []
    )

    return (

        <div className="mainPage">

            <OnBordText isName='Hi 👋' startLine='Let’s customize your eSaral journey' />

            <InputField inputRef={inputRef} Que='What’s your name?' variable={'name'} />

            <div id='message'></div>

            <ButtonLo setIsName={setIsName} inputRef={inputRef} />

        </div>

    );
};

export default Name;