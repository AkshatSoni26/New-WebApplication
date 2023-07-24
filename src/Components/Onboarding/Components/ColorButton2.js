import React, { useState } from 'react';


export default function ColorButton2({ tag_line, setExamId, id, className, color, borderColor }) {

    function test() {
        console.log('button clicked button clicked.', id)
        setExamId(id)
    }

    
  return (
    <button className='subject colorBoxButton' onClick={test}>
      <div  className='colorBox'  style={{ backgroundColor: color, borderColor: borderColor }}>
        <div className=''> {className} </div>
        <div className=''>{ tag_line }</div>
      </div>
    </button>
  );
}