import React from 'react';
import { useSelector } from 'react-redux';
import { ChapterScroll, OverlayOff } from '../../Functions/Services';
import '../../../CSS/Tab.css'



const TabSubjectSideBar = ({ setTabIndexBut }) => {

    const content = useSelector(state => state.content)

   

    return (
        <div className='subjectFlexIndex FlotingSubjectTable'>
            {/* <button className='subject'
            //  onClick={() => { setTabIndexBut(false) }}
            > */}

                {/* <div className=''> */}
                    {
                        content.map((data, index) => {
                            return (
                                ((data.content.learn).length > 0) ?
                                    <React.Fragment key={index}>
                                        <button onClick={() => {
                                            setTabIndexBut(false);
                                            OverlayOff()
                                            ChapterScroll(data.node_id);
                                        }}
                                            className='subject'  style={{width: "100%"}}    >
                                            <div className=''>
                                                <div className='tableData'>
                                                    <div className='menuBarcontentSvgs subjectFloatingindexButs'>
                                                        {data.display_name}
                                                    </div>
                                                </div>
                                            </div>

                                        </button>
                                    </React.Fragment>
                                    :
                                    null
                            );
                        }
                        )
                    }
                {/* </div> */}

            {/* </button> */}
        </div>
    );
};

export default TabSubjectSideBar;