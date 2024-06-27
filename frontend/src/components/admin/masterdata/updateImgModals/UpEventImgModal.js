import React, { useRef, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Image } from 'react-bootstrap';
import { UPDATE_EVENTPIC_RESET } from '../../../../state/constants/eventConstant';
import { url } from '../../../../config';

function UpEventImgModal({ itemId, itemName, image, action, updatePicState }) {
  const dispatch = useDispatch();
  let modalButton = useRef(null);
  let {updating,isUpdated,updateErr,newPic} = updatePicState;
  const [eventImg, setImage] = useState(null);
  const imageRef = useRef(null);
  const inputRef = useRef(null);



  let handleUpdate = () => {
    let data = {'images':eventImg}
    dispatch(action(itemId,data))
  };

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  useEffect(() => {
    if (isUpdated) {
      inputRef.current.value=null;
      imageRef.current.src=url+newPic;
      setTimeout(() => {
        setImage(null);
        dispatch({type:UPDATE_EVENTPIC_RESET})
      }, 3000);
    }
  }, [isUpdated]);

  return (
    <div className="modal fade" id="eventPicModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="deptModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-header bg-dark text-white">
            <h5 className="modal-title" id="deptModalLabel">
              Update Image
            </h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-12 text-center">
                <Image src={url+image} ref={imageRef} className="img-fluid rounded" style={{ width: '400px', height: '400px' }} alt="Department Image" />
              </div>
              <div className="col-12 mt-3">
                <label className="form-label">Choose a new image for {itemName}:</label>
                <input type="file" ref={inputRef} className="form-control" onChange={handleFileChange} />
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" ref={modalButton} className="btn btn-secondary" data-bs-dismiss="modal">
              Close
            </button>
            <button type="button" onClick={handleUpdate} className="btn btn-danger">
              {updating ? 'Updating' : 'Update'} 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpEventImgModal;
