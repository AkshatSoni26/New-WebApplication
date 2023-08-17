import React from 'react';
import { HomeCloseNav } from '../Components/Functions/Services';

const OverLayFunction = () => {
    return (
        <div id="overlay" onClick={HomeCloseNav}></div>
    );
};

export default OverLayFunction;