import React from 'react';
import { useParams } from 'react-router-dom';

const GeneralPageError = ({ err }) => {

    const params = useParams()

    console.log(params)
    return (
        <div>
            data
        </div>
    );
};

export default GeneralPageError;