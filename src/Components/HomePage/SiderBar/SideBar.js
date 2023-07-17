import React from 'react';
import logo from '../../../Images/logo.png'
import '../../../CSS/App.css'
import { FiHelpCircle, FiHome, FiUser } from "react-icons/fi";
import { PiStudentBold } from 'react-icons/pi'
import { GoBook } from 'react-icons/go'
import { BiMessageAltCheck } from 'react-icons/bi'


const SideBar = () => {

    const data = JSON.parse(localStorage.getItem('userData'))
    console.log('sideBar', typeof data)

    const SideBarItem = [['Home', <FiHome />], ['My Account', <FiUser />], ['Courses', <GoBook />], ['Mentorship', <PiStudentBold />], ['Doubut Solve', <BiMessageAltCheck />], ["Help and Support", <FiHelpCircle />]]

    return (

        (!data) ?
            <>Loading...</>
            :
            <div className='homeSide'>
                <div className='Logo_Image'>
                    <img className='companyLogo' src={logo} />
                </div>

                <div className='tableHome float-left'>

                    {
                        SideBarItem.map((item, index) => {
                            return (
                              <React.Fragment key={index}>
                                <button className='subject'>
                                  <div className=''>
                                    <div className='tableData'>
                                      <div className='menuBarcontentSvgs'>
                                        {item[1]}
                                      </div>
                                      <div className='menuBarcontent'>
                                        {item[0]}
                                      </div>
                                    </div>
                                  </div>
                                </button>
                                <br />
                              </React.Fragment>
                            );
                          })                          
                    }
                </div>
            </div>
    );
};

export default SideBar;