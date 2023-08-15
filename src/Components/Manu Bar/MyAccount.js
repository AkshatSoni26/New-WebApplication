import React from 'react';
import MyProfile from './MyProfile';
import MyTargets from './MyTargets';
import { SideBarItem, editBut } from '../../Constants/Constants';
import { FiTarget, FiLogOut } from 'react-icons/fi'
import { Logout } from '../Functions/Services';




const MyAccount = () => {


    return (
        <div className='scrollView HomeBackPhoneview HomeScrollProb' style={{ overflowY: 'scroll' }}>
            <div className='ViewPortProblem'>
                <MyProfile profile='My Profile' symbol={SideBarItem[1][1]} but={editBut} but_name='Edit' />
                <MyTargets profile='My Targets' symbol={<FiTarget />} but={editBut} but_name='See History' />

                <div className='HomeMainContent'  >
                    <div className='menuBarcontent MyAccount'>

                        <div className='MyAccountHardCode logout subject' onClick={Logout}>
                            <FiLogOut /> Logout
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyAccount;