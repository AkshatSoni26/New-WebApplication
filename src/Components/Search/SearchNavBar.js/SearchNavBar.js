import React, { useEffect, useRef } from 'react'
import { Container, Navbar } from 'react-bootstrap';
import { FiSearch } from 'react-icons/fi'
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../State';
import { SearchButton } from '../../Functions/Services';
import { SearchPlacholder } from '../../../Constants/Constants';

const SearchNavBar = ( {setData, setErr, setSearhed } ) => {

    const navigate = useNavigate()

    const search_string = useParams().search_string
    console.log('parmas', search_string)

    const backlink = useSelector(state => state.link)

    const dispatch = useDispatch()
    const { LearnData } = bindActionCreators(actionCreators, dispatch)
    const inputRef = useRef(  )

    useEffect(() => {
        inputRef.current.focus();
        if (search_string){
            SearchButton(inputRef, setData, setErr, navigate, LearnData, setSearhed)
        }
      }, [search_string]);

    return (
        <div className='ChapterNav'>
            <div className=''>
                <Navbar expand="lg" >
                    <Container fluid>
                        <button className=' subject' onClick={() => {
                            navigate(backlink)
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