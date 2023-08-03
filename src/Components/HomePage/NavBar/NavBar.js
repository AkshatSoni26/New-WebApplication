import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CourseSwitcher, SearchWinNav, currCourse } from '../../Functions/Services';
import { useNavigate } from 'react-router-dom';
import SpinnerFun from '../../SpinnerFun/SpinnerFun';
import { memo } from 'react';
import { FiSearch } from 'react-icons/fi'




function NavBar() {

    const courses = JSON.parse(localStorage.getItem('userData')).enrollments
    console.log('courses', courses)

    const current_course = courses.find(currCourse).course_name
    const navigate = useNavigate()

    const backLink = '/'


    return (
        (!courses) ?
            <SpinnerFun />
            :
            <div className='HomeNavBar'>
                <Navbar expand="lg" >
                    <Container className='' >
                        <Navbar.Brand >

                            <NavDropdown title={`${current_course}`} id="navbarScrollingDropdown">
                                {
                                    courses.map(
                                        (course, index) => {
                                            return (
                                                !course.is_current ?
                                                    <NavDropdown.Item
                                                        onClick={() => CourseSwitcher(course.phase_id, course.subcourses[0].id, navigate)}

                                                        key={index}>

                                                        {course.course_name}

                                                    </NavDropdown.Item >
                                                    :
                                                    null
                                            )
                                        }
                                    )
                                }
                            </NavDropdown>

                        </Navbar.Brand>

                        <button className='subject HomeNavContanier' onClick={() => { SearchWinNav(navigate) }}>
                            <FiSearch size={30} color='black' />
                        </button>


                    </Container>
                </Navbar>
            </div>
    );
}

export default memo(NavBar);