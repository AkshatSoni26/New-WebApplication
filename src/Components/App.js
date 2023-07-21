import React, { createContext, useEffect, useState } from 'react';
import LoginPage from './LoginPage/LoginPage';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './HomePage/Home';
import SubjectPage from './SubjectPage/SubjectPage';
import ChapterPage from './Chapter Page/ChapterPage';

import { FRONTEND_URLS } from './Links/Config'
import GeneralPageError from './ErrorPages/GeneralPageError';
import ErrorPages from './ErrorPages/ErrorPages';
import Register from './Register/Register';



function App() {

    
    const navigate = useNavigate()
    
    const { LOGIN_ROUTE, HOME_ROUTE,REGISTER_ROUTE } = FRONTEND_URLS
    
    const accessKey = localStorage.getItem('Access Key')
    const userData = JSON.parse(localStorage.getItem('userData'))
    const data = localStorage.getItem('data')

    useEffect(
        () => {

            if (data == undefined){
                navigate(FRONTEND_URLS.LOGIN_ROUTE)
            }

            if (!accessKey && !userData && !JSON.parse(data) ) {
                navigate(FRONTEND_URLS.LOGIN_ROUTE)
            }
            
            else if (!accessKey && !userData) {
                navigate(FRONTEND_URLS.LOGIN_ROUTE)
            }

            else if (!accessKey ) {
                navigate(FRONTEND_URLS.LOGIN_ROUTE)
            }


        }, [accessKey]
    )


    return (
        <div>
            <Routes>

                <Route path={LOGIN_ROUTE} element={<LoginPage />} />

                <Route path={HOME_ROUTE} element={<Home />} />

                {/* <Route path={HOME_ROUTE} element={<Register />} /> */}

                <Route path='/:subject' element={<SubjectPage />} />
                <Route path='/:subject/:chapter/:video_id' element={<ChapterPage />} />


                <Route path='/:errorName' element={<GeneralPageError />} />

                <Route path='/PageNotFound' element={<ErrorPages />} />

                <Route path={REGISTER_ROUTE} element={<Register />} />

            </Routes>
        </div>
    )
}

export default App;