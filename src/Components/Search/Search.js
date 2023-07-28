import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { BACKEND_URLS } from '../Links/Config';

const Search = () => {

    const inputRef = useRef()

    const [data, setData] = useState()

    // useEffect(
    //     () => {
          
    //     }, [inputRef]
    // )

    function trial() {
        console.log(inputRef)

        const access = window.atob(localStorage.getItem('Access Key'))

        if (access) {

            axios.post(
                BACKEND_URLS.SEARCH_API,
                { subject: 0, chapter: 0, search_str: inputRef.current.value },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + access,
                    },
                }
            ).then(
                (response) => {
                    console.log(response.data.data.search_results)
                    setData(response.data.data.search_results)
                }
            ).catch(
                (err) => {
                    console.log('err', err)
                }
            )
        }
    }


return (
    <div>

        <div>
            <input ref={inputRef} />
        </div>

        <button onClick={trial}>search</button>

        <div>
          {data &&  JSON.stringify(data) }
        </div>

    </div>
);
};

export default Search;