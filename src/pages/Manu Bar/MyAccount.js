import React, { useEffect, useRef, useState } from 'react';
import MyProfile from './MyProfile';
import MyTargets from './MyTargets';
import { SideBarItem, editBut } from '../../Constants/Constants';
import { FiTarget, FiLogOut } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom';
import MyVerticallyCenteredModal from './NameUpdateModal';
import { Logout, UserData } from '../../Functions/Services';
import ButtonLo from '../Onboarding/Components/ButtonLo';




const MyAccount = () => {

    const { full_name, phone_number } = JSON.parse(localStorage.getItem('userData')).user

    const [isName, setIsName] = useState()
    const [IsEdit, setIsEdit] = useState(false)

    const [name, setName] = useState(`${full_name} `); // Add state for name

    const navigate = useNavigate()

    const [modalShow, setModalShow] = useState(false);

    const inputRef = useRef(name)


    useEffect(
        () => {
            if (isName) {
                const access = localStorage.getItem('Access Key')
                setIsEdit(false)
                UserData(access, navigate)
            }
        }, [isName]
    )



    return (
        <div className='scrollView HomeBackPhoneview HomeScrollProb' style={{ overflowY: 'scroll' }}>
            {
                !IsEdit ?
                    <div className='ViewPortProblem'>

                        <MyProfile setModalShow={setModalShow} profile='My Profile' setIsEdit={setIsEdit} symbol={SideBarItem[1][1]} but={editBut} but_name='Edit' />
                        <MyTargets profile='My Targets' symbol={<FiTarget />} but={editBut} but_name='See History' />

                        <div className='HomeMainContent'  >
                            <div className='menuBarcontent MyAccount'>

                                <div className='MyAccountHardCode logout subject' onClick={Logout}>
                                    <FiLogOut /> Logout
                                </div>

                            </div>
                        </div>
                        <MyVerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                    </div>
                    :

                    <div className='HomeMainContent'  >
                        <div className='menuBarcontent MyAccount' style={{ display: "flex", alignItems: "center" }}>

                            <div className='nameAskingSection'>
                                <div className='Que'>Name</div>
                                <input
                                    value={name}
                                    onChange={(e) => {setName(e.target.value)}} // Handle name input change
                                    ref={inputRef}
                                    type="text"
                                    className='focused_input'
                                    autoFocus
                                />

                                <br />
                                <br />

                                <div className='Que'>Phone</div>
                                <input value={phone_number} disabled autoFocus={true} type="text" className='focused_input' />

                                <ButtonLo  setIsName={setIsName} inputRef={inputRef} butText='Save'/>
                            
                            </div>
                        </div>
                    </div>

            }
        </div>
    );
};

export default MyAccount;