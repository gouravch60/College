import { useState,useEffect } from 'react';
import { useSelector,useDispatch } from "react-redux";
import { Modal, Button, Image } from 'react-bootstrap';
import { getAllGallery } from "../../state/actions/galleryAction";

const Gallery1 = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getAllGallery());
    },[])
    const {gallery} = useSelector((globalState)=>(globalState.gallery.gallery));  
    let images=[
        'https://media.istockphoto.com/id/1273180194/photo/young-and-happy-students-studying-standing-on-white-background.jpg?s=170667a&w=0&k=20&c=pVnSQpZD_5rDv5yAlona_wnzI_k6TMw469iZX2C8XOc=',
        'https://media.istockphoto.com/id/1273180194/photo/young-and-happy-students-studying-standing-on-white-background.jpg?s=170667a&w=0&k=20&c=pVnSQpZD_5rDv5yAlona_wnzI_k6TMw469iZX2C8XOc=',
        'https://media.istockphoto.com/id/1273180194/photo/young-and-happy-students-studying-standing-on-white-background.jpg?s=170667a&w=0&k=20&c=pVnSQpZD_5rDv5yAlona_wnzI_k6TMw469iZX2C8XOc='
        
    ];

  const [show, setShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <div>
      <div className="image-thumbnails">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className="thumbnail"
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Image Viewer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image src={selectedImage} fluid />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Gallery1;