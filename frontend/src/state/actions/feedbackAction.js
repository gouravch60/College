import axios from "axios";
import { ALL_FEEDBACK_FAIL, ALL_FEEDBACK_REQUEST, ALL_FEEDBACK_SUCCESS, FEEDBACK_COUNT_FAIL, FEEDBACK_COUNT_REQUEST, FEEDBACK_COUNT_SUCCESS, NEW_FEEDBACK_FAIL, NEW_FEEDBACK_REQUEST, NEW_FEEDBACK_SUCCESS } from "../constants/feedbackConstant";

export const getAllFeedback=()=>dispatch=>{
    dispatch({type:ALL_FEEDBACK_REQUEST});
    let link ="/api/v1/feedback/"
    axios.get(link).then(resp=>
        dispatch({type:ALL_FEEDBACK_SUCCESS,payload:resp.data})    
    ).catch(err=>
        dispatch({type:ALL_FEEDBACK_FAIL,payload:err})
    )
}

export const newFeedback=(data)=>dispatch=>{
    dispatch({type:NEW_FEEDBACK_REQUEST});
    let link ="/api/v1/feedback/";
    const config = {
        headers: { "Content-Type": 'application/json' },
      };
    axios.post(link,data,config).then(resp=>
        dispatch({type:NEW_FEEDBACK_SUCCESS,payload:resp.data})    
    ).catch(err=>
        dispatch({type:NEW_FEEDBACK_FAIL,payload:err})
    )
}

export const getFeedbackCount=()=>dispatch=>{
    dispatch({type:FEEDBACK_COUNT_REQUEST});
    let link ="/api/v1/feedback/datewiseCount"
    axios.get(link).then(resp=>
        dispatch({type:FEEDBACK_COUNT_SUCCESS,payload:resp.data})    
    ).catch(err=>
        dispatch({type:FEEDBACK_COUNT_FAIL,payload:err})
    )
}