import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import SubjectPageNavBar from './Subject NavBar/SubjectPageNavBar';
import SubjectSideBar from './Subject SideBar/SubjectSideBar';
import '../../assets/CSS/App.css'
import SubjectContent from './Suject Content/Subject_Content';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../State';
import { OverlayOff, OverlayOn, subjectPageData } from '../../Functions/Services';
import { FRONTEND_URLS } from '../../Components/Links/Config';
import ChapterPageSideBar from '../Chapter Page/ChapterPageSideBar/ChapterPageSideBar';
import ChapterContentPortion from '../Chapter Page/ChapterContentPortion/ChapterContentPortion';
import ChapterPageNavBar from '../Chapter Page/ChapterPageNavBar/ChapterPageNavBar';
import TabSubjectSideBar from './Subject SideBar/TabSubjectSideBar';
import SpinnerFun from '../../Components/SpinnerFun/SpinnerFun';



const SubjectPage = () => {

    console.log("SubjectPage")

    const navigate = useNavigate()
    // console.log('subjectId', useParams())
    const { subject } = useParams()
    const subjectId = subject

    const dispatch = useDispatch()
    const { SubjectData } = bindActionCreators(actionCreators, dispatch)
    const [SubData, setSubjData] = useState([])

    // const content = useSelector(state => state.content)


    const [TabIndexBut, setTabIndexBut] = useState(false)
    const accessKey = localStorage.getItem('Access Key')
    const userData = localStorage.getItem('userData')


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

console.log("SubData", SubData.length)

    return (
        (SubData.length == 0)
            ?
            <SpinnerFun />
            :
            <section className='mainHome'>

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

                            <div className='ChapterCon '>
                                {(SubData?.content) && <ChapterContentPortion chapterContent={SubData.content} />}
                            </div>

                        </div>

                    </div>
                }


                {
                    (SubData.length > 1) &&
                    <>
                        <SubjectSideBar />
                        
                        <div className='subjectNavBar'>
                            <div className='subjectOverlay ChapterNav subectNav'>
                                {(subjectId) && <SubjectPageNavBar subjectId={subjectId} />}
                            </div>

                            {/* <div className='HomeMainContent '> */}
                            <section className='scrollView SubjectScrollProbl' style={{overflowY:'scroll', }}>
                                {(subjectId) && <SubjectContent subjectId={subjectId} setTabIndexBut={setTabIndexBut} />}
                            </section>

                            {
                                !TabIndexBut
                                    ?
                                    <div className='subjectFlexIndex'>
                                        <button className='subject' onClick={() => { setTabIndexBut(true);
                                             OverlayOn() }}
                                             >
                                            <div className='FlotingSubjectIndex'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-book-open"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                                                &nbsp;  Index
                                            </div>
                                        </button>
                                    </div>
                                    :
                                    <div id="SubjectMain ">
                                        <TabSubjectSideBar setTabIndexBut={setTabIndexBut} />
                                    </div>
                            }

                        </div>

                    </>
                }
            </section>
    );
};

export default SubjectPage;

    