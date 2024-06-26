import axios from "axios";
import { ALL_ENQUIRY_FAIL, ALL_ENQUIRY_REQUEST, ALL_ENQUIRY_SUCCESS, ENQUIRY_COUNT_FAIL, ENQUIRY_COUNT_REQUEST, ENQUIRY_COUNT_SUCCESS, NEW_ENQUIRY_FAIL, NEW_ENQUIRY_REQUEST, NEW_ENQUIRY_SUCCESS, UPDATE_ENQUIRY_FAIL, UPDATE_ENQUIRY_REQUEST, UPDATE_ENQUIRY_SUCCESS } from "../constants/enquiryConstant";
import { url } from "../../config";

export const newEnquiry=(data)=>dispatch=>{
    dispatch({type:NEW_ENQUIRY_REQUEST});
    let link =url+"/api/v1/enquiry/new";
    const config = {
        headers: { "Content-Type": "application/json" },
      };
    axios.post(link,data,config).then(resp=>
        dispatch({type:NEW_ENQUIRY_SUCCESS,payload:resp.data})    
    ).catch(err=>
        dispatch({type:NEW_ENQUIRY_FAIL,payload:err})
    )
}

export const getAllEnquiries=()=>dispatch=>{
    dispatch({type:ALL_ENQUIRY_REQUEST});
    let link =url+"/api/v1/enquiry/"
    axios.get(link).then(resp=>
        dispatch({type:ALL_ENQUIRY_SUCCESS,payload:resp.data})    
    ).catch(err=>
        dispatch({type:ALL_ENQUIRY_FAIL,payload:err})
    )
}

export const updateEnquiries=(id,data)=>dispatch=>{
    dispatch({type:UPDATE_ENQUIRY_REQUEST});
    let link =url+"/api/v1/enquiry/"+id;
    const config = {
        headers: { "Content-Type": "application/json" },
      };
    axios.put(link,data,config).then(resp=>
        dispatch({type:UPDATE_ENQUIRY_SUCCESS,payload:resp.data})    
    ).catch(err=>
        dispatch({type:UPDATE_ENQUIRY_FAIL,payload:err})
    )
}

export const getEnquiryCount=()=>dispatch=>{
    dispatch({type:ENQUIRY_COUNT_REQUEST});
    let link =url+"/api/v1/enquiry/enquiryCount/"
    axios.get(link).then(resp=>
        dispatch({type:ENQUIRY_COUNT_SUCCESS,payload:resp.data})    
    ).catch(err=>
        dispatch({type:ENQUIRY_COUNT_FAIL,payload:err})
    )
}
