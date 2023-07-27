import React from 'react';
import '../../../CSS/App.css'
import { SideBarItem, companyLogo } from '../../../Constants/Constants';
import SpinnerFun from '../../SpinnerFun/SpinnerFun';


const SideBar = () => {

  console.log('SideBar')

  const data = window.atob(localStorage.getItem('userData'))

  return (

    (!data) ?
      <SpinnerFun />
      :
      <div className='homeSide'>
        <div className='Logo_Image'>
          <img className='companyLogo' src={companyLogo} />
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