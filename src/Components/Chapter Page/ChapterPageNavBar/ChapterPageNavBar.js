import { memo } from 'react';
import CommonNavBar from '../../CommonNavBar';
import { useSelector } from 'react-redux';


const ChapterPageNavBar = ( ) => {

  console.log("ChapterPageNavBar")

  const learn = useSelector(state => state.learn)
  console.log('ChapterPageNavBar',learn)

  const currentUrl = window.location.href;

// Extract the segments from the URL
const urlSegments = currentUrl.split('/');

console.log('urlSegments',urlSegments)


  return (
      <div className='SubjectPageNavBar'>
        <CommonNavBar name={learn.display_name} id={urlSegments[urlSegments.length-3]} />
      </div>
  );
};

export default memo(ChapterPageNavBar);