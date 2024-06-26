import axios from "axios";
import { ALL_GALLERY_REQUEST,ALL_GALLERY_SUCCESS,ALL_GALLERY_FAIL, NEW_GALLERY_REQUEST, NEW_GALLERY_SUCCESS, NEW_GALLERY_FAIL, DELETE_GALLERY_SUCCESS, DELETE_GALLERY_FAIL, DELETE_GALLERY_REQUEST } from "../constants/galleryConstant";

export const getAllGallery=(limit)=>dispatch=>{
    let link;
    dispatch({type:ALL_GALLERY_REQUEST});
    if(limit){
        link =`/api/v1/gallery?limit=${limit}`
    }
    else{
        link ="/api/v1/gallery"
    }
    
    axios.get(link).then(resp=>
        dispatch({type:ALL_GALLERY_SUCCESS,payload:resp.data})    
    ).catch(err=>
        dispatch({type:ALL_GALLERY_FAIL,payload:err})
    )
}

export const newGallery=(data)=>dispatch=>{
    dispatch({type:NEW_GALLERY_REQUEST});
    let link ="/api/v1/gallery/new";
    const config = {
        headers: { "Content-Type": 'multipart/form-data' },
      };
    axios.post(link,data,config).then(resp=>{
        dispatch({type:NEW_GALLERY_SUCCESS,payload:resp.data})  
        getAllGallery()(dispatch)  
    }
    ).catch(err=>
        dispatch({type:NEW_GALLERY_FAIL,payload:err})
    )
}
export const deleteGallery=(id)=>dispatch=>{
    dispatch({type:DELETE_GALLERY_REQUEST});
    let link ="/api/v1/gallery/"+id;
    axios.delete(link).then(resp=>{
        dispatch({type:DELETE_GALLERY_SUCCESS,payload:resp.data}) 
        dispatch(getAllGallery());
    }).catch(err=>
        dispatch({type:DELETE_GALLERY_FAIL,payload:err})
    )
}