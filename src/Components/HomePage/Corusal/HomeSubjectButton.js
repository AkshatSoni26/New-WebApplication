import React from 'react';
import { BorderColors, Colors } from '../../../Constants/Constants';
import { useNavigate } from 'react-router-dom';



const HomeSubjectButton = ({ display_name, thumbnail, index, node_id, total_duration_in_sec, content_consumed_in_sec }) => {

    const navigate = useNavigate()

    const Progress = (content_consumed_in_sec / total_duration_in_sec) * 100

    console.log('Progress', Progress)

    function SubjectPage(node_id) {
        navigate(`/${node_id}`)
    }

    return (
        <div className='HomeSubjectButton subject Testing' onClick={() => SubjectPage(node_id)}
            style={{
                backgroundColor: Colors[index],
                marginLeft: '-2%'
            }}>

            <div className='HomeSubjectButtonImgSize'>
                <img className='HomeSubjectButtonImg' src={thumbnail} />
            </div>

            <div className='SubjectName'>{display_name}</div>

            <div className='SubjectProgress'>
                <div className='SubjectProgressPart' style={{
                    backgroundColor: BorderColors[index],
                    width: `${Progress}%`,
                }}>
                </div>
            </div>

            <div className='ProgressPart'>Progress: {Progress}%</div>
        </div>
    );
};

export default HomeSubjectButton;

