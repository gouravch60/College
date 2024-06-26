import { ALL_FEEDBACK_FAIL, ALL_FEEDBACK_REQUEST, ALL_FEEDBACK_SUCCESS, FEEDBACK_COUNT_FAIL, FEEDBACK_COUNT_REQUEST, FEEDBACK_COUNT_SUCCESS, NEW_FEEDBACK_FAIL, NEW_FEEDBACK_REQUEST, NEW_FEEDBACK_RESET, NEW_FEEDBACK_SUCCESS } from "../constants/feedbackConstant";

export const feedbackReducer=(state={feedbacks:[]},action)=>{
    switch (action.type){
        case ALL_FEEDBACK_REQUEST:
            return {
                loading:true,
                feedbacks:[]
            }
            break;
        case ALL_FEEDBACK_SUCCESS:
            return {
                loading:false,
                feedbacks:action.payload
            }
            break;
        case ALL_FEEDBACK_FAIL:
            return {
                loading:false,
                error:action.payload
            }
            break;
        default :
            return state;
        
    }
}

export const newFeedbackReducer=(state={},action)=>{
    switch (action.type){
        case NEW_FEEDBACK_REQUEST:
            return {
                loading:true,
            }
            break;
        case NEW_FEEDBACK_SUCCESS:
            return {
                loading:false,
                success:action.payload
            }
            break;
        case NEW_FEEDBACK_FAIL:
            return {
                loading:false,
                error:action.payload
            }
            break;
        case NEW_FEEDBACK_RESET:
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

export const feedbackCountReducer=(state={feedbackCount:[]},action)=>{
    switch (action.type){
        case FEEDBACK_COUNT_REQUEST:
            return {
                loading:true,
                feedbackCount:[]
            }
            break;
        case FEEDBACK_COUNT_SUCCESS:
            return {
                loading:false,
                feedbackCount:action.payload
            }
            break;
        case FEEDBACK_COUNT_FAIL:
            return {
                loading:false,
                error:action.payload
            }
            break;
        default :
            return state;
        
    }
}