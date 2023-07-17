import React, { useEffect, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import ChapterCONTENTtype from '../ChapterComponents/ChapterCONTENTtype';
import ChapterCOLLECTIONtype from '../ChapterComponents/ChapterCOLLECTIONtype';

const ChapterPageSideBar = ({ chapterContent }) => {

    console.log("chapterContent", chapterContent)

    const data = chapterContent

    const ChapterDataKeys = Object.keys(data)
    const ChapterDataValues = Object.values(data)


    return (
        <div className='ChapterPageSideBar'>
            {
                ChapterDataKeys.map(
                    (ChData, index) => {
                        return (
                            <div key={index} >

                                {
                                    <Accordion>
                                        <Accordion.Item eventKey={index}>
                                            <Accordion.Header > <div className='accodionHeader'> {ChData.charAt(0).toUpperCase() + ChData.slice(1)} </div> </Accordion.Header>
                                            <Accordion.Body className='accordionBody'>

                                                {
                                                    (ChapterDataValues[index]).map(
                                                        (value, i) => {
                                                            return (
                                                                <>
                                                                    {console.log('value', value)}

                                                                    {(value.node_type == "CONTENT") && (value.content_data) && < ChapterCONTENTtype content_data={value.content_data} />}

                                                                    {(((value.content_data).length) > 1) && < ChapterCOLLECTIONtype content_data={value.content_data} />}

                                                                </>
                                                            )
                                                        }
                                                    )
                                                }

                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                }

                            </div>
                        )
                    }
                )
            }
        </ div>
    );
};

export default ChapterPageSideBar;


