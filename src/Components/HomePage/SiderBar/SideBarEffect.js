import React from 'react';
import { MenuBarIcon, SideBarItem, companyLogo } from '../../../Constants/Constants';
import '../../../CSS/App.css'
import '../../../CSS/Tab.css'
import '../../../CSS/Phone.css'
import { BiMenuAltLeft } from 'react-icons/bi'
import { HomeOpenNav } from '../../Functions/Services';
import OverLayFunction from '../../../Utility/OverLayFunction';



const SideBarEffect = () => {

    const { size, color } = MenuBarIcon

    return (
        <>
        
        <OverLayFunction />
        
        <div className='respHomeSide'>

            <div id="mySidebar" className='homeSide sidebar'>

                <div className='LogoCloseBut'>

                    <div className='Logo_Image'>
                        <img className='companyLogo' src={companyLogo} />
                    </div>

                </div>

                <div className='tableHome'>

                    {
                        SideBarItem.map((item, index) => {
                            console.log('SideBarItemEffect', item)
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






