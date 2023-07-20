import React, { useEffect, useState } from 'react';
import { toHoursAndMinutes } from '../Functions/Services';

const ThumbnailDur = ( {duration} ) => {

    const [time, setTime] = useState()

    const timeCal = toHoursAndMinutes(duration)

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
        <div className='videotimeUpdiv'>

            {
                (timeCal.h > 0)
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
    );
};

export default ThumbnailDur;