import React from 'react';
import '../../../CSS/Register.css'


const InputField = ({ inputRef, Que, variable, messSec, Question }) => {
  const exp = `Enter your ${variable} here`;

  return (
    <div className='nameAskingSection'>
      {Que && <div className='nameQue'>{Que}</div>}
      {messSec && <div className='messageSec'>{messSec}</div>}
      {Question && <div className='Que'>{Question}</div>}
      <div className='CountryAndPhoneNumber' >
        <input ref={inputRef} type="text" placeholder={exp} className='focused_input' />
      </div>
    </div>
  );
};

export default InputField;