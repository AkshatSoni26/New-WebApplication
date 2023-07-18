import React from 'react';
import { full_name } from '../../../Constants/Constants';


const UserData = () => {

    console.log('UserData')

    return (
        // (!full_name) ?
        //     <>Loading...</>
        //     :
            <div className='ChapLec'>
                <div className='userName'> Hi {full_name} 👋 </div>
            </div>
    );
};

export default UserData;