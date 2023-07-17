import React from 'react';
import { slogen } from '../../../Constants/Constants';

const UserData = () => {

    const { full_name } = JSON.parse(localStorage.getItem('userData')).user

    console.log(full_name)

    return (
        (!full_name) ?
            <>Loading...</>
            :
            <div className='ChapLec'>
                <div className='userName'> Hi {full_name} 👋 </div>
            </div>
    );
};

export default UserData;