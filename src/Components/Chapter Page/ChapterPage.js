import React, { memo, useEffect, useState } from 'react';
import ChapterPageNavBar from './ChapterPageNavBar/ChapterPageNavBar';
import { useNavigate, useParams } from 'react-router-dom';
import ChapterPageSideBar from './ChapterPageSideBar/ChapterPageSideBar';
import ChapterContentPortion from './ChapterContentPortion/ChapterContentPortion';
import { FRONTEND_URLS } from '../Links/Config';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../State';


const ChapterPage = () => {

    console.log('ChapterPage')

    const chapter = window.atob(useParams().chapter)

    const [loading, setLoading] = useState(true)

    const dispatch = useDispatch()
    const { LearnData } = bindActionCreators(actionCreators, dispatch)

    const access = localStorage.getItem('Access Key')

    const navigate = useNavigate()

    useEffect(
        () => {

            var data = null
            var userData = null

            try {
                data = JSON.parse(window.atob(localStorage.getItem('data')))
            }
            catch (error) {
                console.log('err', error)
                navigate(-1)
            }

            try {
                userData = JSON.parse(window.atob(localStorage.getItem('userData')))
            }
            catch (error) {
                console.log('err', error)
                navigate(FRONTEND_URLS.LOGIN_ROUTE)
            }


            if (data) {
                console.log(data)

                let isChapter = false
                for (let i = 0; i < data.length; i++) {
                    if (data[i].node_id == chapter) {

                        console.log('data[i].node_id', data[i].node_id)

                        LearnData(data[i])
                        setLoading(false)
                        isChapter = true
                        break;
                    }
                }

                if (isChapter == false) {
                    navigate(`/${window.btoa(chapter)}`)
                }

                // if (access){
                //     navigate(FRONTEND_URLS.LOGIN_ROUTE)
                // }
            }

        }, []
    )

    return (

        <div>

            <div className='ChapterNav'>
                <ChapterPageNavBar />
            </div>

            <div className='contentSep'>

                <div className='ChaptrSide'>
                    <ChapterPageSideBar />
                </div>

                <div className='ChapterCon'>
                    <ChapterContentPortion />
                </div>

            </div>

        </div>
    );
};

export default memo(ChapterPage);


