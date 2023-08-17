import React from 'react';
import '../../../assets/CSS/Register.css'



const OnBordText = ({isName, startLine}) => {
    return (
        <div className='textonly'>
            <div className='start'>{ isName }</div>
            <div className='startline'>{startLine}</div>
        </div>
    );
};

export default OnBordText;