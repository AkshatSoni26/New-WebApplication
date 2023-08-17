import React, { createContext, useEffect, useState } from 'react';
import LoginPage from './LoginPage/LoginPage';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './HomePage/Home';
import SubjectPage from './SubjectPage/SubjectPage';
import ChapterPage from './Chapter Page/ChapterPage';
import '../CSS/Tab.css'
import '../CSS/Phone.css'
import '../CSS/App.css'


import { FRONTEND_URLS } from './Links/Config'
import GeneralPageError from './ErrorPages/GeneralPageError';
import ErrorPages from './ErrorPages/ErrorPages';
import Register from './Onboarding/Register'
import Search from './Search/Search';
import Enrollments from './Enrollments/Enrollments';
import MyAccount from './Manu Bar/MyAccount';
import CommingSoon from './Manu Bar/CommingSoon';



function App() {

    
    const navigate = useNavigate()
    
    const { LOGIN_ROUTE, HOME_ROUTE,REGISTER_ROUTE, PAGE_NOT_FOUND, SEARCH_ROUTE, ENROLLMENTS, MY_ACCOUNT, COURSES, MENTORSHIP, DOUBUT_SOLVE, HELP_AND_SUPPORT } = FRONTEND_URLS
    
    const accessKey = localStorage.getItem('Access Key')
    const userData = localStorage.getItem('userData')

    // console.log(userData)

    useEffect(
        () => {

            document.addEventListener('contextmenu', event => event.preventDefault());
            document.addEventListener('DOMContentLoaded', () => {
                document.addEventListener('mousedown', (e) => {
                    e.preventDefault();
                });

            });
           

            if (!accessKey || accessKey == null || accessKey == undefined) {
                localStorage.clear()
               navigate(FRONTEND_URLS.LOGIN_ROUTE)
            }
            
            else if ( !userData || userData == null || userData == undefined || userData == 'ée') {
                // localStorage.clear()
               navigate(FRONTEND_URLS.LOGIN_ROUTE)
           }

        }, [accessKey, userData]
    )


    return (
        <div>
            <Routes>

                <Route path={LOGIN_ROUTE} element={<LoginPage />} />
                <Route path={ENROLLMENTS} element={<Enrollments />}/>
                <Route path={HOME_ROUTE} element={<Home />} />
                <Route path={REGISTER_ROUTE} element={<Register />} />
                
                <Route path={MY_ACCOUNT} element={<Home /> } />
                {/* <Route path={MY_ACCOUNT} element={<MyAccount /> } /> */}
                <Route path={COURSES} element={<Home /> } />
                <Route path={MENTORSHIP} element={<Home /> } />
                <Route path={DOUBUT_SOLVE} element={<Home /> } />
                <Route path={HELP_AND_SUPPORT} element={<Home /> } />

                <Route path='/:subject' element={<SubjectPage />} />
                <Route path='/:subject/:chapter/:video_id' element={<ChapterPage />} />
                <Route path='/:errorName' element={<GeneralPageError />} />
                <Route path={PAGE_NOT_FOUND} element={<ErrorPages />} />


                <Route path={`${SEARCH_ROUTE}`} element={<Search />} />
                <Route path={`${SEARCH_ROUTE}/:search_string/:Search_id`} element={<Search />} />
                
            </Routes>
        </div>
    )
}

export default App;