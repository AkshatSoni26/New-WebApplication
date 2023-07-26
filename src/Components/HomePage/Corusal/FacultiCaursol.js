import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../../../CSS/App.css'
import { facultiePortionLine } from '../../../Constants/Constants';
import { responsive } from '../../Functions/Services';
import SpinnerFun from '../../SpinnerFun/SpinnerFun';


const FacultiCaursol = () => {

    console.log('FacultiCaursol')

    const FacultieData = JSON.parse(localStorage.getItem('userData')).faculties

    return (
        (!FacultieData) ?
            <SpinnerFun />
            :
            <div className='container '>

                <div className="" >
                    <div className="chapterName ChapLec">{facultiePortionLine}</div>

                    <Carousel className='FacultiCarsal'
                        responsive={responsive(3)}
                        autoPlay={false}
                        swipeable={true}
                        draggable={true}
                        showDots={false}
                        infinite={false}
                        partialVisible={false}
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