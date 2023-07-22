import React, { useEffect } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai'
import '../../../CSS/Register.css'
import axios from 'axios';
import { BACKEND_URLS } from '../../Links/Config';
import { useLocation } from 'react-router-dom';

const ButtonLo = ({ setIsName, inputRef }) => {

    const location = useLocation() 

    const access = localStorage.setItem('Access Key', location.state)

    console.log("ButtonLo",location)



    function test() {
        console.log('inputRef', inputRef.current.value)

        const user_input = inputRef.current.value

        const format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/ 
        console.log('localStorage.getItem(Access Key)',access)  
        
     
        const Headers = {
            'Authorization': 'Bearer ' + access,
           'Content-Type': 'application/json'
       }
    
       const Body =  {
        'full_name': user_input,
    }


        if (user_input.length > 0) {

            if (format.test(user_input)) {

                const mess = document.getElementById('message')
                mess.innerHTML = 'Please remove special Characters.'

            }
            else{
                setIsName(inputRef.current.value)

                axios.post(
                    BACKEND_URLS.SET_NAME,
                    Body, // Request body should be the second parameter
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + location.state 
                        }
                    }
                ).then(
                    (resp) => {
                        console.log('Your response is here', resp);
                    }
                ).catch(
                    (err) => {
                        console.log('error', err);
                    }
                );
                
            }
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