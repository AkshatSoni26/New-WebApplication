import React, { useEffect } from 'react';
import { LuArrowLeft } from 'react-icons/lu'
import '../../../CSS/Register.css'
import axios from 'axios';
import { BACKEND_URLS } from '../../Links/Config';
import { useLocation } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai'

const ButtonLo = ({ setIsName, inputRef, NameTaker, butText }) => {

    const access = localStorage.getItem('Access Key')

    function NameTaker() {

        // set the name to the  server
        console.log('inputRef', inputRef.current.value)

        const user_input = inputRef.current.value

        const format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~0-9]/
        console.log('localStorage.getItem(Access Key)', access)


        const Headers = {
            'Authorization': 'Bearer ' + access,
            'Content-Type': 'application/json'
        }

        const Body = {
            'full_name': user_input,
        }


        if (user_input.length > 0) {

            if (format.test(user_input)) {

                const mess = document.getElementById('message')
                mess.style.color = 'red'
                mess.innerHTML = 'Please remove special Characters.'

            }
            else {
                setIsName(inputRef.current.value)

                axios.post(
                    BACKEND_URLS.SET_NAME,
                    Body, // Request body should be the second parameter
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + access
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
            mess.style.color = 'red'

        }
    }

    return (
        <div className='buttonclass'>

            <button
                onClick={NameTaker}
                className='btn buttonBAckground ' type="submit"
            >

                <div style={{ color: '#fff' }}>
                    {butText}
                </div>

            </button>
        </div>
    );
};

export default ButtonLo;

ButtonLo.defaultProps = {
    butText: (
        <React.Fragment>
            Continue <AiOutlineArrowRight color='#fff' />
        </React.Fragment>
    )
};