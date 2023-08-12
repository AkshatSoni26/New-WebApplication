import React from 'react';
import { SideBarItem, editBut } from '../../Constants/Constants';

const MyAccount = () => {

    const { full_name, phone_number } = JSON.parse(localStorage.getItem('userData')).user

    return (
        <div className='scrollView HomeBackPhoneview HomeScrollProb' style={{ overflowY: 'scroll' }}>
            <div className='ViewPortProblem'>
                <div className='HomeMainContent' style={{ paddingBottom: "2%" }} >
                    <div className='menuBarcontent MyAccount'>

                        <div className='MyAccountHardCode'>
                            {SideBarItem[1][1]} My Profile
                        </div>

                        <div className='MyProfile'>
                            <div className='Image'>
                                Images
                            </div>
                            <div className='Info' >
                                <div className='name'>
                                    {full_name}
                                </div>

                                <div className='phoneNumber'>
                                        
                                    <div>
                                        +91
                                    </div>

                                    <div>
                                        {phone_number}
                                    </div>

                                </div>

                                <span className='editBut subject'>
                                    <div className='pan'>
                                        {editBut}
                                    </div>
                                    <div className='Edit'>
                                        Edit
                                    </div>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MyAccount;