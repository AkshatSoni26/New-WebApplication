import React, { useEffect, useState } from 'react';
import ChapterPageNavBar from './ChapterPageNavBar/ChapterPageNavBar';
import { useLocation, useNavigate } from 'react-router-dom';
import ChapterPageSideBar from './ChapterPageSideBar/ChapterPageSideBar';
import ChapterContentPortion from './ChapterContentPortion/ChapterContentPortion';

const ChapterPage = () => {

    const [chapterdata, setChapterdata] = useState({})

    const navigate = useNavigate()

    const location = useLocation()

    console.log('location under the chapter page.', location.state)

    const chapterPageId = location.state


    useEffect(
        () => {
           
            const data = JSON.parse(localStorage.getItem('data'))

            if (!data) {
                navigate(`/${chapterPageId[0]}`)
            }
            else {
            console.log('under the chapterPageNavBar useEffect')
            for (let i = 0; i < data.length; i++) {

                console.log('under the chapterPageNavBar useEffect', typeof data[i].node_id, typeof chapterPageId[0])

                if (data[i].node_id == chapterPageId[1]) {
                    setChapterdata(data[i])
                    console.log('all work correctly', data[i])
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

                    {(chapterdata.display_name) && <ChapterPageNavBar chapterName={chapterdata.display_name} chapterPageId={chapterPageId} />}
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