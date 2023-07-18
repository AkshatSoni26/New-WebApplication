import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import SubjectPageNavBar from './Subject NavBar/SubjectPageNavBar';
import SubjectSideBar from './Subject SideBar/SubjectSideBar';
import '../../CSS/App.css'
import SubjectContent from './Suject Content/Subject_Content';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../State';
import { subjectPageData } from '../Functions/Services';
import { FRONTEND_URLS } from '../Links/Config';

const SubjectPage = () => {

    console.log("SubjectPage")

    const subjectId = useParams().subject
    console.log('subjectId', subjectId)

    const dispatch = useDispatch()
    const { SubjectData } = bindActionCreators(actionCreators, dispatch)


    const accessKey = localStorage.getItem('Access Key')
    const userData = JSON.parse(localStorage.getItem('userData'))
    const navigate = useNavigate()

    useEffect(
        () => {

            subjectPageData(SubjectData, subjectId)

            if (!accessKey) {
                navigate(FRONTEND_URLS.LOGIN_ROUTE)
            }

            if (!userData) {
                navigate(FRONTEND_URLS.LOGIN_ROUTE)
            }

        }, [accessKey, userData, subjectId]
    )




    return (

        (!userData)
            ?
            <>error </>
            :
            <div className=' subjectPageClass'>
                <div className='SideBar'>
                    <SubjectSideBar />
                </div>

                <div className='NavBar'>
                    {(subjectId) && <SubjectPageNavBar subjectId={subjectId} />}

                    <div className='Subject_Content'>
                        {(subjectId) && <SubjectContent subjectId={subjectId} />}
                    </div>
                </div>
            </div>
    );
};

export default SubjectPage;