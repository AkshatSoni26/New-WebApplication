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
        <div>

            <div className="startingPhrase ChapLec" style={{ marginLeft: "1%" }}>{slogen}</div>
            <div className='container'>
                <div className='row'>
                    {
                        SubjectData.map(
                            (data, index) => {
                                return (
                                        <div key={index} className=' col-6 col-sm-6 col-md-6 col-lg-4 my-3 Testing' style={{ marginRight: "0%" }} >
                                        <HomeSubjectButton index={index} node_id={data.node_id} display_name={data.display_name} thumbnail={data.thumbnail ? data.thumbnail : DefaultThumbnails.video} />
                                    </div>
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