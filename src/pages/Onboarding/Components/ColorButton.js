import React, { useState } from 'react';

export default function ColorButton({targets,isName, className, color, borderColor, setAttemptYearList }) {


    function test() {
      console.log("ColorButton", targets)
      setAttemptYearList(targets)
    }

    
  return (
    <button className='subject colorBoxButton'onClick={test}>
      <div className='colorBox ' style={{ backgroundColor: color, borderColor: borderColor }}>
        {className}
      </div>
    </button>
  );
}