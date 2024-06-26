import { ALL_ENQUIRY_FAIL, ALL_ENQUIRY_REQUEST, ALL_ENQUIRY_SUCCESS, ENQUIRY_COUNT_FAIL, ENQUIRY_COUNT_REQUEST, ENQUIRY_COUNT_SUCCESS, NEW_ENQUIRY_FAIL, NEW_ENQUIRY_REQUEST, NEW_ENQUIRY_SUCCESS, UPDATE_ENQUIRY_FAIL, UPDATE_ENQUIRY_REQUEST, UPDATE_ENQUIRY_RESET, UPDATE_ENQUIRY_SUCCESS } from "../constants/enquiryConstant";


export const enquiryReducer=(state={enquiries:[]},action)=>{
    switch (action.type){
        case ALL_ENQUIRY_REQUEST:
            return {
                loading:true,
                enquiries:[]
            }
            break;
        case ALL_ENQUIRY_SUCCESS:
            return {
                loading:false,
                enquiries:action.payload
            }
            break;
        case ALL_ENQUIRY_FAIL:
            return {
                loading:false,
                error:action.payload
            }
            break;
        default :
            return state;
        
    }
}

export const newEnquiryReducer=(state={},action)=>{
    switch (action.type){
        case NEW_ENQUIRY_REQUEST:
            return {
                loading:true
            }
            break;
        case NEW_ENQUIRY_SUCCESS:
            return {
                loading:false,
                success:action.payload
            }
            break;
        case NEW_ENQUIRY_FAIL:
            return {
                loading:false,
                error:action.payload
            }
            break;
        default :
            return state;
        
    }
}

export const updateEnquiryReducer=(state={updating:false,updated:true,updateErr:null},action)=>{
    switch (action.type){
        case UPDATE_ENQUIRY_REQUEST:
            return {
                updating:true
            }
            break;
        case UPDATE_ENQUIRY_SUCCESS:
            return {
                updating:false,
                updated:true
            }
            break;
        case UPDATE_ENQUIRY_FAIL:
            return {
                updating:false,
                updateErr:action.payload
            }
            break;
        case UPDATE_ENQUIRY_RESET:
            return {
                updating:false,
                updated:true,
                updateErr:null
            }
            break;
        default :
            return state;
        
    }
}

export const enquiryCountReducer=(state={enquiryCount:[]},action)=>{
    switch (action.type){
        case ENQUIRY_COUNT_REQUEST:
            return {
                loading:true,
                enquiryCount:[]
            }
            break;
        case ENQUIRY_COUNT_SUCCESS:
            return {
                loading:false,
                enquiryCount:action.payload
            }
            break;
        case ENQUIRY_COUNT_FAIL:
            return {
                loading:false,
                error:action.payload
            }
            break;
        default :
            return state;
        
    }
}