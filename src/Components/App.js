import React, { createContext, useEffect, useState } from 'react';
import LoginPage from './LoginPage/LoginPage';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './HomePage/Home';
import SubjectPage from './SubjectPage/SubjectPage';
import ChapterPage from './Chapter Page/ChapterPage';

import { FRONTEND_URLS } from './Links/Config'
import GeneralPageError from './ErrorPages/GeneralPageError';
import ErrorPages from './ErrorPages/ErrorPages';
import Register from './Onboarding/Register'
import Search from './Search/Search';



function App() {

    
    const navigate = useNavigate()
    
    const { LOGIN_ROUTE, HOME_ROUTE,REGISTER_ROUTE, SEARCH_ROUTE } = FRONTEND_URLS
    
    const accessKey = localStorage.getItem('Access Key')
    const userData = localStorage.getItem('userData')

    // console.log(userData)

    useEffect(
        () => {

            if (!accessKey || accessKey == null || accessKey == undefined) {
                // localStorage.clear()
               navigate(FRONTEND_URLS.LOGIN_ROUTE)
            }
            
            else if ( !userData || userData == null || userData == undefined || userData == 'ée') {
                // localStorage.clear()
               navigate(FRONTEND_URLS.LOGIN_ROUTE)
           }

        }, [accessKey]
    )


    return (
        <div>
            <Routes>

                <Route path={LOGIN_ROUTE} element={<LoginPage />} />

                <Route path={HOME_ROUTE} element={<Home />} />

                <Route path='/:subject' element={<SubjectPage />} />
                <Route path='/:subject/:chapter/:video_id' element={<ChapterPage />} />
                {/* <Route path='/:subject/:chapter/:ContentType/:video_id' element={<ChapterPage />} /> */}

                <Route path='/:errorName' element={<GeneralPageError />} />

                <Route path='/PageNotFound' element={<ErrorPages />} />

                <Route path={REGISTER_ROUTE} element={<Register />} />

                <Route path={`${SEARCH_ROUTE}`} element={<Search />} />
                <Route path={`${SEARCH_ROUTE}/:search_string/:Search_id`} element={<Search />} />

            </Routes>
        </div>
    )
}

export default App;