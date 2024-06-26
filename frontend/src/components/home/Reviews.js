import Carousel from 'react-bootstrap/Carousel';
//import ExampleCarouselImage from 'components/ExampleCarouselImage';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';

function Reviews() {
  const images=[
   {name:'Priya Singh',text:"My experience at Indian College of Engineering was incredibly enriching. The rigorous academic programs and industry-oriented approach equipped me with the skills needed to thrive in the competitive field of engineering. The supportive faculty and state-of-the-art facilities were instrumental in my academic journey. I am proud to be an alum and attribute much of my professional success to the solid foundation laid by Indian College of Engineering.",image:'/review1.jpg'}
  ,{name:'Ayesha Sinha',text:"Indian College of Engineering provided me with a holistic education that prepared me for a rewarding career in engineering. The diverse student community and collaborative learning environment fostered creativity and innovation. The practical training and industry exposure offered through internships and projects were invaluable. I am grateful for the mentorship of faculty members who guided me towards achieving my goals. Indian College of Engineering truly shaped my future.",image:'/review2.jpeg'}
  ,{name:'Rohit Mahato',text:"I have fond memories of my time at Indian College of Engineering. The campus life was vibrant, and I had the opportunity to engage in various extracurricular activities alongside my studies. The college's emphasis on holistic development and ethical values resonated with me deeply. Today, as a successful professional in the engineering field, I look back on my alma mater with gratitude for the solid education and lifelong friendships I gained at Indian College of Engineering.",image:'/review3.jfif'}
  ,{name:'Vikram Partha',text:"Indian College of Engineering provided me with a transformative academic journey. The hands-on learning experiences and practical approach to education prepared me exceptionally well for the challenges of the engineering industry. The strong emphasis on research and innovation encouraged me to explore new ideas and push the boundaries of knowledge. The supportive faculty and diverse student community made my time at Indian College of Engineering memorable and inspiring. I am proud to be an alum and attribute my professional success to the solid foundation I received here.",image:'/review4.jpg'}
];
  
  return (
    <Carousel variant="dark" indicators={false}>

      {
        images && images.map((review)=>(
        <Carousel.Item>
        <div className='text-center p-3 pb-5'>
            <img src={review.image} style={{width:'100px',height:'100px',borderRadius:'100%'}} />
            <p className='h5 mt-1'>{review.name}</p>
            <p className='text-secondary mx-5 px-md-5'>{review.text}</p>
        </div>
        </Carousel.Item>
        ))
      }
      
    </Carousel>
  );
}

export default Reviews;