import React, { createContext, useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import ChapterPage from './pages/Chapter Page/ChapterPage';
import { FRONTEND_URLS } from './Components/Links/Config'
import GeneralPageError from './Components/ErrorPages/GeneralPageError';
import ErrorPages from './Components/ErrorPages/ErrorPages';
import Register from './Components/Onboarding/Register'
import Search from './Components/Search/Search';
import Enrollments from './Components/Enrollments/Enrollments';
import LoginPage from './pages/LoginPage/LoginPage';
import Home from './pages/HomePage/Home';
import SubjectPage from './pages/SubjectPage/SubjectPage';




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