import { useEffect, useState } from 'react';
import Image from 'react-bootstrap/esm/Image';
import {Link} from 'react-router-dom' 

function EventModal({eventSelected,changeDateFormat,formatDateToDayMonth}) {
    let [title,setTitle]=useState('');
    let [desc,setDesc]=useState('');
    let [image,setImage]=useState('');
    let [regLinkFlag,setRegLinkFlag]=useState('');
    let [regLink,setRegLink]=useState('');
    let [eventDate,setEventDate]=useState('');
    let [eventSTime,setEventSTime]=useState('');
    let [eventETime,setEventETime]=useState('');
    useEffect(()=>{
        setTitle(eventSelected.title)
        setDesc(eventSelected.description)
        setImage(eventSelected.images)
        setRegLinkFlag(eventSelected.regLinkFlag)
        setRegLink(eventSelected.regLink)
        setEventDate(eventSelected.eventDate)
        setEventSTime(eventSelected.eventStartTime)
        setEventETime(eventSelected.eventendTime)

    },[eventSelected])

  return (
        <div className="modal fade" id="eventModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="eventModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                    <div className="modal-header bg-dark text-white">
                        <h5 className="modal-title" id="eventModalLabel">{title}</h5>&nbsp; 
                        <span className='badge rounded-pill bg-danger'>{eventDate&&formatDateToDayMonth(eventDate)}</span>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body row">
                        <div className='col-md-6 p-2'>
                            <Image src={image} className="w-100 h-100" />
                        </div>
                        <div className='col-md-6' style={{overflowY:'auto'}}>
                            <p className='text-desc'>
                                {desc}
                            </p>
                            <p>Date:<span>{eventDate&&changeDateFormat(eventDate)}</span></p>
                            <p>Time:<span>{eventSTime} - {eventETime}</span></p>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <a href={regLink} target="_blank" className='btn btn-dark'>Registration Form</a>
                    </div>
                </div>
            </div>
        </div>
  );
}
export default EventModal;