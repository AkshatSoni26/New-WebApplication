import React, { memo, useEffect, useState } from 'react';
import { DefaultThumbnails } from '../../../Constants/Constants';
import '../../../CSS/App.css'
import { toHoursAndMinutes } from '../../Functions/Services';

const ChapterPageVideoButton = ({ content_info }) => {

    console.log('ChapterPageVideoButton')

    // const [time, setTime] = useState(toHoursAndMinutes(content_info.duration))

    // let time = toHoursAndMinutes(content_info.duration)
    const [time, setTime] = useState()
    // const [timeFor, setTimeFor] = useState()

    const timeCal = toHoursAndMinutes(content_info.duration)

    useEffect(
        () => {
            console.log('ChapterPageVideoButton', timeCal.h)

            if (timeCal.h > 0) {
                setTime(`${timeCal.h}:${timeCal.m}:${timeCal.s}`)
            }
            else if (timeCal.m == 0) {
                setTime(`00:${timeCal.s}`)
            }

        }, [timeCal]
    )



    return (
        (!timeCal)
            ?
            <>Loading...</>
            :
            <div className='VidThum'>

                <img className='accordianImage'
                    src={
                        (content_info?.thumbnail)
                            ?
                            content_info.thumbnail
                            :
                            DefaultThumbnails.video
                    }
                />

                <div>
                    
                </div>

                <div className=' videotimeUpdiv'>

                    {
                        (timeCal.h >0)
                        ?
                        <div className=' videoTime '>
                            {`${timeCal.h}:${timeCal.m}:${timeCal.s}`}
                        </div>
                        :
                        <div className=' videoTime '>
                        {`${timeCal.m}:${timeCal.s}`}
                    </div>
                    }
                </div>

            </div>

    );
};

export default memo(ChapterPageVideoButton);