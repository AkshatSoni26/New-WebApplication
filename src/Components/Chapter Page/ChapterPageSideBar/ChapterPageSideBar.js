import React, { memo } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import ChapterContentType from '../ChapterComponents/ChapterContentType';
import ChapterCollectionType from '../ChapterComponents/ChapterCollectionType';
import { chapterTable } from '../../../Constants/Constants';
import { useSelector } from 'react-redux';

const ChapterPageSideBar = () => {

    console.log("ChapterPageSideBar11111111111")
    
    const learn = useSelector(state => state.learn)
    const chapterContent = learn.content

    console.log('ChapterPageNavBar',learn)

    

    return (
        (learn?.content) &&  

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

export default  memo(ChapterPageSideBar);


