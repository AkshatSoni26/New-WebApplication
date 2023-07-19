const reducer = (state = '', action) => {

    if(action.type == 'id'){
        state = action.payload
        return state
    }
    else{
        return state
    }
}

export default reducer