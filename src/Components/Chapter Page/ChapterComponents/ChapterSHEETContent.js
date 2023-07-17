import React from 'react';
import ChapterCONTENTtype from './ChapterCONTENTtype';

const ChapterSHEETContent = ({ content_data }) => {

    console.log('ChapterSHEETContent', content_data)

    return (
        <div>

            {
                content_data.map(
                    (data, index) => {
                        return (
                            <div key={index}>
                                
                                {(data.node_type == "CONTENT") && (data.content_data) && < ChapterCONTENTtype content_data={data.content_data} />}
                            </div>
                        )
                    }
                )
            }

        </div>
    );
};

export default ChapterSHEETContent;