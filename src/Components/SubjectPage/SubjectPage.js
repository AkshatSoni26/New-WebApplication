import React, { useEffect, useState } from 'react';
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
import ChapterPageSideBar from '../Chapter Page/ChapterPageSideBar/ChapterPageSideBar';
import ChapterContentPortion from '../Chapter Page/ChapterContentPortion/ChapterContentPortion';
import ChapterPageNavBar from '../Chapter Page/ChapterPageNavBar/ChapterPageNavBar';
import SpinnerFun from '../SpinnerFun/SpinnerFun';



const SubjectPage = () => {

    console.log("SubjectPage")

    console.log('subjectId', useParams())
    const { subject } = useParams()
    const subjectId = subject

    const dispatch = useDispatch()
    const { SubjectData } = bindActionCreators(actionCreators, dispatch)
    const [SubData, setSubjData] = useState()

    const accessKey = localStorage.getItem('Access Key')
    const userData = localStorage.getItem('userData')
    const navigate = useNavigate()

    useEffect(
        () => {

            subjectPageData(SubjectData, subjectId, setSubjData, navigate)

            var subjectData = null
            try {
                var subjectData = JSON.parse(userData).subjects
                let isChapter = false
                for (let i = 0; i < subjectData.length; i++) {
                    if (subjectData[i].node_id == subjectId) {
                        isChapter = true
                        break;
                    }
                }
                if (isChapter == false) {
                    navigate(`/${subjectId}`)
                }
            }
            catch (err) {
                console.log('err', err)
                // localStorage.clear()
                navigate(FRONTEND_URLS.LOGIN_ROUTE)
            }
            !accessKey && navigate(FRONTEND_URLS.LOGIN_ROUTE)
        }, []
    )

    return (
        (!SubData)
            ?
            <SpinnerFun />
            :
            <section className='mainHome'>
                <div className='home'>

                    {
                        (SubData?.node_type == "COLLECTION") &&

                        <div>

                            <div className='ChapterNav'>
                                <ChapterPageNavBar chapterName={SubData.display_name} subjectPageId={''} />
                            </div>

                            <div className='contentSep'>

                                <div className='ChaptrSide'>
                                    {(SubData?.content) && <ChapterPageSideBar chapterContent={SubData.content} />}
                                </div>

                                <div className='ChapterCon'>
                                    {(SubData?.content) && <ChapterContentPortion chapterContent={SubData.content} />}
                                </div>

                            </div>

                        </div>
                    }


                    {
                        (SubData.length > 1) &&
                        <>
                            <div className='SideBar'>
                                <SubjectSideBar />
                            </div>

                            <div className='NavBar'>

                                {(subjectId) && <SubjectPageNavBar subjectId={subjectId} />}

                                <div className='HomeMainContent '>
                                    <section >
                                        {/* <div className='SubjectCaural'> */}
                                            {(subjectId) && <SubjectContent subjectId={subjectId} />}
                                        {/* </div> */}
                                    </section>
                                </div>

                            </div>

                        </>
                    }
                </div>
            </section>
    );
};

export default SubjectPage;