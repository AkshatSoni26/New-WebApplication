import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { BACKEND_URLS, FRONTEND_URLS } from '../Links/Config';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../State';
import ChapterPageSideBar from '../Chapter Page/ChapterPageSideBar/ChapterPageSideBar';
import VideoPlayer from '../Video player/VideoPLayer';
import { useNavigate } from 'react-router-dom';
import ChapterMainCom from '../Chapter Page/ChapterMainCom';
import { Container, Navbar } from 'react-bootstrap';

const Search = () => {

    const inputRef = useRef()

    const [data, setData] = useState()
    const navigate = useNavigate()

    const dispatch = useDispatch()
    const { LearnData } = bindActionCreators(actionCreators, dispatch)

    function SearchButton() {
        console.log(inputRef)

        const access = window.atob(localStorage.getItem('Access Key'))

        if (access) {

            axios.post(
                BACKEND_URLS.SEARCH_API,
                { subject: 0, chapter: 0, search_str: inputRef.current.value },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + access,
                    },
                }
            ).then(
                (response) => {
                    console.log(response.data.data.search_results)
                    setData(response.data.data.search_results)
                    LearnData({ 'content': response.data.data.search_results })
                    let data = response.data.data.search_results
                    navigate(`${FRONTEND_URLS.SEARCH_ROUTE}/${window.btoa(data.learn[0].content_data.content_info.video_id)}`)
                }
            ).catch(
                (err) => {
                    console.log('err', err)
                }
            )
        }
    }


    return (
        <>
        <div className='ChapterNav'>
            <div className='SubjectPageNavBar'>
            <Navbar expand="lg" >

                <Container fluid>
                    
                    <div className='searchBar'>
                        
                        <div>
                            <input ref={inputRef} />
                        </div>

                        <button className='searchButton' onClick={SearchButton}>search</button>

                    </div>

                </Container>

            </Navbar>
            </div>
            </div>

            <div>

                {data && <ChapterMainCom />}

            </div>
        </>
    );
};

export default Search;