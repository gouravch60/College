import { NEW_DEPT_SUCCESS, UPDATE_DEPT_FAIL, UPDATE_DEPT_REQUEST, UPDATE_DEPT_RESET, UPDATE_DEPT_SUCCESS } from "../constants/deptConstant";
import { ALL_EVENT_FAIL, ALL_EVENT_REQUEST,ALL_EVENT_SUCCESS, DELETE_EVENT_FAIL, DELETE_EVENT_REQUEST, DELETE_EVENT_RESET, DELETE_EVENT_SUCCESS, NEW_EVENT_FAIL, NEW_EVENT_REQUEST, NEW_EVENT_RESET, NEW_EVENT_SUCCESS, UPDATE_EVENTPIC_FAIL, UPDATE_EVENTPIC_REQUEST, UPDATE_EVENTPIC_RESET, UPDATE_EVENTPIC_SUCCESS, UPDATE_EVENT_FAIL, UPDATE_EVENT_REQUEST, UPDATE_EVENT_RESET, UPDATE_EVENT_SUCCESS, } from "../constants/eventConstant";

export const eventReducer=(state={events:[]},action)=>{
    switch (action.type){
        case ALL_EVENT_REQUEST:
            return {
                loading:true,
                events:[]
            }
            break;
        case ALL_EVENT_SUCCESS:
            return {
                loading:false,
                events:action.payload
            }
            break;
        case ALL_EVENT_FAIL:
            return {
                loading:false,
                error:action.payload
            }
            break;
        default :
            return state;
        
    }

    
}

export const newEventReducer=(state={},action)=>{
    switch (action.type){
        case NEW_EVENT_REQUEST:
            return {
                loading:true,
            }
            break;
        case NEW_EVENT_SUCCESS:
            return {
                loading:false,
                success:action.payload
            }
            break;
        case NEW_EVENT_FAIL:
            return {
                loading:false,
                error:action.payload
            }
            break;
        case NEW_EVENT_RESET:
            return {
                loading:false,
                error:undefined,
                success:undefined
            }
            break;
        default :
            return state;
        
    }
}

export const deleteEventReducer=(state={deleting:false,isDeleted:false,deleteErr:''},action)=>{
    switch (action.type){
        case DELETE_EVENT_REQUEST:
            return {
                deleting:true,
            }
            break;
        case DELETE_EVENT_SUCCESS:
            return {
                deleting:false,
                isDeleted:true
            }
            break;
        case DELETE_EVENT_FAIL:
            return {
                deleting:false,
                isDeleted:false,
                deleteErr:action.payload
            }
            break;
        case DELETE_EVENT_RESET:
            return {
                deleting:false,
                isDeleted:false,
                deleteErr:''
            }
            break;
        default :
            return state;
        
    }
}

export const updateEventReducer=(state={updating:false,isUpdated:false,updateErr:undefined},action)=>{
    switch (action.type){
        case UPDATE_EVENT_REQUEST:
            return {
                updating:true,
            }
            break;
        case UPDATE_EVENT_SUCCESS:
            return {
                updating:false,
                isUpdated:true
            }
            break;
        case UPDATE_EVENT_FAIL:
            return {
                updating:false,
                isUpdated:false,
                updateErr:action.payload
            }
            break;
        case UPDATE_EVENT_RESET:
            return {
                updating:false,
                isUpdated:false,
                updateErr:''
            }
            break;
        default :
            return state;
        
    }
}

export const updateEventPicReducer=(state={updating:false,isUpdated:false,updateErr:undefined,newPic:undefined},action)=>{
    switch (action.type){
        case UPDATE_EVENTPIC_REQUEST:
            return {
                updating:true,
            }
            break;
        case UPDATE_EVENTPIC_SUCCESS:
            return {
                updating:false,
                isUpdated:true,
                newPic:action.payload.newImage
            }
            break;
        case UPDATE_EVENTPIC_FAIL:
            return {
                updating:false,
                isUpdated:false,
                updateErr:action.payload
            }
            break;
        case UPDATE_EVENTPIC_RESET:
            return {
                updating:false,
                isUpdated:false,
                updateErr:'',
                newPic:undefined
            }
            break;
        default :
            return state;
        
    }
}