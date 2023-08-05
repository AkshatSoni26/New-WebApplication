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
            <>
                    <div className="chapterName ChapLec">{facultiePortionLine}</div>

                    <div className='subjectCoursal' 
                    // style={{marginLeft:"6%"}}
                    >
                        {
                            FacultieData.map(
                                (data, index) => {
                                    return (
                                        <div key={index} className='SubjectImgAndName' style={{marginRight: "13%"}}>
                                            <img className='FacultiImg' src={data.thumbnail} />
                                            <div className='LectureName'>
                                                <div  >  <b > {data.name}  </b></div>
                                                <div >{data.designation[0] + data.designation.slice(1,).toLowerCase()}</div>
                                            </div>
                                        </div>
                                    )
                                }
                            )
                        }
                    </div>
            </>
    );
};

export default FacultiCaursol;