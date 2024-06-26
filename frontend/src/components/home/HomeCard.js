import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function HomeCard({title,img}) {
  
  return (
    <Card className='p-1 shadow' >
      <Card.Img variant="top" src={img} style={{height:'200px'}} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default HomeCard;