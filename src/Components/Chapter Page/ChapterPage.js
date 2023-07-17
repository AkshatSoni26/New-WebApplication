import React, { useEffect, useState } from 'react';
import ChapterPageNavBar from './ChapterPageNavBar/ChapterPageNavBar';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import ChapterPageSideBar from './ChapterPageSideBar/ChapterPageSideBar';
import ChapterContentPortion from './ChapterContentPortion/ChapterContentPortion';

const ChapterPage = () => {
    
    console.log('ChapterPage')
    
    const { subject, chapter } = useParams()
    const [chapterdata, setChapterdata] = useState({})

    const navigate = useNavigate()

    console.log(subject, chapter)

    useEffect(
        () => {

            const data = JSON.parse(localStorage.getItem('data'))

            if (!data) {
                navigate(-1)
            }
            else {
                for (let i = 0; i < data.length; i++) {
                    if (data[i].node_id == chapter) {
                        setChapterdata(data[i])
                        break;
                    }
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
                    {(chapterdata?.display_name) && <ChapterPageNavBar chapterName={chapterdata.display_name} subjectPageId={subject} />}
                </div>

                <div className='contentSep'>

                    <div className='ChaptrSide'>
                        {(chapterdata.content) && <ChapterPageSideBar chapterContent={chapterdata.content} />}
                    </div>

                    <div className='ChapterCon'>
                        {(chapterdata.content) && <ChapterContentPortion chapterContent={chapterdata.content} />}
                    </div>

                </div>

            </div>
    );
};

export default ChapterPage;