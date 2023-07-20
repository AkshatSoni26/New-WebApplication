import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import { useSelector } from 'react-redux';
import Chapter_Header from './Chapter Header/Chapter_Header';
import '../../../CSS/App.css'
import { ChapterNavigator, responsive } from '../../Functions/Services';
import { DefaultThumbnails } from '../../../Constants/Constants';
import { useNavigate } from 'react-router-dom';



const SubjectContent = ({ subjectId }) => {

    console.log('SubjectContent')

    const content = useSelector(state => state.content)
    const navigate = useNavigate()
    const [urlPar, setUrlPar] = useState([])

    useEffect(
        () => {
            const currentUrl = window.location.href;
            const urlSegments = currentUrl.split('/');

            setUrlPar(
                [urlSegments[urlSegments.length - 1]]
            )

        }, []
    )


    function test(j) {
        console.log(j)
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
                                <section id={`${data.node_id}`} key={index} className='ChapterContent'>

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
                                                                            // test(`/${urlPar[0]}/${ chapterId }/${chapter.content_data.content_info.video_id}`)

                                                                            ChapterNavigator(urlPar[0], chapterId, navigate, chapter.content_data.content_info.video_id )

                                                                            // navigate(`/${urlPar[0]}/${ chapter.node_id }/${chapter.content_data.content_info.video_id}`)
                                                                        }
                                                                    }

                                                                >
                                                                    <img className='chapeterImage'
                                                                        src={
                                                                            chapter?.content_data?.content_info?.thumbnail ?
                                                                                chapter.content_data.content_info.thumbnail
                                                                                :
                                                                                DefaultThumbnails.video
                                                                        } />
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