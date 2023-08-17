import React from 'react';
import { DefaultThumbnails, slogen } from '../../../Constants/Constants';
import '../../../assets/CSS/App.css'
import { useNavigate } from 'react-router-dom';
// import SpinnerFun from '../../SpinnerFun/SpinnerFun';
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
                                        <div key={index} className='Testing col-6 col-sm-6 col-md-6 col-lg-4 my-2 '>
                                        <HomeSubjectButton index={index} 
                                        node_id={data.node_id} 
                                        display_name={data.display_name} 
                                        content_consumed_in_sec={data.content_consumed_in_sec}
                                        total_duration_in_sec = {data.total_duration_in_sec}
                                        thumbnail={data.thumbnail ? data.thumbnail : DefaultThumbnails.video} />
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