import React from 'react';
import { companyLogo } from '../../Constants/Constants';

const CompanyLogo = () => {
    return (
        <div className='Logo_Image'>
            <img className='companyLogo' src={companyLogo} />
        </div>
    );
};

export default CompanyLogo;