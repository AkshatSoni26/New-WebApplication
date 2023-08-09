import React, { useContext, useEffect, useState } from 'react';
import { DefaultThumbnails, slogen } from '../../../Constants/Constants';
import '../../../CSS/App.css'
import { useNavigate } from 'react-router-dom';
import SpinnerFun from '../../SpinnerFun/SpinnerFun';
import HomeSubjectButton from './HomeSubjectButton';


const SubjectCaural = () => {

    console.log('SubjectCaural')
    const navigate = useNavigate()
    const SubjectData = JSON.parse(localStorage.getItem('userData')).subjects


    

    return (
        (!SubjectData)
            ?
            <SpinnerFun />
            :
            <div>

                <div className="startingPhrase ChapLec" style={{ marginLeft: "1%" }}>{slogen}</div>

                {/* <div className='SubjectNames'> */}
                {/* <div className="Subjectcontainer"> */}

                {/* <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" 
                    // style={{marginLeft:"4%"}}
                    > */}

                <div className='container'>
                    <div className='row'>
                        {
                            SubjectData.map(
                                (data, index) => {
                                    return (
                                        // <div className="col">

                                        <div key={index}  className=' col-6 col-sm-6 col-md-6 col-lg-4 my-3 Testing' style={{ marginRight: "0%"}} >
                                            {/* <div className='innerSuvjectCaursalDiv' >
                                                        <img className='subjectImages' src={data.thumbnail ? data.thumbnail : DefaultThumbnails.video} />
                                                        <div className='LectureName'>{data.display_name}</div>
                                                    </div> */}
                                        <HomeSubjectButton index={index} node_id={data.node_id} display_name={data.display_name} thumbnail={data.thumbnail ? data.thumbnail : DefaultThumbnails.video} />
                                        </div>

                                        // </div>

                                    )
                                }
                            )
                        }
                    </div>
                </div>
            </div>
    );
};

export default SubjectCaural;