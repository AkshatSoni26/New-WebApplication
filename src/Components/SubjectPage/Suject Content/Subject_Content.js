import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import { useSelector } from 'react-redux';
import Chapter_Header from './Chapter Header/Chapter_Header';
import '../../../CSS/App.css'
import { ChapterNavigator, responsive } from '../../Functions/Services';
import { DefaultThumbnails } from '../../../Constants/Constants';
import { useNavigate } from 'react-router-dom';
import ThumbanailButton from '../../Thumbnail/ThumbanailButton';
import ThumbnailDur from '../../Thumbnail/ThumbnailDur';



const SubjectContent = ({ subjectId }) => {

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


    function test(j) {
        console.log(j, urlPar)
    }


    return (
        <div >
            <br></br>
            {
                content.map(
                    (data, index) => {

                        const chapterId = data.node_id

                        return (
                            ((data.content.learn).length > 0) ?
                                <section id={`${data.node_id}`} key={index} className='SubjectContent'>

                                    <Chapter_Header intialChaDa={data.content.learn[0].content_data.content_info}

                                        subjectId={subjectId} chapterId={chapterId} init_video_id={data.content.learn[0].content_data.content_info.video_id}

                                        display_name={data.display_name}

                                        lecLen={(data.content.learn).length} />

                                    <div className='container SubjectContanier'>

                                        <Carousel
                                            responsive={responsive(4)}
                                            autoPlay={false}
                                            swipeable={true}
                                            draggable={true}
                                            showDots={false}
                                            infinite={false}
                                            partialVisible={true}
                                        >
                                            {
                                                (data.content.learn).map(
                                                    (chapter, index) => {
                                                        return (
                                                            <div key={index}>
                                                                <button className='subject'
                                                                    onClick={
                                                                        () => {
                                                                            test(`/${urlPar[0]}/${ chapter.node_id }/${chapter.content_data.content_info.video_id}`)
                                                                            
                                                                            ChapterNavigator(urlPar, chapterId, navigate, chapter.content_data.content_info.video_id) 
                                                                             }
                                                                    }

                                                                >
                                                                    <div className='VidThum '> 
                                                                        <img className='accordianImage'
                                                                            src={
                                                                                chapter?.content_data?.content_info?.thumbnail ?
                                                                                    chapter.content_data.content_info.thumbnail
                                                                                    :
                                                                                    DefaultThumbnails.video
                                                                            } />

                                                                        <ThumbanailButton />
                                                                        <ThumbnailDur
                                                                            duration={chapter?.content_data?.content_info?.duration}
                                                                        />

                                                                    </div>

                                                                </button>
                                                                <div className='LectureName'> {chapter.display_name} </div>
                                                            </div>
                                                        )
                                                    }
                                                )
                                            }
                                        </Carousel>

                                    </div>
                                </section>
                                :
                                null
                        )
                    }
                )
            }
        </div>
    );
};

export default SubjectContent;