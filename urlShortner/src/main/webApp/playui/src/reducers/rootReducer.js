

const initialState = {
    shortUrls : ["HelloThereHi"]
}



const rootReducer = (state=initialState,action) =>{
    switch (action.type) {
        case "SHORT_URL_SUCCEEDED":
            return Object.assign({}, state, {shortUrls: ""});
        default:
            return state;
    }
}

export default rootReducer