import React, { useEffect,useState } from 'react';
import { Table, Image, Spinner, Alert, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deleteEvent, getAllEvents, updateEvent, updateEventPic } from '../../../state/actions/eventAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import DeleteEventDialog from './deleteDialogs/DeleteEventDialog';
import { UPDATE_EVENT_RESET } from '../../../state/constants/eventConstant';
import TdEdit from './TdEdit';
import UpEventImgModal from './updateImgModals/UpEventImgModal';
import { url } from '../../../config';

const EventTable = () => {
    const dispatch = useDispatch();

    let [eventId,setEventId] = useState(); 
    let [eventName,setEventName] = useState();
    let [image,setImage] = useState(null);
    const {isDeleted,deleting,deleteErr}= useSelector(globalState => globalState.deleteEvent);
    const { loading, events, error } = useSelector(globalState => globalState.events);
    const globalStateUpdate = useSelector(globalState => globalState.updateEvent);
    const updatePicState = useSelector(globalState => globalState.updateEventPic);

    useEffect(() => {
        dispatch(getAllEvents());
    }, [dispatch,isDeleted,deleting,deleteErr]);

    const eventList = events.events;

    const handleEdit = (eventId) => {
        // Handle edit logic here
        console.log(`Edit event with ID: ${eventId}`);
    };

    const handleDelete = (eventIdParam,eventNameParam) => {
        setEventId(eventIdParam);
        setEventName(eventNameParam);

    };

    let changeDateFormat=(timestamp)=>{
        const date = new Date(timestamp);

        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const year = date.getFullYear();

        return `${day}-${month}-${year}`;
    }

    const handleUpdatePic = (eventIdParam,eventNameParam,eventPicParam) => {
        setEventId(eventIdParam);
        setEventName(eventNameParam);
        setImage(eventPicParam);

    };

    return (
        <>
            <h2>All Events</h2>

            {loading && <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>}

            {error && <Alert variant="danger">{error}</Alert>}

            {eventList && !loading && !error &&
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Images</th>
                            <th>Registration Link</th>
                            <th>Event Date</th>
                            <th>Event Start Time</th>
                            <th>Event End Time</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {eventList.map((event, index) => (
                            <tr key={index}>
                                <TdEdit action={updateEvent} globalStateUpdate={globalStateUpdate} tdType={'title'} updateReset={UPDATE_EVENT_RESET} id={event._id}>
                                    {event.title}
                                </TdEdit>
                                <TdEdit action={updateEvent} globalStateUpdate={globalStateUpdate} tdType={'description'} updateReset={UPDATE_EVENT_RESET} id={event._id}>
                                    {event.description}
                                </TdEdit>
                                <td>
                                    <Image
                                        src={url+event.images}
                                        alt={`${event.title} Event`}
                                        style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '50%', cursor: 'pointer' }}
                                        data-bs-toggle="modal" data-bs-target="#eventPicModal"
                                        onClick={() => handleUpdatePic(event._id,event.title,event.images)}
                                        className='hover-pointer'
                                    />
                                </td>
                                <TdEdit action={updateEvent} globalStateUpdate={globalStateUpdate} tdType={'regLink'} updateReset={UPDATE_EVENT_RESET} id={event._id}>
                                    {event.regLink}
                                </TdEdit>
                                <td>{changeDateFormat(event.eventDate)}</td>
                                <td>{event.eventStartTime}</td>
                                <td>{event.eventEndTime}</td>
                                <td>
                                    <Button variant="primary" onClick={() => handleEdit(event.id)}>
                                        <FontAwesomeIcon icon={faEdit} />
                                    </Button>{' '}
                                    <Button data-bs-toggle="modal" data-bs-target="#deleteEventModal" variant="danger" onClick={() => handleDelete(event._id,event.title)}>
                                        <FontAwesomeIcon icon={faTrash} />
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            }
            <DeleteEventDialog itemId={eventId} itemName={eventName} deleting={deleting} action={deleteEvent} isDeleted={isDeleted} />
            <UpEventImgModal itemId={eventId} image={image} itemName={eventName} action={updateEventPic} updatePicState={updatePicState}/>
        </>
    );
};

export default EventTable;
