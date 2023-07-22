import React, { useEffect, useRef, useState } from 'react';
import OnBordText from './Components/OnBordText';
import InputField from './Components/InputField';
import ButtonLo from './Components/ButtonLo';
import '../../CSS/Register.css'



const Name = ({ setIsName }) => {

    const inputRef = useRef(null);

    // const [isFocused, setIsFocused] = useState(true);

    useEffect(
        () => {
            inputRef.current.focus();
            inputRef.current.classList.add('focused_input');
        }, []
    )

 

    return (
        <div>

            <div className="container">
                <div className="row">
                    <div className='mainPage mb-3'>

                        <OnBordText isName='Hi 👋'/>

                        <InputField inputRef={inputRef}  />

                    </div>

                    <br></br>

                    <ButtonLo setIsName={setIsName} inputRef={inputRef}/>

                </div>
            </div>

        </div>
    );
};

export default Name;