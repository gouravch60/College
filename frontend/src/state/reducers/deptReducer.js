import { ALL_DEPT_REQUEST,ALL_DEPT_SUCCESS,ALL_DEPT_FAIL, NEW_DEPT_REQUEST, NEW_DEPT_SUCCESS, NEW_DEPT_FAIL, NEW_DEPT_RESET, DELETE_DEPT_REQUEST, DELETE_DEPT_SUCCESS, DELETE_DEPT_FAIL, DELETE_DEPT_RESET, UPDATE_DEPT_FAIL, UPDATE_DEPT_REQUEST, UPDATE_DEPT_SUCCESS, UPDATE_DEPT_RESET, UPDATE_DEPTPIC_REQUEST, UPDATE_DEPTPIC_SUCCESS, UPDATE_DEPTPIC_FAIL, UPDATE_DEPTPIC_RESET } from "../constants/deptConstant";

export const deptReducer=(state={departments:[]},action)=>{
    switch (action.type){
        case ALL_DEPT_REQUEST:
            return {
                loading:true,
                departments:[]
            }
            break;
        case ALL_DEPT_SUCCESS:
            return {
                loading:false,
                departments:action.payload
            }
            break;
        case ALL_DEPT_FAIL:
            return {
                loading:false,
                error:action.payload
            }
            break;
        default :
            return state;
        
    }
}

export const newDeptReducer=(state={},action)=>{
    switch (action.type){
        case NEW_DEPT_REQUEST:
            return {
                loading:true,
            }
            break;
        case NEW_DEPT_SUCCESS:
            return {
                loading:false,
                success:action.payload
            }
            break;
        case NEW_DEPT_FAIL:
            return {
                loading:false,
                error:action.payload
            }
            break;
        case NEW_DEPT_RESET:
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

export const deleteDeptReducer=(state={deleting:false,isDeleted:false,deleteErr:''},action)=>{
    switch (action.type){
        case DELETE_DEPT_REQUEST:
            return {
                deleting:true,
            }
            break;
        case DELETE_DEPT_SUCCESS:
            return {
                deleting:false,
                isDeleted:true
            }
            break;
        case DELETE_DEPT_FAIL:
            return {
                deleting:false,
                isDeleted:false,
                deleteErr:action.payload
            }
            break;
        case DELETE_DEPT_RESET:
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

export const updateDeptReducer=(state={updating:false,isUpdated:false,updateErr:undefined},action)=>{
    switch (action.type){
        case UPDATE_DEPT_REQUEST:
            return {
                updating:true,
            }
            break;
        case UPDATE_DEPT_SUCCESS:
            return {
                updating:false,
                isUpdated:true
            }
            break;
        case UPDATE_DEPT_FAIL:
            return {
                updating:false,
                isUpdated:false,
                updateErr:action.payload
            }
            break;
        case UPDATE_DEPT_RESET:
            return {
                updating:false,
                isUpdated:false,
                updateErr:undefined
            }
            break;
        default :
            return state;
        
    }
}

export const updateDeptPicReducer=(state={updating:false,isUpdated:false,updateErr:undefined,newPic:undefined},action)=>{
    switch (action.type){
        case UPDATE_DEPTPIC_REQUEST:
            return {
                updating:true,
            }
            break;
        case UPDATE_DEPTPIC_SUCCESS:
            return {
                updating:false,
                isUpdated:true,
                newPic:action.payload.newDeptPic
            }
            break;
        case UPDATE_DEPTPIC_FAIL:
            return {
                updating:false,
                isUpdated:false,
                updateErr:action.payload
            }
            break;
        case UPDATE_DEPTPIC_RESET:
            return {
                updating:false,
                isUpdated:false,
                updateErr:undefined,
                newPic:undefined
            }
            break;
        default :
            return state;
        
    }
}