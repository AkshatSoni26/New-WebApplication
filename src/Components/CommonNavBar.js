import React, { memo, useEffect, useRef, useState } from 'react';
import { Navbar } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { LuArrowLeft } from 'react-icons/lu'
import { useNavigate } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi'
import { SearchWinNav } from '../Functions/Services';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../State';



const CommonNavBar = ({ name, id }) => {

  const navigate = useNavigate()
  const inputRef = useRef(null); // Create a reference for the input element

  const dispatch = useDispatch()
  const { LinkTrial } = bindActionCreators(actionCreators, dispatch)

  function PreviousPage() {
    if (id) {
      navigate(`/${id}`)
    }
    else {
      navigate(`/`)
    }
  }

  const backLink = (window.location.href).split("http://localhost:3000")[1]
  LinkTrial(backLink)


  return (
    <div className='HomeNavBar commonBar'>
      <Navbar expand="lg" >

        <Container  className=''>

            <Navbar.Brand className='NavbarBrandHome' >

              <div className='subject commonNavBarSub' onClick={PreviousPage}>
                <div style={{marginRight:'16px'}}><LuArrowLeft /></div>
                
                <div>{name}</div>
              
              </div>

            </Navbar.Brand>
            

            <div className='subject HomeNavContanier' onClick={() => { SearchWinNav(navigate, backLink) }}>
              <FiSearch size={30} color='black' />
            </div>
          
        </Container>
      </Navbar>
    </div>
  );
};

export default memo(CommonNavBar);