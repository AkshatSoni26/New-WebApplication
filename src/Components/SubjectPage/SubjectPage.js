import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import SubjectPageNavBar from './Subject NavBar/SubjectPageNavBar';
import SideBar from '../HomePage/SiderBar/SideBar';
import SubjectSideBar from './Subject SideBar/SubjectSideBar';
import '../../CSS/App.css'
import SubjectContent from './Suject Content/Subject_Content';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../State';
import { subject_data_Api } from '../../Constants/Apis';
import ErrorPages from '../ErrorPages/ErrorPages';
import axios from 'axios';

const SubjectPage = () => {

    const dispatch = useDispatch()
    const {SubjectData} = bindActionCreators(actionCreators, dispatch)

    const location = useLocation()

    console.log('location under the SubjectPage',typeof Number((location.pathname).slice(1,)))

    useEffect(
        () => {
            console.log('under the uneEffect')
            axios.post(subject_data_Api,
                {
                    "node_id": Number((location.pathname).slice(1,))
                }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('Access Key')
                }
            }
            ).then(
                (response) => {
                    console.log('subject response', response.data.data.node_content_tree)
                    localStorage.setItem('data', JSON.stringify(response.data.data.node_content_tree))
                    SubjectData(response.data.data.node_content_tree)
                }
            ).catch(
                (error) => {
                    console.log('error response', error.response);
                }
            );
        },[]
    )


    return (

        <div className=' subjectPageClass'>
            <div className='SideBar'>
                <SubjectSideBar  />
            </div>

            <div className='NavBar'>
                <SubjectPageNavBar subjectId={location.pathname.slice(1,)} />

                <div className='Subject_Content'>
                    <SubjectContent subjectId={location.pathname.slice(1,)}/>
                </div>

            </div>

        </div>
    );
};

export default SubjectPage;