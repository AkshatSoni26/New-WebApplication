import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import ChapterContentType from '../ChapterComponents/ChapterContentType';
import ChapterCollectionType from '../ChapterComponents/ChapterCollectionType';
import { chapterTable } from '../../../Constants/Constants';

const ChapterPageSideBar = ({ chapterContent }) => {

    console.log("ChapterPageSideBar")

    return (
        <div className='ChapterPageSideBar'>
            {
                chapterTable.map(
                    (ChData, index) => {
                        return (
                            <div key={index} >

                                {
                                    <Accordion>
                                        <Accordion.Item eventKey={index}>
                                            <Accordion.Header > <div className='accodionHeader'> {chapterTable[index]} </div> </Accordion.Header>
                                            <Accordion.Body className='accordionBody'>

                                                {
                                                    (chapterContent[chapterTable[index].toLowerCase()]).map(
                                                        (value, i) => {
                                                            return (
                                                                <div key={i}>

                                                                    {(value.node_type == "CONTENT") && (value.content_data) && < ChapterContentType content_data={value.content_data} />}

                                                                    {(((value.content_data).length) > 0) && < ChapterCollectionType content_data={value.content_data} />}

                                                                </div>
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


