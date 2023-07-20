import React from 'react';
import '../../CSS/App.css'

const ThumbanailButton = () => {
    return (

        <div className='playbuttondiv image-container'>
            <img className='playbutton' src={require('../../Images/play button.png')} />
        </div>

    );
};

export default ThumbanailButton;