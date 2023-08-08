import { useEffect, useState } from 'react';
import { FRONTEND_URLS } from '../../Links/Config';
import CommonNavBar from '../../CommonNavBar';
import SpinnerFun from '../../SpinnerFun/SpinnerFun';

const SubjectPageNavBar = ({ subjectId }) => {

  console.log('SubjectPageNavBar', SubjectPageNavBar)

  const [subjectName, setSubjectName] = useState('');
  const subjectData = JSON.parse(localStorage.getItem('userData'))?.subjects;


  useEffect(() => {
    if (subjectData && subjectData.length > 0) {
      for (let i = 0; i < subjectData.length; i++) {
        console.log('under the if condition', subjectData[i].node_id, subjectId);
        if (Number(subjectData[i].node_id) === Number(subjectId)) {

          setSubjectName(subjectData[i].display_name);
          break;
        }
      }
    }
  }, []);

  return (

    !subjectName ?

      <SpinnerFun />
      :
      <CommonNavBar name={subjectName} />

  );
};

export default SubjectPageNavBar;
