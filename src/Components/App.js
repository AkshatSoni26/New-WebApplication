import React, { createContext, useEffect, useState } from 'react';
import LoginPage from './LoginPage/LoginPage';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './HomePage/Home';
import SubjectPage from './SubjectPage/SubjectPage';
import ChapterPage from './Chapter Page/ChapterPage';


function App() {

    const accessKey = localStorage.getItem('Access Key')

    const navigate = useNavigate()

    useEffect(
        () => {
            if (!accessKey){
                navigate('/')
            }
        },[accessKey]
    )

    return (
        <div>
            <Routes>
                <Route path='/' element={<LoginPage />} />
                <Route path='/home' element={<Home />} />
                <Route path='/:subject' element={<SubjectPage />} />
                <Route path='/:subject/:chapter' element={<ChapterPage />} />
            </Routes>
        </div>
    )
}

export default App;