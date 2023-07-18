import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AiOutlineArrowLeft } from 'react-icons/ai'
import CommonNavBar from '../../CommonNavBar';


const ChapterPageNavBar = ({ chapterName, subjectPageId }) => {

  console.log("ChapterPageNavBar")

  return (
    (!chapterName) ?
      <>Loading...</>
      :
      <div className='SubjectPageNavBar'>
        <CommonNavBar url={`/${subjectPageId}`} name={chapterName} />
      </div>
  );
};

export default ChapterPageNavBar;