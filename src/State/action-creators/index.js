export const AccessKey = (accessKey) => {
    return (dispatch) => {
        dispatch(
            {
                type:'key',
                payload: accessKey
            }
        )
    }
}


export const SubjectData = (content) => {
    return (dispatch) => {
        dispatch(
            {
                type: 'content',
                payload: content
            }
        )
    }
}

export const LearnData = (content) => {
    return (dispatch) => {
        dispatch(
            {
                type: 'content',
                payload: content
            }
        )
    }
}


export const re_video_id = (content) => {
    return (dispatch) => {
        dispatch(
            {
                type: 'id',
                payload: content
            }
        )
    }
}


export const LinkTrial = (content) => {
    return (dispatch) => {
        dispatch(
            {
                type: 'link',
                payload: content
            }
        )
    }
}