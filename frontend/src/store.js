import {createStore,applyMiddleware,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension";
import { deleteDeptReducer, deptReducer, newDeptReducer, updateDeptPicReducer, updateDeptReducer } from './state/reducers/deptReducer';
import { deleteEventReducer, eventReducer, newEventReducer, updateEventPicReducer, updateEventReducer } from './state/reducers/eventReducer';
import { deleteGalleryReducer, galleryReducer, newGalleryReducer } from './state/reducers/galleryReducer';
import { enquiryCountReducer, enquiryReducer, updateEnquiryReducer } from './state/reducers/enquiryReducer';
import { newEnquiryReducer } from './state/reducers/enquiryReducer';
import { feedbackCountReducer, feedbackReducer, newFeedbackReducer } from './state/reducers/feedbackReducer';
import { userReducer } from './state/reducers/userReducer';
import { dashboardReducer } from './state/reducers/dashboardReducer';

const reducer=combineReducers({
     departments:deptReducer
    ,events:eventReducer
    ,gallery:galleryReducer
    ,enquiry:enquiryReducer
    ,newEnquiry:newEnquiryReducer
    ,newDepartment:newDeptReducer
    ,newEvent:newEventReducer
    ,newGallery:newGalleryReducer
    ,deleteDept:deleteDeptReducer
    ,deleteEvent:deleteEventReducer
    ,updateEnquiry:updateEnquiryReducer
    ,updateDept:updateDeptReducer
    ,updateEvent:updateEventReducer
    ,updateDeptPic:updateDeptPicReducer
    ,updateEventPic:updateEventPicReducer
    ,deleteGallery:deleteGalleryReducer
    ,feedbacks:feedbackReducer
    ,newFeedback:newFeedbackReducer
    ,user:userReducer
    ,dashboard:dashboardReducer
    ,enquiryCount:enquiryCountReducer
    ,feedbackCount:feedbackCountReducer
});

let initState={};

const middleware=[thunk];

const store = createStore(reducer,initState,composeWithDevTools(applyMiddleware(...middleware)))

export default store

