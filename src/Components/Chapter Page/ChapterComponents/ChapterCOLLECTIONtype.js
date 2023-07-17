import React from 'react';
import { Accordion } from 'react-bootstrap';
import ChapterSHEETContent from './ChapterSHEETContent';
import ChapterCONTENTtype from './ChapterCONTENTtype';
import '../../../CSS/App.css'

const ChapterCOLLECTIONtype = ({ content_data }) => {
    console.log('content_data under the ChapterCOLLECTIONtype', content_data)
    return (
        <div>
            {
                content_data.map(
                    (data, index) => {
                        { console.log('under the data', data) }
                        return (
                            <Accordion className='collectionAccordion'>
                                <Accordion.Item eventKey={index}>
                                    <Accordion.Header > <div > {data.display_name} </div> </Accordion.Header>
                                    <Accordion.Body className='accordionBody'>

                                        {
                                            (data.node_type == "COLLECTION") && (data.sheet_content) &&
                                            <>
                                                {console.log('under the collection fragment', data.sheet_content)}

                                                <ChapterSHEETContent content_data={data.sheet_content} />
                                            </>
                                        }

                                        {
                                        (data.node_type == "CONTENT") && (data.content_data) && < ChapterCONTENTtype content_data={data.content_data} />
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

export default ChapterCOLLECTIONtype;