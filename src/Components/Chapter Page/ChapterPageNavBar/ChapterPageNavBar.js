import { memo } from 'react';
import CommonNavBar from '../../CommonNavBar';
import { useSelector } from 'react-redux';


const ChapterPageNavBar = ( ) => {

  console.log("ChapterPageNavBar")

  const learn = useSelector(state => state.learn)
  console.log('ChapterPageNavBar',learn)

  return (
      <div className='SubjectPageNavBar'>
        <CommonNavBar name={learn.display_name} />
      </div>
  );
};

export default memo(ChapterPageNavBar);