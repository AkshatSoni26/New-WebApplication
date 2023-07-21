import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai'


const ButtonLo = ( {setIsName, inputRef} )  => {

    function test() {
        console.log('inputRef', inputRef.current.value)

        if ((inputRef.current.value).length > 0) {
            setIsName(inputRef.current.value)
        }
        else {
            const mess = document.getElementById('message')
            mess.innerHTML = 'first enter the name'
        }
    }
    
    return (
        <div className=" buttonclass col text-center">

            <button
                onClick={test}
                className='btn buttonBAckground ' type="submit"
            >

                <div style={{ color: '#fff' }}>
                    Continue <AiOutlineArrowRight color='#fff' />
                </div>

            </button>

            <div id='message'></div>

        </div>
    );
};

export default ButtonLo;