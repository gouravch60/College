import { Fragment, useEffect, useState } from "react";
import PageHero from "../layout/header/pageHero";
import { useDispatch, useSelector } from "react-redux";
import Card from 'react-bootstrap/Card';
import { getAllDepartment } from "../../state/actions/deptAction";
import Button from 'react-bootstrap/Button';
import DeptModal from "../snippets/DeptModal";
import { url } from "../../config";

const Courses = (props) => {
    const dispatch = useDispatch();
    let [dept, setDept] = useState();
    useEffect(() => {
        dispatch(getAllDepartment());
    }, []);
    const { departments } = useSelector((globalState) => (globalState.departments.departments));
    let callDeptModal = (deptSelected) => {
        setDept(deptSelected);
    }
    return (
        <Fragment>
            <div className="pageHeroDiv" title="Courses">
                <PageHero title="Courses" image="/3.jpg"/>
            </div>
            <div className="p-5">
                <div className="row row-cols-1 row-cols-md-3">
                    {departments && departments.map((department) => (
                        <div className="col mb-4" key={department._id}>
                            <div className="h-100">
                                <Card className='shadow card-hover h-100' onClick={() => callDeptModal(department)} data-bs-toggle="modal" data-bs-target="#deptModal">
                                    <div style={{ height: "200px", overflow: "hidden" }}>
                                        <Card.Img variant="top" src={url+department.deptPic} style={{ height: "100%", objectFit: "cover" }} />
                                    </div>
                                    <Card.Body>
                                        <Card.Title>{department.dept}</Card.Title>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <DeptModal departments={departments} deptSelected={dept} />
        </Fragment>
    );
}

export default Courses;
