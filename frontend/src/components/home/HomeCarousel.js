import Carousel from 'react-bootstrap/Carousel';
//import ExampleCarouselImage from 'components/ExampleCarouselImage';
import Image from 'react-bootstrap/Image';

function HomeCarousel() {
  const images=[{text:'Welcome to Our Campus',url:'/college_pic2.jpg'}
  ,{text:'Your Gateway to Learning',url:'/library.jpg'}
  ,{text:'Gather, Learn, and Celebrate',url:'/audi.jpg'}];
  
  return (
    <Carousel fade>
      {images &&
        images.map((image, index) => (
          <Carousel.Item key={index}>
            <Image
              style={{ height: '40rem', objectFit: 'cover' }}
              className="d-block w-100 rounded"
              src={image.url}
              alt={`Slide ${index + 1}`}
            />
            <Carousel.Caption className="text-dark">
              <h3 className="font-weight-bold text-white transparency-80">{image.text}</h3>
              <p className="lead"></p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
    </Carousel>
  );
}

export default HomeCarousel;