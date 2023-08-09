import React from 'react';
import { BorderColors, Colors } from '../../../Constants/Constants';
import { useNavigate } from 'react-router-dom';

const HomeSubjectButton = ({display_name, thumbnail, index, node_id}) => {

    const navigate = useNavigate()

    function SubjectPage(node_id) {
        navigate(`/${node_id}`)
    }

    return (
        <div className='HomeSubjectButton subject Testing ' onClick={() => SubjectPage(node_id)} style={{ backgroundColor: Colors[index], borderColor: BorderColors[index] }}>
            <img className='HomeSubjectButtonImg' src={thumbnail} />
            <div className='SubjectName'>{display_name}</div>
            <div className='ProgressPart'>Progress: 0%</div>
        </div>
    );
};

export default HomeSubjectButton;

