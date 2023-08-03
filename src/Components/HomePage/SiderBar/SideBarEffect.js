import React from 'react';
import { SideBarItem, companyLogo } from '../../../Constants/Constants';
import '../../../CSS/App.css'
import '../../../CSS/Tab.css'
import '../../../CSS/Phone.css'



const SideBarEffect = () => {

    function openNav() {
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        document.getElementById("mySidebar").style.background ='black';
        // document.getElementById("main").style.display ='block'

    }

    function closeNav() {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        // document.getElementById("main").style.display ='none'

    }


    return (
        <div className='respHomeSide'>

            <div id="mySidebar" className='homeSide sidebar'>      {/*.home .SideBar #mySidebar */}

                <a href="javascript:void(0)" class="closebtn" onClick={closeNav}>×</a>

                <div className='Logo_Image'>
                    <img className='companyLogo' src={companyLogo} />
                </div>

                <div className='tableHome'>

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

                                </React.Fragment>
                            );
                        })
                    }
                </div>
            </div>


            <div id="main">
                <button class="openbtn" onClick={openNav}>☰</button>
                {/* <h2>Collapsed Sidebar</h2> */}
                {/* <p>Click on the hamburger menu/bar icon to open the sidebar, and push this content to the right.</p> */}
            </div>
        </div>
    );
};

export default SideBarEffect;






