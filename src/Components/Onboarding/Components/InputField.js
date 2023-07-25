import React from 'react';
import '../../../CSS/Register.css'


const InputField = ({ inputRef, Que, variable }) => {
  const exp = `Enter your ${variable} here`;

  return (
    <div className='nameAskingSection'>
      <div className='nameQue'>{Que}</div>
      <input ref={inputRef} type="text" placeholder={exp} className='focused_input' />
    </div>
  );
};

export default InputField;