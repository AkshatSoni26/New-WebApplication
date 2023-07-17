import React from 'react';
import ChapterContentType from './ChapterContentType';

const ChapterSheetType = ({ content_data }) => {

    console.log('1111111111111111111111111111')

    return (
        <div>

            {
                content_data.map(
                    (data, index) => {
                        return (
                            <div key={index}>
                                {(data.node_type == "CONTENT") && (data.content_data) && < ChapterContentType content_data={data.content_data} />}
                            </div>
                        )
                    }
                )
            }

        </div>
    );
};

export default ChapterSheetType;