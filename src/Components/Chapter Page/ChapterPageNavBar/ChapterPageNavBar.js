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