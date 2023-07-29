import React, { useContext, useEffect, useState } from 'react';
import { slogen } from '../../../Constants/Constants';
import '../../../CSS/App.css'
import { useNavigate } from 'react-router-dom';
import SpinnerFun from '../../SpinnerFun/SpinnerFun';


const SubjectCaural = () => {

    console.log('SubjectCaural')
    const navigate = useNavigate()
    const SubjectData = JSON.parse(localStorage.getItem('userData')).subjects


    function SubjectPage(node_id) {
        navigate(`/${node_id}`)
    }

    return (
        (!SubjectData)
            ?
            <SpinnerFun />
            :
            <div>
                <div className="startingPhrase ChapLec">{slogen}</div>

                <div className='SubjectNames'>
                    <div className='container' >
                        <div className='row'>
                            {
                                SubjectData.map(
                                    (data, index) => {
                                        return (
                                            <button key={index} onClick={() => SubjectPage(data.node_id)} className='subject col-md-4 col-sm-6 my-3 '>
                                                <img className=' subjectImages' src={data.thumbnail} />
                                                <div className='LectureName HomePageSubject'>{data.display_name}</div>
                                            </button>
                                        )
                                    }
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default SubjectCaural;