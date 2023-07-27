import React from 'react';
import { Spinner } from 'react-bootstrap';

const SpinnerFun = () => {
    return (
        <div className='Spinner'
        //  style={{
        //     display: 'flex',
        //     justifyContent: 'center',
        //     alignContent: 'center'
        // }} 
            >
            <Spinner animation="border" />
        </div>
    )
};

export default SpinnerFun;