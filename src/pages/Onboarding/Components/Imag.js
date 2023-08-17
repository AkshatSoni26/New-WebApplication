import React from 'react';
import '../../../CSS/Register.css'



const Imag = ( {imag} ) => {
    return (
        <div className='OnborImg'>
            <img className='OnborImage' src={imag} />
        </div>
    );
};

export default Imag;