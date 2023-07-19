import React, { useEffect, useState } from 'react';
import ChapterPageNavBar from './ChapterPageNavBar/ChapterPageNavBar';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import ChapterPageSideBar from './ChapterPageSideBar/ChapterPageSideBar';
import ChapterContentPortion from './ChapterContentPortion/ChapterContentPortion';
import { FRONTEND_URLS } from '../Links/Config';

const ChapterPage = () => {

    console.log('ChapterPage')

    const { subject, chapter, video_id } = useParams()

    const [chapterdata, setChapterdata] = useState({})

    const navigate = useNavigate()

    console.log(subject, chapter)

    useEffect(
        () => {

            const data = JSON.parse(localStorage.getItem('data'))

            const accessKey = localStorage.getItem('Access Key')
            const userData = JSON.parse(localStorage.getItem('userData'))

            if (!userData && !data ) {
                navigate(FRONTEND_URLS.LOGIN_ROUTE)
            }
            
            // else if (!accessKey && !userData) {
            //     navigate(FRONTEND_URLS.LOGIN_ROUTE)
            // }

            // else if (!accessKey ) {
            //     navigate(FRONTEND_URLS.LOGIN_ROUTE)
            // }

             else if (!data) {
                navigate(-1)
            }
            
            else {
                let isChapter = false
                for (let i = 0; i < data.length; i++) {
                    if (data[i].node_id == chapter) {
                        setChapterdata(data[i])
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
        (!chapterdata)
            ?
            <>Loading...</>
            :
            <div>

                <div className='ChapterNav'>
                    <ChapterPageNavBar chapterName={chapterdata.display_name} subjectPageId={subject} />
                </div>

                <div className='contentSep'>

                    <div className='ChaptrSide'>
                    { (chapterdata?.content) &&  <ChapterPageSideBar chapterContent={chapterdata.content} /> }
                    </div>

                    <div className='ChapterCon'>
                     { (chapterdata?.content) && <ChapterContentPortion chapterContent={chapterdata.content} /> }
                    </div>

                </div>

            </div>
    );
};

export default ChapterPage;