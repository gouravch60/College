import { ALL_GALLERY_REQUEST,ALL_GALLERY_SUCCESS,ALL_GALLERY_FAIL, NEW_GALLERY_FAIL, NEW_GALLERY_REQUEST, NEW_GALLERY_SUCCESS, NEW_GALLERY_RESET, DELETE_GALLERY_REQUEST, DELETE_GALLERY_SUCCESS, DELETE_GALLERY_FAIL, DELETE_GALLERY_RESET } from "../constants/galleryConstant";

export const galleryReducer=(state={gallery:[]},action)=>{
    switch (action.type){
        case ALL_GALLERY_REQUEST:
            return {
                loading:true,
                gallery:[]
            }
            break;
        case ALL_GALLERY_SUCCESS:
            return {
                loading:false,
                gallery:action.payload
            }
            break;
        case ALL_GALLERY_FAIL:
            return {
                loading:false,
                error:action.payload
            }
            break;
        default :
            return state;
        
    }
}

export const newGalleryReducer=(state={},action)=>{
    switch (action.type){
        case NEW_GALLERY_REQUEST:
            return {
                loading:true,
            }
            break;
        case NEW_GALLERY_SUCCESS:
            return {
                loading:false,
                success:action.payload
            }
            break;
        case NEW_GALLERY_FAIL:
            return {
                loading:false,
                error:action.payload
            }
            break;
        case NEW_GALLERY_RESET:
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

export const deleteGalleryReducer=(state={deleting:false,isDeleted:false,deleteErr:undefined},action)=>{
    switch (action.type){
        case DELETE_GALLERY_REQUEST:
            return {
                deleting:true,
            }
            break;
        case DELETE_GALLERY_SUCCESS:
            return {
                deleting:false,
                isDeleted:true
            }
            break;
        case DELETE_GALLERY_FAIL:
            return {
                deleting:false,
                isDeleted:false,
                deleteErr:action.payload
            }
            break;
        case DELETE_GALLERY_RESET:
            return {
                deleting:false,
                isDeleted:false,
                deleteErr:undefined
            }
            break;
        default :
            return state;
        
    }
}
