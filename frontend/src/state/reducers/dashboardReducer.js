import { DASHBOARD_COUNT_FAIL, DASHBOARD_COUNT_REQUEST, DASHBOARD_COUNT_SUCCESS } from "../constants/dashboardConstant";

export const dashboardReducer=(state={counts:[]},action)=>{
    switch (action.type){
        case DASHBOARD_COUNT_REQUEST:
            return {
                loading:true,
                counts:[]
            }
            break;
        case DASHBOARD_COUNT_SUCCESS:
            return {
                loading:false,
                counts:action.payload
            }
            break;
        case DASHBOARD_COUNT_FAIL:
            return {
                loading:false,
                error:action.payload
            }
            break;
        default :
            return state;
        
    }
}

