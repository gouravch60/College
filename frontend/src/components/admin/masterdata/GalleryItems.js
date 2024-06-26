import { Fragment, useEffect,useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deleteGallery, getAllGallery } from '../../../state/actions/galleryAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import DeleteGalleryDialog from './deleteDialogs/DeleteGalleryDialog';

const GalleryItems = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllGallery());
  }, []);

  let [galleryId,setId] = useState();
  let [galleryTitle,setTitle] = useState();
  const { gallery } = useSelector((globalState) => globalState.gallery.gallery);
  const {deleting,isDeleted} = useSelector((globalState) => globalState.deleteGallery)

  const handleDelete = (IdParam,titleParam) => {
    setId(IdParam);
    setTitle(titleParam);

};

  return (
    <Fragment>
      <Row>
        {gallery &&
          gallery.map((item) => (
            <Col md={4} sm={6} xs={12} className="mb-4" key={item.id}>
              <Card className="custom-card">
                <div className="delete-icon-container" data-bs-toggle="modal" data-bs-target="#deleteGalleryModal" onClick={() => handleDelete(item._id,item.title)}>
                  <FontAwesomeIcon icon={faTrash} className="delete-icon" />
                </div>
                <Card.Img variant="top" src={item.image} style={{ height: '300px' }} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
      <DeleteGalleryDialog itemId={galleryId} itemName={galleryTitle} deleting={deleting} action={deleteGallery} isDeleted={isDeleted}/>
    </Fragment>
  );
};

export default GalleryItems;
