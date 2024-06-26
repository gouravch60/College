import { LOAD_USER_FAIL, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGOUT_USER_REQUEST, LOGOUT_USER_SUCCESS } from "../constants/userConstant";
import axios from 'axios'


export const loginUser=(data)=>dispatch=>{
    dispatch({type:LOGIN_USER_REQUEST});
    let link ="/api/v1/login";
    const config = {
        headers: { "Content-Type": "application/json" },
        withCredentials: true
      };
    axios.post(link,data,config).then(resp=>
        dispatch({type:LOGIN_USER_SUCCESS,payload:resp.data})    
    ).catch(err=>
        dispatch({type:LOGIN_USER_FAIL,payload:err.response.data.message})
    )
}

export const loadUser=()=>dispatch=>{
    dispatch({type:LOAD_USER_REQUEST});
    let link ="/api/v1/user/loadUser";
    const config = {
        headers: { "Content-Type": "application/json" },
        withCredentials: true
      };
    axios.get(link,config).then(resp=>
        dispatch({type:LOAD_USER_SUCCESS,payload:resp.data})    
    ).catch(err=>{
        dispatch({type:LOAD_USER_FAIL,payload:err.response.data.message})
        console.log(err.response.data.message);
    }
    )
}

export const logoutUser=()=>dispatch=>{
    dispatch({type:LOGOUT_USER_REQUEST});
    let link ="/api/v1/user/logout";
    const config = {
        headers: { "Content-Type": "application/json" },
        withCredentials: true
      };
    axios.get(link,config).then(resp=>
        dispatch({type:LOGOUT_USER_SUCCESS,payload:resp.data})    
    ).catch(err=>{
        dispatch({type:LOGIN_USER_FAIL,payload:err.response.data.message})
        console.log(err.response.data.message);
    }
    )
}

