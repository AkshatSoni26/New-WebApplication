import React from 'react';
import 'react-multi-carousel/lib/styles.css';
// import '../../../CSS/App.css'
import { facultiePortionLine } from '../../../Constants/Constants';
import SpinnerFun from '../../../Components/SpinnerFun/SpinnerFun';
// import { responsive } from '../../../Functions/Services';


const FacultiCaursol = () => {

    console.log('FacultiCaursol')

    const FacultieData = JSON.parse(localStorage.getItem('userData')).faculties

    return (
        (!FacultieData) ?
            <SpinnerFun />
            :
            <>
                <div className="userData SubjectName ChapLec HomeMainFacultiContent facultiStyle">{facultiePortionLine}</div>

                <div className='subjectCoursal' 
                style={{marginBottom:"0%"}} 
                >
                    {   
                        FacultieData.map(
                            (data, index) => {
                                return (

                                    <div key={index} className='SubjectImgAndName' style={{ marginRight: "13%",paddingLeft: (index==0)? "3%" : 0}}>
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