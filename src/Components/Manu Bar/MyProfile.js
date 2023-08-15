import React from 'react';

const MyProfile = ({ profile, but, but_name, symbol }) => {

    const { full_name, phone_number } = JSON.parse(localStorage.getItem('userData')).user

    return (
        <div className='HomeMainContent' style={{ paddingBottom: "2%" }} >
            <div className='menuBarcontent MyAccount'>

                <div className='MyAccountHardCode'>
                    {symbol} {profile}
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

                        <div className='editBut subject'>
                            <div className='pan'>
                                {but} &nbsp;
                            </div>
                            <div className='Edit'>
                                {but_name}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default MyProfile;