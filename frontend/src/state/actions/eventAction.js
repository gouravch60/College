import axios from "axios";
import { ALL_EVENT_FAIL, ALL_EVENT_REQUEST,ALL_EVENT_SUCCESS, DELETE_EVENT_FAIL, DELETE_EVENT_REQUEST, DELETE_EVENT_SUCCESS, NEW_EVENT_FAIL, NEW_EVENT_REQUEST, NEW_EVENT_SUCCESS, UPDATE_EVENTPIC_FAIL, UPDATE_EVENTPIC_REQUEST, UPDATE_EVENTPIC_SUCCESS, UPDATE_EVENT_REQUEST, UPDATE_EVENT_SUCCESS, } from "../constants/eventConstant";
import { NEW_ENQUIRY_SUCCESS, UPDATE_ENQUIRY_FAIL } from "../constants/enquiryConstant";
import { url } from "../../config";

export const getAllEvents=(limit)=>dispatch=>{
    let link;
    dispatch({type:ALL_EVENT_REQUEST});
    if(limit){
        link =url+`/api/v1/event?limit=${limit}`
    }
    else{
        link =url+"/api/v1/event"
    }
    
    axios.get(link).then(resp=>
        dispatch({type:ALL_EVENT_SUCCESS,payload:resp.data})    
    ).catch(err=>
        dispatch({type:ALL_EVENT_FAIL,payload:err})
    )
}

export const newEvent=(data)=>dispatch=>{
    dispatch({type:NEW_EVENT_REQUEST});
    let link =url+"/api/v1/event/new";
    const config = {
        headers: { "Content-Type": 'multipart/form-data' },
      };
    axios.post(link,data,config).then(resp=>
        dispatch({type:NEW_EVENT_SUCCESS,payload:resp.data})    
    ).catch(err=>
        dispatch({type:NEW_EVENT_FAIL,payload:err})
    )
}

export const deleteEvent=(id)=>dispatch=>{
    dispatch({type:DELETE_EVENT_REQUEST});
    let link =url+"/api/v1/event/"+id;
    axios.delete(link).then(resp=>
        dispatch({type:DELETE_EVENT_SUCCESS,payload:resp.data})    
    ).catch(err=>
        dispatch({type:DELETE_EVENT_FAIL,payload:err})
    )
}

export const updateEvent=(id,data)=>dispatch=>{
    dispatch({type:UPDATE_EVENT_REQUEST});
    let link =url+"/api/v1/event/"+id
    const config = {
        headers: { "Content-Type": "application/json" },
      };
    axios.put(link,data,config).then(resp=>
        dispatch({type:UPDATE_EVENT_SUCCESS,payload:resp.data})    
    ).catch(err=>
        dispatch({type:UPDATE_ENQUIRY_FAIL,payload:err})
    )
}

export const updateEventPic=(id,data)=>dispatch=>{
    dispatch({type:UPDATE_EVENTPIC_REQUEST});
    let link =url+"/api/v1/event/imageupdate/"+id;
    const config = {
        headers: { "Content-Type": 'multipart/form-data' },
      };
    axios.put(link,data,config).then(resp=>{
        dispatch({type:UPDATE_EVENTPIC_SUCCESS,payload:resp.data}) 
        dispatch(getAllEvents())
        }   
    ).catch(err=>
        dispatch({type:UPDATE_EVENTPIC_FAIL,payload:err})
    )
}