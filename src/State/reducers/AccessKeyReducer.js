const reducer = (state = '', action) => {

    if(action.type == 'key'){
        state = action.payload
        return state
    }
    else{
        return state
    }
}

export default reducer