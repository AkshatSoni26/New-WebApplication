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