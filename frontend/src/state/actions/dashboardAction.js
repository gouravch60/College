import axios from "axios";
import { DASHBOARD_COUNT_FAIL, DASHBOARD_COUNT_REQUEST, DASHBOARD_COUNT_SUCCESS } from "../constants/dashboardConstant";

export const getDashboardCounts=()=>dispatch=>{
    dispatch({type:DASHBOARD_COUNT_REQUEST});
    let link ="/api/v1/user/dashboardCount/"
    axios.get(link).then(resp=>
        dispatch({type:DASHBOARD_COUNT_SUCCESS,payload:resp.data})    
    ).catch(err=>
        dispatch({type:DASHBOARD_COUNT_FAIL,payload:err})
    )
}
