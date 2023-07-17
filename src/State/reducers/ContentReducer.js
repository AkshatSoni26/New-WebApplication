const reducer = (state = [], action) => {

    if(action.type == 'content'){
        state = action.payload
        return state
    }
    else{
        return state
    }
}

export default reducer