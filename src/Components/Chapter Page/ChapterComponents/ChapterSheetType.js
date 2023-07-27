import React, { memo } from 'react';
import ChapterContentType from './ChapterCONTENTtype';

const ChapterSheetType = ({ content_data }) => {

    console.log('ChapterSheetType')

    return (
        <div>
            {
                content_data.map(
                    (data, index) => {
                        return (
                            <div key={index}>
                                {(data?.node_type == "CONTENT") && (data?.content_data) && < ChapterContentType content_data={data.content_data} />}
                            </div>
                        )
                    }
                )
            }

        </div>
    );
};

export default memo(ChapterSheetType);