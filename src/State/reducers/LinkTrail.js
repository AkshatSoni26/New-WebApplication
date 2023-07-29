const reducer = (state = '/', action) => {

    if(action.type == 'link'){
        state = action.payload
        return state
    }
    else{
        return state
    }
}

export default reducer