import React from 'react';
import '../../../CSS/Register.css'



const OnBordText = ({isName}) => {
    return (
        <div className='textonly'>
            <div className='start'>{ isName }</div>
            <div className='startline'>Let’s customize your eSaral journey</div>
        </div>
    );
};

export default OnBordText;