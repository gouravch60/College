import axios from "axios";
import { ALL_DEPT_REQUEST,ALL_DEPT_SUCCESS,ALL_DEPT_FAIL, NEW_DEPT_REQUEST, NEW_DEPT_SUCCESS, NEW_DEPT_FAIL, DELETE_DEPT_REQUEST, DELETE_DEPT_SUCCESS, DELETE_DEPT_FAIL, UPDATE_DEPT_SUCCESS, UPDATE_DEPT_FAIL, UPDATE_DEPT_REQUEST, UPDATE_DEPTPIC_REQUEST, UPDATE_DEPTPIC_SUCCESS, UPDATE_DEPTPIC_FAIL } from "../constants/deptConstant";
import { faLinkSlash } from "@fortawesome/free-solid-svg-icons";
import { url } from "../../config";

export const getAllDepartment=(limit)=>dispatch=>{
    dispatch({type:ALL_DEPT_REQUEST});
    let link =url+"/api/v1/department/"
    if(limit){
        link =url+`/api/v1/department/?limit=${limit}`
    }
    else{
        link =url+"/api/v1/department/"
    }
    axios.get(link).then(resp=>
        dispatch({type:ALL_DEPT_SUCCESS,payload:resp.data})    
    ).catch(err=>
        dispatch({type:ALL_DEPT_FAIL,payload:err})
    )
}

export const newDepartment=(data)=>dispatch=>{
    dispatch({type:NEW_DEPT_REQUEST});
    let link =url+"/api/v1/department/new";
    const config = {
        headers: { "Content-Type": 'multipart/form-data' },
      };
    axios.post(link,data,config).then(resp=>
        dispatch({type:NEW_DEPT_SUCCESS,payload:resp.data})    
    ).catch(err=>
        dispatch({type:NEW_DEPT_FAIL,payload:err})
    )
}

export const deleteDepartment=(id)=>dispatch=>{
    dispatch({type:DELETE_DEPT_REQUEST});
    let link =url+"/api/v1/department/"+id
    axios.delete(link).then(resp=>
        dispatch({type:DELETE_DEPT_SUCCESS,payload:resp.data})    
    ).catch(err=>
        dispatch({type:DELETE_DEPT_FAIL,payload:err})
    )
}

export const updateDepartment=(id,data)=>dispatch=>{
    dispatch({type:UPDATE_DEPT_REQUEST});
    let link =url+"/api/v1/department/"+id
    const config = {
        headers: { "Content-Type": "application/json" },
      };
    axios.put(link,data,config).then(resp=>
        dispatch({type:UPDATE_DEPT_SUCCESS,payload:resp.data})    
    ).catch(err=>
        dispatch({type:UPDATE_DEPT_FAIL,payload:err})
    )
}

export const updateDeptPic=(id,data)=>dispatch=>{
    dispatch({type:UPDATE_DEPTPIC_REQUEST});
    let link =url+"/api/v1/department/imageupdate/"+id;
    console.log(link);
    const config = {
        headers: { "Content-Type": 'multipart/form-data' },
      };
    axios.put(link,data,config).then(resp=>{
        dispatch({type:UPDATE_DEPTPIC_SUCCESS,payload:resp.data}) 
        dispatch(getAllDepartment())   
    }
    ).catch(err=>
        dispatch({type:UPDATE_DEPTPIC_FAIL,payload:err})
    )
}