import { FiHelpCircle, FiHome, FiUser } from "react-icons/fi";
import { PiStudentBold } from 'react-icons/pi'
import { GoBook } from 'react-icons/go'
import { BiMessageAltCheck } from 'react-icons/bi'


import logo from '../Images/logo.png'
import HomeComp from "../Components/Manu Bar/HomeComp";
import MyAccount from "../Components/Manu Bar/MyAccount";
import CommingSoon from "../Components/Manu Bar/CommingSoon";
import { FRONTEND_URLS } from "../Components/Links/Config";


//-------------------------- Login Data ------------------------------ // 

export const country_code = 91

export const testingNumber = '9414189611'

export const OtpTimer = 30


//-------------------------carusal login interval time ---------------------------------//

export const interval = 1500


//------------------------- user Data ---------------------------------//
export let { full_name } = (localStorage.getItem('userData')) ? (JSON.parse(localStorage.getItem('userData')).user) : ''

 

//-------------------------- Home page subject portion line------------------------------ // 
export const slogen = 'Let\'s start your prepration here.'


//-------------------------- home page facltie portion line ------------------------------ // 
export const facultiePortionLine = 'Know Your Faculty'


//-------------------------- Chapter page side bar data ------------------------------ // 
export const chapterTable = ['Learn', 'Practise', 'Test', 'Revise']


//-------------------------- home page side bar data ------------------------------ // 


export const SideBarItem = [['Home', <FiHome />, `${FRONTEND_URLS.HOME_ROUTE}`], ['My Account', <FiUser />, `${FRONTEND_URLS.MY_ACCOUNT}`], ['Courses', <GoBook />, `${FRONTEND_URLS.COURSES}`], ['Mentorship', <PiStudentBold />, `${FRONTEND_URLS.MENTORSHIP}`], ['Doubut Solve', <BiMessageAltCheck />, `${FRONTEND_URLS.DOUBUT_SOLVE}`], ["Help and Support", <FiHelpCircle />, `${FRONTEND_URLS.HELP_AND_SUPPORT}`]]


//-------------------------- logo ------------------------------ // 
export const companyLogo = logo


//-------------------------- Colors ------------------------------ // 


export const Colors = ['#FFF3DC', '#E5F8FF', '#ECE9FF', '#FFEAF4', '#FFE8DC', '#E1F9E3']
export const BorderColors = ['#FFB023', '#3090E8', '#5F46E3', '#C91E5C', '#D65E25', '#008444']


//-------------------------- Misc ------------------------------ // 

export const DefaultThumbnails = {
    'video' : 'https://www.contentviewspro.com/wp-content/uploads/2017/07/default_image.png',
    'pdf' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/640px-PDF_file_icon.svg.png',
    'quiz' : 'https://www.shutterstock.com/shutterstock/photos/1506580442/display_1500/stock-vector-quiz-in-comic-pop-art-style-quiz-brainy-game-word-vector-illustration-design-1506580442.jpg'
}



//-------------------------- Misc ------------------------------ // 
const varSize =20
export const alert_circle = `<svg xmlns="http://www.w3.org/2000/svg" width=${varSize} height=${varSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-alert-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`

export const editBut = <svg xmlns="http://www.w3.org/2000/svg" width={varSize} height={varSize} viewBox="0 0 24 24" fill="none" stroke="#5F46E3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-edit-2"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>

//----------------------------------------------------------------- // 
export const NoResult = 'Content for this section is not ready at the moment. Please check later.'
export const SearchText = 'Search for concepts, videos, sheets, notes, etc'
export const SearchPlacholder = 'Search here'



export const MenuBarIcon = {'size':30, 'color':'#333A47' }