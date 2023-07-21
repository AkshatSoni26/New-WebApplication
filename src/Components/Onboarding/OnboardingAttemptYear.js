import React from 'react';
import OnBordText from './Components/OnBordText';
import Imag from './Components/Imag';
import OptionChooseText from './Components/OptionChooseText';

const OnboardingAttemptYear = ({ isName }) => {

    const color = '#FFF3DC'
    const borderColor = '#FFB023'

    const CLASSES = ['8th', '9th', '10th', '11th', '12th', '12th pass']

    const Colors = ['#FFF3DC', '#E5F8FF', '#ECE9FF', '#FFEAF4', '#FFE8DC', '#E1F9E3']
    const BorderColors = ['#FFB023', '#3090E8', '#5F46E3', '#C91E5C', '#D65E25', '#008444']

    

    const classElements = CLASSES.map((className, index) => {
        const color = Colors[index];
        const borderColor = BorderColors[index];
      
        // Set the CSS variables dynamically for each class element
        document.documentElement.style.setProperty('--main-color', color);
        document.documentElement.style.setProperty('--main-border-color', borderColor);
      
        return (
            <>
          <div key={index} className='col col-md-4 colorBox d-flex justify-content-center' style={{ backgroundColor: color, borderColor: borderColor }}>
            {className}
          </div>
          { ((index+1)%2 == 0) ?  <div class="w-100"></div> : null }
          </>
        );
      });


return (
    <div className=' OnborMainPage'>
        <OnBordText isName={isName} />

        <Imag />

        <OptionChooseText mess='I am studying in class' />

        <div className='colorBoxBig'>

            <div className='container' >
                <div className='row' >

                    {classElements}

                </div>
            </div>
        </div>

    </div>
);
};

export default OnboardingAttemptYear;