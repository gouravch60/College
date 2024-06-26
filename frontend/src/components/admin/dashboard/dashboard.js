import { faBook, faCalendar, faComment, faCommentAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import PieChart from "./PieChart";
import { useEffect } from "react";
import { getDashboardCounts } from "../../../state/actions/dashboardAction";
import { useDispatch, useSelector } from "react-redux";
import LineChart from "./LineChart";
import BarChart from "./BarChart";

const Dashboard=()=>{

    const dispatch= useDispatch()

    let {counts}=useSelector(globalState=>globalState.dashboard.counts)

    useEffect(()=>{
           dispatch(getDashboardCounts())
    },[])
    
    return (
        counts&&
        <div className="row">
            {/* Cards */}
            <div className="col-md-3 p-1">
                <div className="card bg-primary text-white border-0 rounded">
                    <div className="card-body">
                        <span className="h5">Courses</span> <FontAwesomeIcon className="float-end h4" icon={faBook} />
                        <div className="mt-3 h3">{counts.courseCount}</div>
                    </div>
                </div>
            </div>
            <div className="col-md-3 p-1">
                <div className="card bg-orange text-white border-0 rounded">
                    <div className="card-body">
                        <span className="h5">Events</span> <FontAwesomeIcon className="float-end h4" icon={faCalendar} />
                        <div className="mt-3 h3">{counts.eventCount}</div>
                    </div>
                </div>
            </div>
            <div className="col-md-3 p-1">
                <div className="card bg-success text-white border-0 rounded">
                    <div className="card-body">
                        <span className="h5">Enquiries</span> <FontAwesomeIcon className="float-end h4" icon={faComment} />
                        <div className="mt-3 h3">{counts.enquiryCount}</div>
                    </div>
                </div>
            </div>
            <div className="col-md-3 p-1">
                <div className="card bg-danger text-white border-0 rounded">
                    <div className="card-body">
                        <span className="h5">Feedbacks</span> <FontAwesomeIcon className="float-end h4" icon={faCommentAlt} />
                        <div className="mt-3 h3">{counts.feedbackCount}</div>
                    </div>
                </div>
            </div>
            {/* Cards end */}
            <div className="col-md-4 p-1">
                <PieChart />
            </div>
            <div className="col-md-8 p-3" style={{overflowX:'auto'}}>
                <BarChart />
            </div>
            
        </div>
    )
}

export default Dashboard