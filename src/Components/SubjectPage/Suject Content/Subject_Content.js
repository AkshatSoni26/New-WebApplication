import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Chapter_Header from './Chapter Header/Chapter_Header';
import '../../../CSS/App.css'
import { ChapterNavigator, OverlayOff, responsive } from '../../Functions/Services';
import { DefaultThumbnails } from '../../../Constants/Constants';
import { useNavigate } from 'react-router-dom';
import ThumbanailButton from '../../Thumbnail/ThumbanailButton';
import ThumbnailDur from '../../Thumbnail/ThumbnailDur';



const SubjectContent = ({ subjectId, setTabIndexBut }) => {

    console.log('SubjectContent')

    const content = useSelector(state => state.content)
    const navigate = useNavigate()
    const [urlPar, setUrlPar] = useState()

    const currentUrl = window.location.href;
    useEffect(
        () => {
            const urlSegments = currentUrl.split('/');

            setUrlPar(
                urlSegments[urlSegments.length - 1]
            )

        }, [currentUrl]
    )

    return (
        <>
            <div id="overlay" onClick={() => {
                OverlayOff();
                setTabIndexBut(false)
            }}></div>

            {
                content.map(
                    (data, index) => {

                        const chapterId = data.node_id

                        return (
                            ((data.content.learn).length > 0) ?
                                <div className='HomeMainFacultiContentPortion subjectCardClass'>
                                    <section id={`${data.node_id}`} key={index}>
                                        <Chapter_Header intialChaDa={data.content.learn[0].content_data.content_info}
                                            subjectId={subjectId} chapterId={chapterId} init_video_id={data.content.learn[0].content_data.content_info.video_id}
                                            display_name={data.display_name}
                                            lecLen={(data.content.learn).length} />
                                    </section>
                                    
                                    <div className='subjectCoursal' style={{ marginBottom: "2%" }}>
                                        {
                                            (data.content.learn).map(
                                                (chapter, index) => {
                                                    return (
                                                        (chapter?.content_data?.content_info?.video_id) &&
                                                        <div key={index} className='subject SubjectImgAndName' style={{ marginRight: "13%", paddingLeft: (index == 0) ? "3%" : 0 }}
                                                            onClick={
                                                                () => {
                                                                    ChapterNavigator(urlPar, chapterId, navigate, chapter.content_data.content_info.video_id)
                                                                }
                                                            }>
                                                            <div className="VidThum">
                                                                    <img
                                                                        className='accordianImage' style={{
                                                                            width: "208px",
                                                                        }}
                                                                        src={
                                                                            chapter?.content_data?.content_info?.thumbnail ?
                                                                                chapter.content_data.content_info.thumbnail
                                                                                :
                                                                                DefaultThumbnails.video
                                                                        } />
                                                                <ThumbanailButton />
                                                                <ThumbnailDur duration={chapter?.content_data?.content_info?.duration} />
                                                            </div>
                                                            <div
                                                                className='LectureName'
                                                            > {chapter.display_name} </div>
                                                        </div>
                                                    )
                                                }
                                            )
                                        }
                                    </div>
                                </div >
                                :
                                null
                        )
                    }
                )
            }
        </>
    );
};

export default SubjectContent;