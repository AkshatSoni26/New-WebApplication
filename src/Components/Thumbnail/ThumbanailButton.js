import React from 'react';
import '../../assets/CSS/App.css'

const ThumbanailButton = () => {
    return (

        <div className='accordianImage2' style={{background: 'none'}}>
            <img style={{height: 30, width: 30}} src={require('../../utils/Images/play button.png')} />
        </div>

    );
};

export default ThumbanailButton;