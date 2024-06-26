import { Form, Button, Card, Row, Col } from 'react-bootstrap';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllDepartment, newDepartment } from '../../../state/actions/deptAction';
import { NEW_DEPT_RESET } from '../../../state/constants/deptConstant';

const CourseForm = () => {

  let {success,error,loading} = useSelector(globalState=>globalState.newDepartment);

  let fileRef=useRef(null);

  const dispatch = useDispatch();

  const [dept, setDept] = useState('');
  const [deptPic, setDeptPic] = useState(null);
  const [description, setDescription] = useState('');
  const [totalSeat, setTotalSeat] = useState('');
  const [seatAvail, setSeatAvail] = useState('');

  const resetFields=()=>{
      setDept('');
      setDeptPic(null);
      setDescription('');
      setTotalSeat('');
      setSeatAvail('');
      fileRef.current.value=null;
  }

  const handleFileChange = (e) => {
    setDeptPic(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform actions with the form data here, such as sending it to an API
    const formData = { dept, deptPic, description, totalSeat, seatAvail };

    dispatch(newDepartment(formData));
    console.log('Form data submitted:', formData);
  };


  useEffect(()=>{
    if (error) {
      alert('Error occured!');
    }

    if (success) {
      resetFields();
      dispatch({type:NEW_DEPT_RESET});
      dispatch(getAllDepartment());
      alert('Course Added Successfully!');
    }
  },[dispatch,success,error]);

  return (
    <Card className="p-4">
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="dept">
                <Form.Label>Department</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter department"
                  value={dept}
                  onChange={(e) => setDept(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="deptPic">
                <Form.Label>Department Picture</Form.Label>
                <Form.Control
                  type="file"
                  ref={fileRef}
                  placeholder="Enter department picture URL"
                  onChange={handleFileChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
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
            <Col md={6}>
              <Form.Group controlId="totalSeat">
                <Form.Label>Total Seats</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter total seats"
                  value={totalSeat}
                  onChange={(e) => setTotalSeat(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="seatAvail">
                <Form.Label>Available Seats</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter available seats"
                  value={seatAvail}
                  onChange={(e) => setSeatAvail(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>

          <Button variant="primary" type="submit">
            {loading?'Adding...':'Submit'}
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default CourseForm;
