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

    const { chapter } = useParams()

    const [loading, setLoading] = useState(true)

    const dispatch = useDispatch()
    const { LearnData } = bindActionCreators(actionCreators, dispatch)

    const navigate = useNavigate()

    console.log('chapter', chapter)
    useEffect(
        () => {
            const data = JSON.parse(localStorage.getItem('data'))

            const userData = JSON.parse(localStorage.getItem('userData'))

            if (!userData && !data ) {
                navigate(FRONTEND_URLS.LOGIN_ROUTE)
            }

             else if (!data) {
                navigate(-1)
            }
            
            else {
                let isChapter = false
                for (let i = 0; i < data.length; i++) {
                    if (data[i].node_id == chapter) {

                        console.log('data[i].node_id',data[i].node_id)
                        LearnData(data[i])
                        setLoading(false)
                        isChapter = true
                        break;
                    }
                }
                if (isChapter == false){
                     navigate('/PageNotFound')
                }
            }

        }, []
    )

    return (

            <div>

                <div className='ChapterNav'>
                    <ChapterPageNavBar  />
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