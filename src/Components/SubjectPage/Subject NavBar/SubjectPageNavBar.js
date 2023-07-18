import { useEffect, useState } from 'react';
import { FRONTEND_URLS } from '../../Links/Config';
import CommonNavBar from '../../CommonNavBar';


const SubjectPageNavBar = ({ subjectId }) => {

  const [subjectName, setSubjectName] = useState('')

  const subjectData =  JSON.parse(localStorage.getItem('userData')).subjects 



  useEffect(
    () => {
      for (let i = 0; i <= subjectData.length; i++) {
        console.log('under the if condition', subjectData[i].node_id, subjectId)
        if (Number(subjectData[i].node_id) == Number(subjectId)) {
          setSubjectName(subjectData[i].display_name)
          break;
        }
      }
    }, []
  )

  return (
    (!subjectName) ?
      <>Loading...</>
      :
      <div className='SubjectPageNavBar'>
        <CommonNavBar url={FRONTEND_URLS.HOME_ROUTE} name={subjectName} />
      </div>
  );
};

export default SubjectPageNavBar;