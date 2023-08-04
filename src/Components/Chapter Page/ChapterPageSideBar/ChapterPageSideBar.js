import React, { memo, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { chapterTable } from '../../../Constants/Constants';
import { useSelector } from 'react-redux';
import ChapterContentType from '../ChapterComponents/ChapterContentType';
import ChapterCollectionType from '../ChapterComponents/ChapterCollectionType';

const ChapterPageSideBar = () => {

    console.log("ChapterPageSideBar11111111111")

    const learn = useSelector(state => state.learn)
    const chapterContent = learn.content
    console.log('ChapterPageNavBar', learn)

    const [activeKey, setActiveKey] = useState(0)

    const handleAccordionChange = (key) => {
        setActiveKey(key === activeKey ? null : key);
    };

    return (
        (chapterContent) &&
        <div className='ChaptrSide'>
                <div className='ChapterPageSideBar'>
                    {
                        chapterTable.map(
                            (ChData, index) => {
                                return (
                                    <div key={index} >

                                        {
                                            ((chapterContent[chapterTable[index].toLowerCase()]).length > 0) && 
                                            
                                            <Accordion 
                                            activeKey={activeKey} 
                                            onSelect={handleAccordionChange} >

                                                <Accordion.Item eventKey={index} >
                                                    <Accordion.Header > <div className='accodionHeader'> {chapterTable[index]} </div> </Accordion.Header>
                                                    <Accordion.Body className='accordionBody'>

                                                        {
                                                            (chapterContent[chapterTable[index].toLowerCase()]) && (chapterContent[chapterTable[index].toLowerCase()]).map(
                                                                (value, i) => {
                                                                    return (
                                                                        <div key={i}>

                                                                            {(value.node_type == "CONTENT") && (value.content_data) && < ChapterContentType content_data={value.content_data} />}

                                                                            {(((value.content_data).length) > 0) && <ChapterCollectionType content_data={value.content_data} />}

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
                </ div>       

        
    );
};

export default memo(ChapterPageSideBar);