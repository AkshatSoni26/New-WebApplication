import React from 'react';
// import Name from '../Onboarding/Name';

const MyProfile = ({ setModalShow, profile, but, but_name, symbol, setIsEdit }) => {

    const { full_name, phone_number } = JSON.parse(localStorage.getItem('userData')).user

    function test() {

        const doc = document.getElementsByClassName("trial")
        doc.innerHTML = '<Name />'
        // console.log("doc", doc)

    }

    return (
        <div className='HomeMainContent' style={{ paddingBottom: "2%" }} >
            <div className='menuBarcontent MyAccount'>

                <div className='MyAccountHardCode'>
                    {symbol} {profile}
                </div>

                <div className='MyProfile MyTarget'>
                    {/* <div className='Image'>
                        Images
                    </div> */}
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

                        <div className='editBut subject' onClick={() => {
                            test();
                            setIsEdit(true);
                            // console.log('print name is click')
                            // setModalShow(true)
                        }}>
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