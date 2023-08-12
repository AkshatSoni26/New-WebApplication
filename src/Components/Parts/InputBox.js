import React from "react";
import flag from '../../Images/india-flag.png'




export function InputBox({ PhoneRef }) {

    const handleInputChange = () => {
        if (PhoneRef.current) {
          const numericValue = PhoneRef.current.value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
          PhoneRef.current.value = numericValue.slice(0, 10); // Limit length to 10 characters
        }
      };

    return (
        <div className='CountryAndPhoneNumber' >
            <div id="country_code" className="countryCode">
                <div > +91 </div>
                <img src={flag} className='FlagClass' />
            </div>
            <input autoFocus={true} ref={PhoneRef} maxLength="10"
                type="text"
                onChange={handleInputChange}

                placeholder='Enter your Phone Number here.'
                id='PhoneInput'
                className='focused_input phoneNumberInput' />
        </div>
    )
}