import React from 'react';
import { MenuBarIcon, SideBarItem, companyLogo } from '../../../Constants/Constants';
import '../../../CSS/App.css'
import '../../../CSS/Tab.css'
import '../../../CSS/Phone.css'
import { BiMenuAltLeft } from 'react-icons/bi'



const SideBarEffect = () => {

    const { size, color } = MenuBarIcon

    function openNav() {
        document.getElementById("mySidebar").style.width = "250px";
        // document.getElementById("main").style.marginLeft = "250px";
        // document.getElementById("mySidebar").style.background ='black';
        // document.getElementById("main").style.display ='block'
        on()
    }

    function closeNav() {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        // document.getElementById("main").style.display ='none'
        off() 

    }


    function on() {
        document.getElementById("overlay").style.display = "block";
      }
      
      function off() {
        document.getElementById("overlay").style.display = "none";
      }

    return (
        <>
        
        <div id="overlay" onClick={closeNav}></div>
        
        <div className='respHomeSide'>

            <div id="mySidebar" className='homeSide sidebar'>

                <div className='LogoCloseBut'>

                    <div className='Logo_Image'>
                        <img className='companyLogo' src={companyLogo} />
                    </div>

                    {/* <a href="javascript:void(0)" class="closebtn" onClick={closeNav}>×</a> */}


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
                <button class="subject" onClick={openNav}>
                    <BiMenuAltLeft color={color} size={size} />
                </button>
            </div>
        </div>

        </>
    );
};

export default SideBarEffect;






