import { FiHelpCircle, FiHome, FiUser } from "react-icons/fi";
import { PiStudentBold } from 'react-icons/pi'
import { GoBook } from 'react-icons/go'
import { BiMessageAltCheck } from 'react-icons/bi'


import logo from '../Images/logo.png'


//-------------------------- Login Data ------------------------------ // 

export const country_code = 91

export const testingNumber = '9414189611'

//------------------------- user Data ---------------------------------//
export let { full_name } = (localStorage.getItem('userData')) ? (JSON.parse(localStorage.getItem('userData')).user) : ''

 

//-------------------------- Home page subject portion line------------------------------ // 
export const slogen = 'Let\'s start your prepration here.'


//-------------------------- home page facltie portion line ------------------------------ // 
export const facultiePortionLine = 'Know Your Faculty'


//-------------------------- Chapter page side bar data ------------------------------ // 
export const chapterTable = ['Learn', 'Practise', 'Test', 'Revise']


//-------------------------- home page side bar data ------------------------------ // 


export const SideBarItem = [['Home', <FiHome />], ['My Account', <FiUser />], ['Courses', <GoBook />], ['Mentorship', <PiStudentBold />], ['Doubut Solve', <BiMessageAltCheck />], ["Help and Support", <FiHelpCircle />]]



//-------------------------- logo ------------------------------ // 
export const companyLogo = logo



//-------------------------- Misc ------------------------------ // 

export const DefaultThumbnails = {
    'video' : 'https://www.contentviewspro.com/wp-content/uploads/2017/07/default_image.png',
    'pdf' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/640px-PDF_file_icon.svg.png',
    'quiz' : 'https://www.shutterstock.com/shutterstock/photos/1506580442/display_1500/stock-vector-quiz-in-comic-pop-art-style-quiz-brainy-game-word-vector-illustration-design-1506580442.jpg'
}




