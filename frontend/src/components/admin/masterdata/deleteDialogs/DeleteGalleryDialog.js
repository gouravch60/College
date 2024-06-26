import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { DELETE_GALLERY_RESET } from '../../../../state/constants/galleryConstant';

function DeleteGalleryDialog({itemId,itemName,deleting,action,isDeleted}) {
const dispatch=useDispatch();
let modalButton = useRef(null);

let handleDelete=()=>{
    dispatch(action(itemId));
}

useEffect(()=>{
    if(isDeleted){
        setTimeout(()=>{
            modalButton.current.click();
            dispatch({type:DELETE_GALLERY_RESET})
        },3000);
        
    }
},[isDeleted]);    

  return (
        <div class="modal fade" id="deleteGalleryModal"  data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="deptModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                <div class="modal-header bg-dark text-white">
                    <h5 class="modal-title" id="deptModalLabel">Send Enquiry</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                    <div class="modal-body">
                        {isDeleted?
                                <span>Gallery Item '{itemName}' deleted successfully! <FontAwesomeIcon icon={faCheck} /></span>
                                :
                                <span>
                                    <p>Are you sure you want to delete this item?</p>
                                    <p>Gallery Item : {itemName}</p>
                                </span>
                            }
                        
                    </div>
                    <div class="modal-footer">
                        <button type="button" ref={modalButton} class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" onClick={handleDelete} class="btn btn-danger">{deleting?'Deleting':'Delete'}</button>
                    </div>
                </div>
            </div>
        </div>
  );
}
export default DeleteGalleryDialog;