import Image from 'react-bootstrap/Image';
import './header.css'
import { Fragment } from 'react';

const PageHero=(props)=>{
    return(
        <div className="heroContainer" style={{
            background: `url(${props.image})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            display: 'flex',
            flexDirection: 'column', // Stack children vertically
            alignItems: 'center', // Center children horizontally
            justifyContent: 'center', // Center children vertically
            height: '400px', // Set a fixed height or adjust as needed
          }}>
            <span className='h2 text-white heroText' style={{ marginTop: '100px' }}>{props.title}</span>
          </div>
    )
}

export default PageHero;