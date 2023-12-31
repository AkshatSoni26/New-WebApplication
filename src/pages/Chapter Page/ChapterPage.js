import React, { memo, useEffect, useState } from 'react';
import ChapterPageNavBar from './ChapterPageNavBar/ChapterPageNavBar';
import { useNavigate, useParams } from 'react-router-dom';
import ChapterPageSideBar from './ChapterPageSideBar/ChapterPageSideBar';
import ChapterContentPortion from './ChapterContentPortion/ChapterContentPortion';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../State';
import ChapterMainCom from './ChapterMainCom';
import ChapterPageSideBarResponsivePart from './ChapterPageSideBar/ChapterPageSideBarResponsivePart';
import { FRONTEND_URLS } from '../../Components/Links/Config';
import Scroller from '../../Components/SpinnerFun/Scroller';
// import Scroller from '../../Components/SpinnerFun/Scroller';


const ChapterPage = () => {

    console.log('ChapterPage')

    const chapter = useParams().chapter
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()
    const { LearnData } = bindActionCreators(actionCreators, dispatch)
    const access = localStorage.getItem('Access Key')

    const data = localStorage.getItem('data')

    const navigate = useNavigate()

    useEffect(
        () => {

            var data = null
            var userData = null

            try {
                userData = JSON.parse(localStorage.getItem('userData'))
            }
            catch (error) {
                console.log('err', error)
                navigate(FRONTEND_URLS.LOGIN_ROUTE)
            }

            try {
                data = JSON.parse(localStorage.getItem('data'))
            }
            catch (error) {
                console.log('err', error)
                navigate(-1)
            }

            if (data) {
                console.log(data)

                let isChapter = false
                for (let i = 0; i < data.length; i++) {
                    if (data[i].node_id == chapter) {

                        console.log('data[i].node_id', data[i].node_id)

                        LearnData({ 'content': data[i].content, 'display_name': data[i].display_name })
                        console.log('data[i]', data[i])
                        setLoading(false)
                        isChapter = true
                        break;
                    }
                }

                if (isChapter == false) {
                    navigate(`/${chapter}`)
                }
            }

        }, [data]
    )

    return (

        data ?

        <section className='mainHome'>

            <div className='ChapterNav '>
                <ChapterPageNavBar />
            </div>
                <div className='scrollView subjectPageScollPro' > 
                <ChapterMainCom />
                </div>
            
        </section>
        :
        <Scroller />
    );
};

export default memo(ChapterPage);



