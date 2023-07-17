import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { FRONTEND_URLS } from '../../Links/Config';


const SubjectPageNavBar = ({ subjectId }) => {

  const [subjectName, setSubjectName] = useState('')

  const subjectData = JSON.parse(localStorage.getItem('userData')).subjects

  useEffect(
    () => {
      for (let i = 0; i <= subjectData.length; i++) {
        console.log('under the if condition', subjectData[i].node_id, subjectId)
        if (Number(subjectData[i].node_id) == Number(subjectId)) {
          setSubjectName(subjectData[i].display_name)
          break;
        }
      }
    }, []
  )

  return (
    (!subjectName) ?
      <>Loading...</>
      :
      <div className='SubjectPageNavBar'>
        <Navbar expand="lg" >
          <Container fluid>
            <Navbar.Brand href={FRONTEND_URLS.HOME_ROUTE}>  {<AiOutlineArrowLeft />} {subjectName}  </Navbar.Brand>
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

export default SubjectPageNavBar;