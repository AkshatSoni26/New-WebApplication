import React from 'react';
import { Accordion } from 'react-bootstrap';
import ChapterContentType from './ChapterContentType';
import '../../../CSS/App.css'
import ChapterSheetType from './ChapterSheetType';

const ChapterCollectionType = ({ content_data }) => {
    console.log('1111111111111111111111111111',)
    return (
        <div>
            {
                content_data.map(
                    (data, index) => {
                        return (
                            <Accordion key={index} className='collectionAccordion'>
                                <Accordion.Item eventKey={index}>
                                    <Accordion.Header > <div > {data.display_name} </div> </Accordion.Header>
                                    <Accordion.Body className='accordionBody'>

                                        {
                                            (data.node_type == "COLLECTION") && (data.sheet_content) &&
                                            <>
                                                <ChapterSheetType content_data={data.sheet_content} />
                                            </>
                                        }

                                        {
                                            (data.node_type == "CONTENT") && (data.content_data) && < ChapterContentType content_data={data.content_data} />
                                        }


                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        )
                    }
                )
            }


        </div>
    );
};

export default ChapterCollectionType;