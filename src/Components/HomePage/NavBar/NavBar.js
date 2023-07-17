import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {

    const courses = JSON.parse(localStorage.getItem('userData')).enrollments
    console.log('courses', courses)


    function currCourse(course) {
        if (course.is_current === true) {
            return course
        }
    }

    const current_course = courses.find(currCourse).course_name

    return (
        (!courses) ?
            <>Loading....</>
            :
            <div className='HomeNavBar'> 
                <Navbar expand="lg" >
                    <Container fluid>
                        <Navbar.Brand >

                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                                <Nav
                                    className="me-auto my-2 my-lg-0"
                                    style={{ maxHeight: '100px' }}
                                    navbarScroll
                                >
                                    <NavDropdown title={`${current_course}`} id="navbarScrollingDropdown">
                                        {
                                            courses.map(
                                                (course, index) => {
                                                    return (
                                                        !course.is_current ?
                                                            <NavDropdown.Item key={index}>{course.course_name}</NavDropdown.Item >
                                                            :
                                                            null
                                                    )
                                                }
                                            )
                                        }
                                    </NavDropdown>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar.Brand>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Container>
                </Navbar>
            </div>
    );
}

export default NavBar;