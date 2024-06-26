import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllEvents } from "../../state/actions/eventAction";
import PageHero from "../layout/header/pageHero";
import Card from 'react-bootstrap/Card';
import EventModal from "../snippets/eventModal";
import { url } from "../../config";

const Events=(props)=>{
    let [eventSelected,setEventSelected]=useState('');
    let dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getAllEvents());
    },[])    
    const {events,error} = useSelector((globalState)=>(globalState.events.events))
    if(error)console.log(error);

    let changeDateFormat=(timestamp)=>{
        const date = new Date(timestamp);

        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const year = date.getFullYear();

        return `${day}-${month}-${year}`;
    }

    let formatDateToDayMonth=(timestamp)=>{
        const date = new Date(timestamp);
      
        const day = String(date.getDate());
        const month = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(date);
      
        return `${day} ${month}`;
      }

    return (
        <Fragment>
            <div className="pageHeroDiv">
                <PageHero title="Events" image="/4.jpg"/>
            </div>
            <div className=" p-5">
                
                <div className="row p-md-5">
                    {events && events.map((eventItem,i)=>(
                    <div className="card col-12 mt-3 shadow card-hover" onClick={()=>setEventSelected(eventItem)} data-bs-toggle="modal" data-bs-target="#eventModal">
                        <div className="card-body row">
                            <div className="col-md-4">
                                <img src={url+eventItem.images} className="w-100 img-fluid" style={{height:'20rem'}}/>
                            </div>
                            <div className="col-md-8">
                                <span className="text-success h5">{formatDateToDayMonth(eventItem.eventDate)}</span><br/>
                                <span className="h3 mt-3">{eventItem.title}</span>
                                <p className="mt-2 text-description d-none d-md-block">"{eventItem.description}"</p>
                                <p className="mt-2 float-bottom text-secondary">Click to view more info</p>
                            </div>
                        </div>

                    </div>
                        
                    ))
                    }
                </div>
            </div>
            <EventModal eventSelected={eventSelected} changeDateFormat={changeDateFormat} formatDateToDayMonth={formatDateToDayMonth}/>
        </Fragment>
    );
}

export default Events