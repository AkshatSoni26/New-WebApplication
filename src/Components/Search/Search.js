import React, { useEffect, useRef, useState } from 'react';
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import NoResultImg from '../../utils/Images/no-results.png'
import { NoResult, SearchText, chapterTable } from '../../Constants/Constants';
import SearchImg from '../../utils/Images/Search.png';
import SearchNavBar from './SearchNavBar.js/SearchNavBar';
import ChapterMainCom from '../../pages/Chapter Page/ChapterMainCom';



const Search = () => {

    const location = useLocation()
    const backLink = location.state
    const [data, setData] = useState()
    const [err, setErr] = useState(false)
    const [searhed, setSearhed] = useState(false)


    const test = window.location.href

    // console.log('test', test)
    const linkTest = window.location.href

    useEffect(() => {
        // Focus the input element on component mount
        for (let i = 0; i < chapterTable.length; i++) {
        }
    }, [linkTest]);


    return (
        <>
            <SearchNavBar setData={setData} setErr={setErr} setSearhed={setSearhed} />
            <>
                {
                    (!searhed) ?

                        <div className='SearchBack'>
                            <div className='SearchResult'>
                                <div className='NoResultImg'>
                                    <img src={SearchImg} />
                                </div>
                                <div className='NoResultText'>{SearchText}</div>
                            </div>
                        </div>

                        :

                        (data) && (!err)
                            ?
                            <>
                                <ChapterMainCom />
                                {console.log('Search Err data', data["learn"].length)}
                            </>
                            :
                            <div className='SearchBack'>
                            <div className='SearchResult'>
                                    <div className='NoResultImg'>
                                        <img src={NoResultImg} />
                                    </div>
                                    <div className='NoResultText'>{NoResult}</div>
                            </div>
                            </div>

                }






            </>
        </>
    );
};

export default Search;