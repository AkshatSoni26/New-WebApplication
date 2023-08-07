import React from 'react';
import '../../../CSS/App.css'
import '../../../CSS/Tab.css'
import '../../../CSS/Phone.css'
import { SideBarItem, companyLogo } from '../../../Constants/Constants';
import SpinnerFun from '../../SpinnerFun/SpinnerFun';



const SideBar = () => {

  console.log('SideBar')

  const data = localStorage.getItem('userData')

  return (

    (!data) ?
      <SpinnerFun />
      :
      <div className=' SideBar HomeSideBar homeSide'>

        <div className='Logo_Image'>
          <img className='companyLogo' src={companyLogo} />
        </div>

        <div className='tableHome HomeTable'>
          {
            SideBarItem.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <button className='subject tableData'>
                    {/* <div className=''>
                      <div className='tableData'> */}
                        <div className='menuBarcontentSvgs'>
                          {item[1]}
                        </div>
                        <div className='menuBarcontent'>
                          {item[0]}
                        </div>
                      {/* </div>
                    </div> */}
                  </button>

                </React.Fragment>
              );
            })
          }
        </div>
      </div>
    // </div>
    // {/* </div> */}
  );
};

export default SideBar;