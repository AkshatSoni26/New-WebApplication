import React, { useState } from 'react';


export default function ColorButton2({ thumbnail,tag_line, setExamId, id, className, color, borderColor }) {

    function test() {
        console.log('button clicked button clicked.', id)
        setExamId(id)
    }

    
  return (
    <button className='subject colorBoxButton' onClick={test}>
      <div  className='colorBox'  style={{ backgroundColor: color, borderColor: borderColor }}>
        <div>
          <img  className='thumbnailBox' src={thumbnail.slice(0,thumbnail.search(".png?")+4)} />
        </div>
        <div className=''> {className} </div>
        <div className='targetBut'>{ tag_line }</div>
      </div>
    </button>
  );
}