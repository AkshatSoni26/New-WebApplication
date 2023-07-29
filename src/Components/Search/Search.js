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
import { SearchButton } from '../Functions/Services';

const Search = () => {

    const inputRef = useRef()
    const [data, setData] = useState()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { LearnData } = bindActionCreators(actionCreators, dispatch)

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

                                <button className='searchButton' onClick={() => {
                                    SearchButton(inputRef, setData, navigate, LearnData)
                                }}>search</button>

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