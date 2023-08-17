import React from 'react';
import { MenuBarIcon, SideBarItem, companyLogo } from '../../../Constants/Constants';
import '../../../assets/CSS/App.css'
import '../../../assets/CSS/Tab.css'
import '../../../assets/CSS/Phone.css'
import { BiMenuAltLeft } from 'react-icons/bi'
import { HomeCloseNav, HomeOpenNav, MenuSelection, OptionSelected, OverlayOff } from '../../../Functions/Services';
import OverLayFunction from '../../../GlobalComponents/OverLayFunction';
import { useLocation, useNavigate } from 'react-router-dom';
import CompanyLogo from '../CompanyLogo';
// import { OptionSelected } from '../../../Functions/Services';



const SideBarEffect = () => {

    const { size, color } = MenuBarIcon
    const navigate = useNavigate()

    return (
        <>
            <OverLayFunction />

            <div className='respHomeSide'>

                <div id="mySidebar" className='homeSide sidebar'>
                    <div className='LogoCloseBut'>
                        <CompanyLogo />
                    </div>

                    <div className='tableHome HomeTable'>

                        {
                            SideBarItem.map((item, index) => {
                                console.log('SideBarItemEffect', item)
                                return (
                                    <React.Fragment key={index}>
                                        <div id={`${item[2]}eff`} className='subject tableData' onClick={() => {
                                            HomeCloseNav();
                                            navigate(item[2]);
                                            OptionSelected(item[2])
                                        }}>
                                            <div className='rectangle optionMargin'></div>
                                            <div className='menuBarcontentSvgs colored'>
                                                {item[1]}
                                            </div>
                                            <div className='menuBarcontent colored'>
                                                {item[0]}
                                            </div>
                                        </div>

                                    </React.Fragment>
                                );
                            })
                        }
                    </div>
                </div>


                <div id="main">
                    <button className="subject" onClick={HomeOpenNav}>
                        <BiMenuAltLeft color={color} size={size} />
                    </button>
                </div>
            </div>
        </>
    );
};

export default SideBarEffect;






