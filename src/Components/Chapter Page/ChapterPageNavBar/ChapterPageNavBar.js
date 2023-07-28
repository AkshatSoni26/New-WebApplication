import { memo } from 'react';
import CommonNavBar from '../../CommonNavBar';
import { useSelector } from 'react-redux';


const ChapterPageNavBar = ( ) => {

  console.log("ChapterPageNavBar")

  const learn = useSelector(state => state.learn)

  console.log('learn', learn)

  const currentUrl = window.location.href;
  const urlSegments = currentUrl.split('/');

  return (
      <div className='SubjectPageNavBar'style={{marginLeft:"0%"}}>
        <CommonNavBar name={learn.display_name} id={urlSegments[urlSegments.length-3]} />
      </div>
  );
};

export default memo(ChapterPageNavBar);