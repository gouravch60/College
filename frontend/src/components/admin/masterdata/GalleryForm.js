import React, { useRef, useState, useEffect } from 'react';
import { Form, Button, Card, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { NEW_GALLERY_RESET } from '../../../state/constants/galleryConstant';
import { newGallery } from '../../../state/actions/galleryAction';

const GalleryForm = () => {
  // Redux state
  const { success, error, loading } = useSelector((globalState) => globalState.newGallery);

  // Ref for file input
  const fileRef = useRef(null);

  // Local state for form fields
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);

  // Redux dispatch
  const dispatch = useDispatch();

  // Function to reset form fields
  const resetFields = () => {
    setTitle('');
    setImage(null);
    fileRef.current.value = null;
  };

  // Function to handle file change
  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { title, image };
    dispatch(newGallery(formData));
  };

  // useEffect to handle success and error states
  useEffect(() => {
    if (error) {
      alert('Error occurred!');
      console.log(error);
    }

    if (success) {
      resetFields();
      dispatch({ type: NEW_GALLERY_RESET });
      alert('Gallery Item Added Successfully!');
    }
  }, [dispatch, success, error]);

  return (
    <Card className="p-4">
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="image">
                <Form.Label>Image</Form.Label>
                <Form.Control type="file" ref={fileRef} onChange={handleFileChange} />
              </Form.Group>
            </Col>
          </Row>

          <Button variant="primary" type="submit">
            {loading ? 'Adding...' : 'Submit'}
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default GalleryForm;
