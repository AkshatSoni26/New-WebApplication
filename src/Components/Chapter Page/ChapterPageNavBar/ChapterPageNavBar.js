import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { useEffect, useState, useSyncExternalStore } from 'react';



const ChapterPageNavBar = ({ chapterName, chapterPageId }) => {

  console.log("chapterName", chapterName)
  
  return (
    (!chapterName) ?
      <>Loading...</>
      :
      <div className='SubjectPageNavBar'>
      <Navbar expand="lg" >
        <Container fluid>
          <Navbar.Brand href={`/${chapterPageId[0]}`}> {<AiOutlineArrowLeft />} {chapterName}</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >

            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
  );
};

export default ChapterPageNavBar;