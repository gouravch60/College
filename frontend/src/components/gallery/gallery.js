import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Modal, Button, Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import PageHero from "../layout/header/pageHero";
import './gallery.css'
import { getAllGallery } from '../../state/actions/galleryAction';

const GalleryPage = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getAllGallery());
  },[])

  let {gallery} = useSelector(globalState=>globalState.gallery.gallery);
  let images=[]; 

  
  const [show, setShow] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  if(gallery){
    images=gallery.map(galleryItem=>({
      original: galleryItem.image,
      thumbnail: galleryItem.image,
      description: galleryItem.title
    }))
  }
  return (
    <div>
      <div className="pageHeroDiv">
        <PageHero title="Gallery" image="/5.jpg"/>
      </div>

      <Container className="py-5">
        <Row className="gallery-row">
          <Col className="d-none d-md-block">
          <ImageGallery thumbnailPosition="left" items={images} />
          </Col>
          <Col className="d-md-none">
          <ImageGallery  items={images} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default GalleryPage;
