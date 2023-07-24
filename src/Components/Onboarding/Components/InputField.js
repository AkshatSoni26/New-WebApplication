import React from 'react';
import '../../../CSS/Register.css'



const InputField = ( { inputRef, Que, variable, phoneNumber } ) => {

    const exp = 'Enter your' + ' ' +variable+ ' ' + "here"

    console.log('inputRef', inputRef)

    return (
        <div className='nameAskingSection'>

            <div className='nameQue'> {Que} </div>

            <input ref={inputRef} type="text" placeholder={exp} className= 'focused_input' />

        </div>
    );
};

export default InputField;