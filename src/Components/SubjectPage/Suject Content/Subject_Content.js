import React from 'react';
import Carousel from 'react-multi-carousel';
import { useSelector } from 'react-redux';
import Chapter_Header from './Chapter Header/Chapter_Header';
import '../../../CSS/App.css'
import { responsive } from '../../Functions/Services';



const SubjectContent = ({ subjectId }) => {

    const content = useSelector(state => state.content)

    return (
        <div >
            <br></br>
            {
                content.map(
                    (data, index) => {
                        return (
                            ((data.content.learn).length > 0) ?
                                <section id={`${data.node_id}`} key={index} className='ChapterContent'>

                                    <Chapter_Header intialChaDa={data.content.learn[0].content_data.content_info} subjectId={subjectId} chapterId={data.node_id} display_name={data.display_name} lecLen={(data.content.learn).length} />

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
                                                                <img className='chapeterImage' src={chapter.content_data.content_info.thumbnail} />
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