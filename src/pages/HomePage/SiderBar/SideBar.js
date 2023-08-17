import React from 'react';
// import '../../../CSS/App.css'
// import '../../../CSS/Tab.css'
// import '../../../CSS/Phone.css'
import { SideBarItem, companyLogo } from '../../../Constants/Constants';
// import SpinnerFun from '../../SpinnerFun/SpinnerFun';
import { useNavigate } from 'react-router-dom';
import CompanyLogo from '../CompanyLogo';
import SpinnerFun from '../../../Components/SpinnerFun/SpinnerFun';
import { OptionSelected } from '../../../Functions/Services';



const SideBar = () => {

  console.log('SideBar')

  const data = localStorage.getItem('userData')
  const navigate = useNavigate()



  return (

    (!data) ?
      <SpinnerFun />
      :
      <div className='SideBar HomeSideBar homeSide'>
        <CompanyLogo />

        <div className='tableHome HomeTable'>
          {
            SideBarItem.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <div id={item[2]} className='subject tableData' onClick={() => {
                    navigate(item[2]);
                    OptionSelected(item[2])
                  }}>
                    <div className='rectangle optionMargin'></div>
                    <div className='menuBarcontentSvgs colored '>
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
  );
};

export default SideBar;