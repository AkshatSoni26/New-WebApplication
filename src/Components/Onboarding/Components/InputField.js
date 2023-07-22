import React from 'react';
import '../../../CSS/Register.css'



const InputField = ( {inputRef} ) => {
    return (
        <div className='nameAskingSection'>

            <div className='nameQue'> What’s your name? </div>

            <input ref={inputRef} type="text" placeholder="Enter your name here"
                // onFocus={handleFocus} // Event handler for when input gains focus
                // onBlur={handleBlur} // Event handler for when input loses focus
                className= 'focused_input' />

        </div>
    );
};

export default InputField;