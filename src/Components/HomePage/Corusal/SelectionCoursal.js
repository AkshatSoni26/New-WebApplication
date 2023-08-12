import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../../../CSS/App.css'
import { facultiePortionLine } from '../../../Constants/Constants';
import { responsive } from '../../Functions/Services';
import SpinnerFun from '../../SpinnerFun/SpinnerFun';


const SelectionCoursal = () => {

    console.log('FacultiCaursol')

    const SelectionData = JSON.parse(localStorage.getItem('userData')).selection

    return (
        (!SelectionData) ?
            <SpinnerFun />
            :
            <>
                <div className="userData SubjectName ChapLec HomeMainFacultiContent facultiStyle">Selections</div>

                <div className='subjectCoursal' 
                style={{marginBottom:"0%"}} 
                >
                    {   
                        SelectionData.map(
                            (data, index) => {
                                return (

                                    <div key={index} className='SubjectImgAndName' style={{ marginRight: "13%",paddingLeft: (index==0)? "3%" : 0}}>
                                        <img className='FacultiImg' src={data.thumbnail} />
                                        <div className='LectureName'>
                                            {/* <div  >  <b > {data.student_name}  </b></div> */}
                                            {/* <div >{data.designation[0] + data.designation.slice(1,).toLowerCase()}</div> */}
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

export default SelectionCoursal;