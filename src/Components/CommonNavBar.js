import React, { memo } from 'react';
import { Navbar } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';



const CommonNavBar = ({  name, id }) => {

  const navigate = useNavigate()

  function PreviousPage() {
    if (id) {
      navigate(`/${id}`)
    }
    else{
      navigate(`/`)
    }
  }

  return (
    <Navbar expand="lg" >
      <Container fluid>
        <button className='subject' onClick={PreviousPage}>
        <Navbar.Brand >  {<AiOutlineArrowLeft />} {name}  </Navbar.Brand>
        </button>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        {/* </Navbar.Collapse> */}
      </Container>
    </Navbar>
  );
};

export default memo(CommonNavBar);