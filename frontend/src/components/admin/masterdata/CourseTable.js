import React, { useEffect, useState } from 'react';
import { Table, Image, Spinner, Alert, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deleteDepartment, getAllDepartment,updateDepartment, updateDeptPic } from '../../../state/actions/deptAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import DeleteDeptDialog from './deleteDialogs/DeleteDeptDialog';
import TdEdit from './TdEdit';
import { UPDATE_DEPT_RESET } from '../../../state/constants/deptConstant';
import UpDeptImgModal from './updateImgModals/UpDeptImgModal';

const CourseTable = () => {
    const dispatch = useDispatch();
    let [deptId,setDeptId] = useState(); 
    let [deptName,setDeptName] = useState();
    let [deptPic,setDeptPic] = useState(null);
    const {isDeleted,deleting,deleteErr}= useSelector(globalState => globalState.deleteDept);
    const { loading, departments, error } = useSelector(globalState => globalState.departments);
    const globalStateUpdate = useSelector(globalState => globalState.updateDept);
    const updatePicState = useSelector(globalState => globalState.updateDeptPic);

    useEffect(() => {
        dispatch(getAllDepartment());
    }, [dispatch,isDeleted,deleting,deleteErr]);

    const courses = departments.departments;

    const handleEdit = (deptId) => {
        // Handle edit logic here
        console.log(`Edit department with ID: ${deptId}`);
    };

    const handleDelete = (deptIdParam,deptNameParam) => {
        setDeptId(deptIdParam);
        setDeptName(deptNameParam);

    };
    const handleUpdatePic = (deptIdParam,deptNameParam,deptPicParam) => {
        setDeptId(deptIdParam);
        setDeptName(deptNameParam);
        setDeptPic(deptPicParam);

    };

    return (
        <>
            <h2>All Departments</h2>

            {loading && <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>}

            {error && <Alert variant="danger">{error}</Alert>}

            {courses && !loading && !error &&
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Department</th>
                            <th>Description</th>
                            <th>Total Seats</th>
                            <th>Available Seats</th>
                            <th>Department Picture</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courses.map((course, index) => (
                            <tr key={index}>
                                <TdEdit action={updateDepartment} globalStateUpdate={globalStateUpdate} tdType={'dept'} updateReset={UPDATE_DEPT_RESET} id={course._id}>
                                    {course.dept}
                                </TdEdit>
                                <TdEdit action={updateDepartment} globalStateUpdate={globalStateUpdate} tdType={'description'} updateReset={UPDATE_DEPT_RESET} id={course._id}>
                                    {course.description}
                                </TdEdit>
                                <TdEdit action={updateDepartment} globalStateUpdate={globalStateUpdate} tdType={'totalSeat'} updateReset={UPDATE_DEPT_RESET} id={course._id}>
                                    {course.totalSeat}
                                </TdEdit>
                                <td>{course.seatAvail}</td>
                                <td>
                                    <Image
                                        src={course.deptPic}
                                        data-bs-toggle="modal" data-bs-target="#deptPicModal"
                                        alt={`${course.dept} Department`}
                                        style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '50%' }}
                                        onClick={() => handleUpdatePic(course._id,course.dept,course.deptPic)}
                                        className='hover-pointer'
                                    />
                                </td>
                                <td>
                                    <Button variant="primary" onClick={() => handleEdit(course.id)}>
                                        <FontAwesomeIcon icon={faEdit} />
                                    </Button>
                                    <Button data-bs-toggle="modal" data-bs-target="#deleteDeptModal" variant="danger" onClick={() => handleDelete(course._id,course.dept)}>
                                        <FontAwesomeIcon icon={faTrash} />
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                
            }
            <DeleteDeptDialog itemId={deptId} itemName={deptName} deleting={deleting} action={deleteDepartment} isDeleted={isDeleted}/>
            <UpDeptImgModal itemId={deptId} image={deptPic} itemName={deptName} action={updateDeptPic} updatePicState={updatePicState}/>
        </>
    );
};

export default CourseTable;
