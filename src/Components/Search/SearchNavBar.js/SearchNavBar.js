import React, { useEffect, useRef } from 'react'
import { Container, Navbar } from 'react-bootstrap';
import { FiSearch } from 'react-icons/fi'
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../State';
import { SearchButton } from '../../Functions/Services';
import { SearchPlacholder } from '../../../Constants/Constants';

const SearchNavBar = ( {setData, setErr, setSearhed } ) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { LearnData } = bindActionCreators(actionCreators, dispatch)
    const inputRef = useRef()

    useEffect(() => {
        inputRef.current.focus();
      }, []);

    return (
        <div className='ChapterNav'>
            <div className=''>
                <Navbar expand="lg" >
                    <Container fluid>
                        <button className=' subject' onClick={() => {
                            navigate(-1)
                        }}>
                            {<AiOutlineArrowLeft size={30} />}
                        </button>
                        <div className='searchBar'>
                            <div>
                                <input placeholder={SearchPlacholder} className='serachInput NoResultText' style={{textAlign:'left'}} ref={inputRef} tabIndex="1" />
                            </div>

                            <button className=' subject searchButton' onClick={() => {
                                SearchButton(inputRef, setData, setErr, navigate, LearnData, setSearhed)
                            }}><FiSearch size={30} color='black' /></button>

                        </div>

                    </Container>

                </Navbar>
            </div>
        </div>
    );
};

export default SearchNavBar;