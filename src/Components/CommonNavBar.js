import React from 'react';
import { Navbar } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import { AiOutlineArrowLeft } from 'react-icons/ai'



const CommonNavBar = ({ url, name }) => {
  return (
    <Navbar expand="lg" >
      <Container fluid>
        <Navbar.Brand href={url}>  {<AiOutlineArrowLeft />} {name}  </Navbar.Brand>

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

export default CommonNavBar;