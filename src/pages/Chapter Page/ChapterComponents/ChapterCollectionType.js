import React, { memo, useState } from 'react';
import { Accordion } from 'react-bootstrap';
import ChapterContentType from './ChapterContentType';
import '../../../assets/CSS/App.css'
import ChapterSheetType from './ChapterSheetType';

const ChapterCollectionType = ({ content_data }) => {

    console.log('ChapterCollectionType')
    
    const [activeKey, setActiveKey ] = useState()

    const handleAccordionChange = (key) => {
        setActiveKey(key === activeKey ? null : key);
      };
    
    return (
        <div>
            {
                content_data.map(
                    (data, index) => {
                        return (
                            <div key={index}>
                                {
                                    (data.node_type == "CONTENT") && (data.content_data) && < ChapterContentType content_data={data.content_data} />
                                }

                                {
                                    (data.node_type == "COLLECTION") && <Accordion activeKey={activeKey} onSelect={handleAccordionChange} >
                                        <Accordion.Item  eventKey={index}>
                                            <Accordion.Header > <div > {data.display_name} </div> </Accordion.Header>
                                            <Accordion.Body className='accordionBody'>
                                                {
                                                    (data.sheet_content) &&
                                                    <>
                                                        <ChapterSheetType content_data={data.sheet_content} />
                                                    </>
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


        </div>
    );
};

export default memo(ChapterCollectionType);