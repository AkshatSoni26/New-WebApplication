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

                {/* <div className='SubjectNames'> */}
                <div class="container">

                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" style={{marginLeft:"4%"}}>
                        {
                            SubjectData.map(
                                (data, index) => {
                                    return (
                                        <div class="col">

                                                <button key={index} onClick={() => SubjectPage(data.node_id)} className='subject col-md-4 col-sm-6 my-3 '>
                                                    <div
                                                    className='innerSuvjectCaursalDiv'
                                                    >
                                                        <img className='subjectImages' src={data.thumbnail} />
                                                        <div className='LectureName'>{data.display_name}</div>
                                                    </div>
                                                </button>

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