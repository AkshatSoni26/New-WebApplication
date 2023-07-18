import React, { useEffect } from 'react';
import NavBar from './NavBar/NavBar';
import SideBar from './SiderBar/SideBar';
import '../../CSS/App.css'
import UserData from './UserData/UserData';
import FacultiCaursol from './Corusal/FacultiCaursol';
import SubjectCaural from './Corusal/SubjectCaural';


const Home = () => {

    console.log('Home')
    // console.log('under the home userData', localStorage.getItem('userData'))

    return (
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