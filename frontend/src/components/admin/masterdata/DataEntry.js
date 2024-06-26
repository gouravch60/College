import { Fragment, useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import './masterdata.css'
import CourseForm from './CourseForm';
import EventForm from './EventForm';
import GalleryForm from './GalleryForm';
import CourseTable from './CourseTable';
import EventTable from './EventTable';
import GalleryItems from './GalleryItems';

const DataEntry = () => {
  const [key, setKey] = useState('courses');

  const handleTabSelect = (selectedKey) => {
    setKey(selectedKey);
  };

 
  return (
    <Fragment>
      <div className='d-flex justify-content-between align-items-center mb-4'>
        <h3 className='mb-0 text-dark'>Master Data Entry</h3>
      </div>

      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={handleTabSelect}
        className="mb-4"
        defaultActiveKey="courses"
        justify
      >
        <Tab
          eventKey="courses"
          title={<span className='tab-title'>Courses</span>}
          className="tab-item"
        >
            <CourseForm/>
            <hr/>
            <CourseTable/>
        </Tab>

        <Tab
          eventKey="events"
          title={<span className='tab-title'>Events</span>}
          className="tab-item"
        >
            <EventForm/>
            <hr/>
            <EventTable/>
        </Tab>

        <Tab
          eventKey="gallery"
          title={<span className='tab-title'>Gallery</span>}
          className="tab-item"
        >
            <GalleryForm/>
            <hr/>
            <GalleryItems/>
        </Tab>
      </Tabs>
    </Fragment>
  );
};

export default DataEntry;
