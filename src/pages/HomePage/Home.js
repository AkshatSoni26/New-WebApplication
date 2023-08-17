import React, { useEffect, useState } from 'react';
import NavBar from './NavBar/NavBar';
import SideBar from './SiderBar/SideBar';
// import '../../CSS/App.css'
// import '../../CSS/Tab.css'
// import '../../CSS/Phone.css'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Scroller from '../../Components/SpinnerFun/Scroller';
// import MyAccount from '../../Components/Manu Bar/MyAccount';
// import CommingSoon from '../Manu Bar/CommingSoon';
// import HomeComp from '../../Components/Manu Bar/HomeComp';
import { FRONTEND_URLS } from '../../Components/Links/Config';
import { SideBarItem } from '../../Constants/Constants';
import MyAccount from '../Manu Bar/MyAccount';
import HomeComp from '../Manu Bar/HomeComp';
import CommingSoon from '../Manu Bar/CommingSoon';
import { OptionSelected } from '../../Functions/Services';



const Home = () => {

    console.log('Home')
    const { pathname } = useLocation()
    const navigate = useNavigate()

    console.log("pathname", pathname)

    const accessKey = localStorage.getItem('Access Key')
    const userData = localStorage.getItem('userData')

    const [selectOption, setSelectOption] = useState(SideBarItem[0][2])

    let dat = []

    for(let i =0; i<SideBarItem.length; i++){
        dat = [...dat,SideBarItem[i][2]]
    }
    
    useEffect(
        () => {
            console.log('accessKey',accessKey )

            if (!accessKey || accessKey == null || accessKey == undefined) {
                localStorage.clear()
               navigate(FRONTEND_URLS.LOGIN_ROUTE)
            }

            if (!userData || userData == null || userData == undefined) {
                navigate(FRONTEND_URLS.LOGIN_ROUTE)
            }
            // OptionSelected(SideBarItem[0][2])
            console.log("urls.includes(pathname)", dat.includes(pathname))
            console.log("dat",dat)
            if (dat.includes(pathname)){
                OptionSelected(pathname)
            }
            else{
                navigate()
            }

        }, [selectOption]
    )


return (
        (!userData)
            ?
            <Scroller />
            :
            <section className='mainHome'>
                <SideBar  />
                <div className='subjectNavBar'>
                    <NavBar />
                    {
                        pathname.includes("my-account") ?
                            <MyAccount />
                            : pathname.includes("courses") ?
                                <CommingSoon />
                                : pathname.includes("mentorship") ?
                                    <CommingSoon />
                                    : pathname.includes("doubut-solve") ?
                                        <CommingSoon />
                                        : pathname.includes("help-and-support") ?
                                            <CommingSoon />
                                            : pathname.includes("/") ?
                                                <HomeComp />
                                                :
                                                null
                    }
                </div>

            </section>
    );
};

export default Home;