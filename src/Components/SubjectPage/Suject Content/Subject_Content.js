import React from 'react';
import Carousel from 'react-multi-carousel';
import { useSelector } from 'react-redux';
import Chapter_Header from './Chapter Header/Chapter_Header';
import '../../../CSS/App.css'



const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 767, min: 464 },
        items: 2,
        slidesToSlide: 1 // optional, default to 1.
    }
};

const SubjectContent = ({subjectId}) => {

    const content = useSelector(state => state.content)

    // console.log('content', content)
    
    return (
        <div >
            <br></br>
            {
                content.map(
                    (data, index) => {
                        return (
                            ((data.content.learn).length >0) ?
                            <section id={`${data.node_id}`} key={index} className='ChapterContent'>

                                <Chapter_Header intialChaDa={data.content.learn[0].content_data.content_info} subjectId={subjectId} chapterId={data.node_id} display_name={data.display_name} lecLen ={(data.content.learn).length}/>

                                <div className='container SubjectContanier'>

                                    <Carousel
                                        responsive={responsive}
                                        autoPlay={false}
                                        swipeable={true}
                                        draggable={true}
                                        showDots={false}
                                        infinite={false}
                                        partialVisible={true}
                                        // dotListclassName="custom-dot-list-style"
                                        // centerMode={true}
                                    >
                                        {
                                            (data.content.learn).map(
                                                (chapter, index) => {
                                                    return (
                                                        <div key={index}>
                                                            <img className='chapeterImage' src={chapter.content_data.content_info.thumbnail}/>
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