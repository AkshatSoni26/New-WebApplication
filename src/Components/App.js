import React, { createContext, useEffect, useState } from 'react';
import LoginPage from './LoginPage/LoginPage';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './HomePage/Home';
import SubjectPage from './SubjectPage/SubjectPage';
import ChapterPage from './Chapter Page/ChapterPage';

import { FRONTEND_URLS } from './Links/Config'
import GeneralPageError from './ErrorPages/GeneralPageError';


function App() {

    const accessKey = localStorage.getItem('Access Key')
    

    const navigate = useNavigate()

    const { LOGIN_ROUTE, HOME_ROUTE } = FRONTEND_URLS
    
    useEffect(
        () => {
            if (!accessKey){
                navigate(LOGIN_ROUTE)
            }
        },[accessKey]
    )


    return (
        <div>
            <Routes>
                <Route path= {LOGIN_ROUTE} element={<LoginPage />} />
                <Route path= {HOME_ROUTE} element={<Home />} />
                <Route path='/:subject' element={<SubjectPage />} />
                <Route path='/:subject/:chapter' element={<ChapterPage />} />

                <Route path='/:errorName' element={<GeneralPageError />} />

            </Routes>
        </div>
    )
}

export default App;