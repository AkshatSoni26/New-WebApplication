import React, { memo, useEffect, useRef, useState } from 'react';
import { Navbar } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi'
import { FRONTEND_URLS } from './Links/Config';
import { SearchWinNav } from './Functions/Services';



const CommonNavBar = ({ name, id }) => {

  const navigate = useNavigate()
  const [isSearch, setIsSearch] = useState(false)
  const inputRef = useRef(null); // Create a reference for the input element

  function PreviousPage() {
    if (id) {
      navigate(`/${id}`)
    }
    else {
      navigate(`/`)
    }
  }

 

  // useEffect(() => {
  //   if (isSearch) {
  //     inputRef.current.focus();
  //   }
  // }, [isSearch]);

  return (
    <div className='ChapterNav'>
    <div className='SubjectPageNavBar'style={{marginLeft:"0%"}}>
    <Navbar expand="lg" >

      <Container fluid>
        {/* {
        (!isSearch) ? */}
          <>
            <button className='subject' onClick={PreviousPage}>
              <Navbar.Brand >  {<AiOutlineArrowLeft />} {name}  </Navbar.Brand>
            </button>

            <button className='d-flex subject' onClick={() => { SearchWinNav(navigate) }}>
              <FiSearch size={30} color='black' />
            </button>
          </>
          {/* //  :
          // <div >
          //   <input  className='commonNavBarInput' />
          // </div> */}
         {/* }  */}
      </Container>

    </Navbar>
    </div>
    </div>
  );
};

export default memo(CommonNavBar);