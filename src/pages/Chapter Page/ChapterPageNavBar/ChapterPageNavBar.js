import { memo } from 'react';
import CommonNavBar from '../../../Components/CommonNavBar';
import { useSelector } from 'react-redux';


const ChapterPageNavBar = () => {

  console.log("ChapterPageNavBar")

  const learn = useSelector(state => state.learn)

  console.log('learnChapterPageNavBar', learn)

  const currentUrl = window.location.href;
  const urlSegments = currentUrl.split('/');

  return (
    <CommonNavBar name={learn.display_name} id={urlSegments[urlSegments.length - 3]} />
  );
};

export default memo(ChapterPageNavBar);