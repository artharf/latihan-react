const INITIAL_STATE = {
    username : undefined,
    isLogin  : false

}

export const contohReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'LOGIN':
            return{
                ...state,
                username : action.payload
            }
        case 'isLogin' :
            return{
                ...state,
                isLogin : !state.isLogin
            }
        

        default:
            return INITIAL_STATE
    }
}