import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../../../CSS/App.css'
import { facultiePortionLine } from '../../../Constants/Constants';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
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


const FacultiCaursol = () => {

    console.log('111111111111111111111')

    const FacultieData = JSON.parse(localStorage.getItem('userData')).faculties

    // console.log("FacultieData", FacultieData)

    return (
        (!FacultieData) ?
            <>Loading...</>
            :
            <div className='container '>

                <div className="" >
                    <div className="chapterName ChapLec">{facultiePortionLine}</div>

                    <Carousel className='FacultiCarsal'
                        responsive={responsive}
                        autoPlay={false}
                        swipeable={true}
                        draggable={true}
                        showDots={false}
                        infinite={false}
                        partialVisible={false}
                        // dotListclassName="custom-dot-list-style"
                    >
                        {
                            FacultieData.map(
                                (data, index) => {
                                    return (

                                        <button disabled className='facultiimages subject' key={index}>
                                            <img className='FacultiImg' src={data.thumbnail} />
                                            <em><strong>
                                                <div className='teacherName'>{data.name}</div></strong>
                                            </em>
                                            <div className='LectureName'>{data.designation}</div>
                                        </button>
                                    )
                                }
                            )
                        }
                    </Carousel>

                </div>
            </div>
    );
};

export default FacultiCaursol;