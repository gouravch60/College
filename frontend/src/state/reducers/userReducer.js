import { CLEAR_USER_ERROR, LOAD_USER_FAIL, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGOUT_USER_FAIL, LOGOUT_USER_REQUEST, LOGOUT_USER_SUCCESS } from "../constants/userConstant";

export const userReducer=(state={user:[],isAuth:false},action)=>{
    switch (action.type){
        case LOAD_USER_REQUEST:
        case LOGIN_USER_REQUEST:
            return {
                loading:true,
                user:[]
            }
            break;
        case LOAD_USER_SUCCESS:
        case LOGIN_USER_SUCCESS:
            return {
                loading:false,
                user:action.payload,
                isAuth:true

            }
            break;
        case LOGIN_USER_FAIL:
            return {
                loading:false,
                error:action.payload,
                isAuth:false
            }
            break;
        case LOAD_USER_FAIL:
            return {
                loading:false,
                isAuth:false
            }
            break;
        case CLEAR_USER_ERROR:
            return {
                loading:false,
                error:null
            }
            break;
        case LOGOUT_USER_REQUEST:
            return {
                loading:true
            }
            break;
        case LOGOUT_USER_SUCCESS:
            return {
                loading:false,
                user:undefined,
                isAuth:false

            }
            break;
        case LOGOUT_USER_FAIL:
            return {
                ...state,
                loading:false,
                error:action.payload
            }
            break;
        default :
            return state;
        
    }
}

