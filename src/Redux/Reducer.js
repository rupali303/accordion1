const initialState = {
    username:"veer"
}


export const reduxReducer=(state=initialState,action)=>{
    // console.log(action)
    switch (action.type) {
        case "CHANGE_NAME":
          return  {...state,username:action.payload.username}
    
        default:
            return state
    }
}