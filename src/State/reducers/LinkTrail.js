const reducer = (state = '/', action) => {

    console.log("action.payload", action.payload)

    if(action.type == 'link' && action.payload){
        state = action.payload
        
        return state
    }
    else{
        return state
    }
}

export default reducer