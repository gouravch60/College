import { Form, Button, Card, Row, Col } from 'react-bootstrap';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { newEvent } from '../../../state/actions/eventAction';
import { NEW_EVENT_RESET } from '../../../state/constants/eventConstant';

const EventForm = () => {
  let { success, error, loading } = useSelector((globalState) => globalState.newEvent);

  let fileRef = useRef(null);

  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState(null);
  const [regLink, setRegLink] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventStartTime, setEventStartTime] = useState('');
  const [eventEndTime, setEventEndTime] = useState('');

  const resetFields = () => {
    setTitle('');
    setDescription('');
    setImages(null);
    setRegLink('');
    setEventDate('');
    setEventStartTime('');
    setEventEndTime('');
    fileRef.current.value = null;
  };

  const handleFileChange = (e) => {
    setImages(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { title, description, images, regLink, eventDate, eventStartTime, eventEndTime };
    dispatch(newEvent(formData));
    console.log(formData);
  };

  useEffect(() => {
    if (error) {
      alert('Error occurred!');
      console.log(error);
    }

    if (success) {
      resetFields();
      dispatch({ type: NEW_EVENT_RESET });
      alert('Event Added Successfully!');
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
              <Form.Group controlId="images">
                <Form.Label>Images</Form.Label>
                <Form.Control type="file" ref={fileRef} onChange={handleFileChange} />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="regLink">
                <Form.Label>Registration Link</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter registration link"
                  value={regLink}
                  onChange={(e) => setRegLink(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="eventDate">
                <Form.Label>Event Date</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Enter event date"
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="eventStartTime">
                <Form.Label>Event Start Time</Form.Label>
                <Form.Control
                  type="time"
                  placeholder="Enter event start time"
                  value={eventStartTime}
                  onChange={(e) => setEventStartTime(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="eventEndTime">
                <Form.Label>Event End Time</Form.Label>
                <Form.Control
                  type="time"
                  placeholder="Enter event end time"
                  value={eventEndTime}
                  onChange={(e) => setEventEndTime(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={12}>
              <Form.Group controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
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

export default EventForm;
