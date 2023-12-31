import React, { useEffect, useRef } from 'react'
import { Container, Navbar } from 'react-bootstrap';
import { FiSearch } from 'react-icons/fi'
import { LuArrowLeft } from 'react-icons/lu';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../State';
import { SearchButton } from '../../../Functions/Services';
import { SearchPlacholder } from '../../../Constants/Constants';

const SearchNavBar = ({ setData, setErr, setSearhed }) => {

    const navigate = useNavigate()

    const search_string = useParams().search_string
    console.log('parmas', search_string)

    const backlink = useSelector(state => state.link)

    console.log("backlink search", backlink)

    const dispatch = useDispatch()
    const { LearnData } = bindActionCreators(actionCreators, dispatch)
    const inputRef = useRef()

    useEffect(() => {
        inputRef.current.focus();
        if (search_string) {
            SearchButton(inputRef, setData, setErr, navigate, LearnData, setSearhed)
        }
    }, [search_string]);

    return (
        <div className='HomeNavBar' style={{ marginLeft: "0%" }}>
            <Navbar expand="lg" >
                <Container >

                    <span className='NavbarBrandHom'  onClick={() => { navigate(backlink) }}>
                        <LuArrowLeft size={30} />
                    </span>

                    <div className='searchBar'>
                        <input placeholder={SearchPlacholder} className='serachInput NoResultText SearchInputBox' style={{ textAlign: 'left' }} ref={inputRef} tabIndex="1" />
                    </div>

                    <div className='HomeNavContanier'>
                        <button className=' subject searchButton' onClick={() => {
                            console.log('phone', inputRef.current.value)
                            SearchButton(inputRef, setData, setErr, navigate, LearnData, setSearhed)
                        }}><FiSearch size={30} color='black' /></button>
                    </div>

                </Container>

            </Navbar>
        </div>
    );
};

export default SearchNavBar;