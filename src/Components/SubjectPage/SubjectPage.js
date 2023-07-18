import React, { useEffect } from 'react';
import {  useParams } from 'react-router-dom';
import SubjectPageNavBar from './Subject NavBar/SubjectPageNavBar';
import SubjectSideBar from './Subject SideBar/SubjectSideBar';
import '../../CSS/App.css'
import SubjectContent from './Suject Content/Subject_Content';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../State';
import { subjectPageData } from '../Functions/Services';

const SubjectPage = () => {

    console.log("SubjectPage")

    const subjectId = useParams().subject
    
    const dispatch = useDispatch()
    const { SubjectData } = bindActionCreators(actionCreators, dispatch)
    
    useEffect(
        () => {
            subjectPageData(SubjectData, subjectId)
        }, []
    )

    return (

        <div className=' subjectPageClass'>
            <div className='SideBar'>
                <SubjectSideBar />
            </div>

            <div className='NavBar'>
                <SubjectPageNavBar subjectId={subjectId} />

                <div className='Subject_Content'>
                    <SubjectContent subjectId={subjectId} />
                </div>

            </div>

        </div>
    );
};

export default SubjectPage;