import React, { useEffect } from 'react';
import NavBar from './NavBar/NavBar';
import SideBar from './SiderBar/SideBar';
import '../../CSS/App.css'
import '../../CSS/Tab.css'
import '../../CSS/Phone.css'
import { useNavigate } from 'react-router-dom';
import { FRONTEND_URLS } from '../Links/Config';
import Scroller from '../SpinnerFun/Scroller';
import MyAccount from '../Manu Bar/MyAccount';
import HomeComp from '../Manu Bar/HomeComp';
import { SideBarItem, editBut } from '../../Constants/Constants';
import MyProfile from '../Manu Bar/MyProfile';


const Home = () => {

    console.log('Home')
    const navigate = useNavigate()

    const accessKey = localStorage.getItem('Access Key')
    const userData = localStorage.getItem('userData')

    useEffect(
        () => {

            if (!accessKey) {
                navigate(FRONTEND_URLS.LOGIN_ROUTE)
            }

            if (!userData || userData == null || userData == undefined) {
                navigate(FRONTEND_URLS.LOGIN_ROUTE)
            }

        }, []
    )



    return (
        (!userData)
            ?
            <Scroller />
            :
            <section className='mainHome'>
                <SideBar />
                <div className='subjectNavBar'>
                    <NavBar />

                    {/* <HomeComp /> */}
                    
                    <MyAccount />
                </div>

            </section>
    );
};

export default Home;