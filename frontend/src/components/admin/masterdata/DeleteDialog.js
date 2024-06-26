import { useDispatch, useSelector } from 'react-redux';

function DeleteDialog({itemId,title,itemName,deleting,action}) {
const dispatch=useDispatch();

let handleDelete=()=>{
    dispatch(action(itemId));
}
    

  return (
        <div class="modal fade" id="deleteModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="deptModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                <div class="modal-header bg-dark text-white">
                    <h5 class="modal-title" id="deptModalLabel">Send Enquiry</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                    <div class="modal-body">
                        <p>Are you sure you want to delete this item?</p>
                        <p>{title+' : '+itemName}</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" onClick={handleDelete} class="btn btn-danger">{deleting?'Deleting':'Delete'}</button>
                    </div>
                </div>
            </div>
        </div>
  );
}
export default DeleteDialog;