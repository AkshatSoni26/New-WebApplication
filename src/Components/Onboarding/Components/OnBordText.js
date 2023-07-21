import React from 'react';

const OnBordText = ({isName}) => {
    return (
        <div className='textonly'>
            <div className='start'>Hi, {isName}👋</div>
            <div className='startline'>Let’s customize your eSaral journey</div>
        </div>
    );
};

export default OnBordText;