import React, { useEffect } from 'react';
import NavBar from './NavBar/NavBar';
import SideBar from './SiderBar/SideBar';
import '../../CSS/App.css'
import UserData from './UserData/UserData';
import FacultiCaursol from './Corusal/FacultiCaursol';
import SubjectCaural from './Corusal/SubjectCaural';
import { full_name } from '../../Constants/Constants';
import { useNavigate } from 'react-router-dom';
import { FRONTEND_URLS } from '../Links/Config';


const Home = () => {

    console.log('Home')
    const navigate = useNavigate()

    const accessKey = localStorage.getItem('Access Key')
    const userData = localStorage.getItem('userData')

    useEffect(
        () => {

            if (!accessKey ) {
                // localStorage.clear()
                navigate(FRONTEND_URLS.LOGIN_ROUTE)
            }

            // if  {
            //     navigate(FRONTEND_URLS.LOGIN_ROUTE)
            // }

             if (!userData || userData == null || userData == undefined) {
                navigate(FRONTEND_URLS.LOGIN_ROUTE)
            }

        }, []
    )

    return (
        (!userData)
            ?
            <>Erro</>
            :
            <section className='mainHome'>
                <div className='home'>

                    <section>
                        <div className='SideBar'>
                            <SideBar />
                        </div>
                    </section>

                    <div className='NavBar'>

                    <NavBar /> 

                        <div className='HomeMainContent '>

                            <section >
                                <div className='userData'>
                                    <UserData />
                                </div>
                            </section>

                            <section >
                                <div className='SubjectCaural'>
                         <SubjectCaural /> 
                                </div>
                            </section>

                            <section >
                                <div className='FacultiCaursol'>
                               <FacultiCaursol /> 
                                </div>
                            </section>

                        </div>

                    </div>

                </div>
            </section>
    );
};

export default Home;