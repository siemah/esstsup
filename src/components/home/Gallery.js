import React, { useRef, } from 'react';
import { Container, Row, Col } from '../layout/grid';
import Carousel from 'nuka-carousel';
import { Button } from '../layout/form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Slider from 'react-slick';

export default function Gallery({ data, className = '' }) {
  const galleryRef = useRef(null);
  const onToggleGalleryCarousel = e => {
    galleryRef.current.classList.toggle('show');
  }
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
  };
  return (
    <Container className={`gallery-block ${className}`}>
      <div ref={galleryRef} className={`gallery__carousel`}>
        <Button className={`gallery__close-button main-menu__toggle-button`} onClick={onToggleGalleryCarousel}>
          <FontAwesomeIcon icon={faTimes} />
        </Button>
        <Slider adaptiveHeight={false} {...settings} className={`js-animate-image`}>
          <img src={data[0]} />
          <img src="http://placehold.it/1000x800/ffffff/c0392b/&text=slide2" />
          <img src={data[1]} />
          <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4" />
          <img src={data[3]} />
          <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6" />
        </Slider>
      </div>
      <div className={`gallery-hiden__wrapper`} />
      <Row>
        <Col s={12}>
          <h3 className={`block__sub-title js-animate center mb1`}>Gallery</h3>
        </Col>
        <Col s={12}>
          <h2 className={`block__title js-animate center mb1`}>Photo &amp; Video</h2>
        </Col>
      </Row>
      <Row className={`mb0 flex-block main-row`}>
        <Col s={12} m={6} className={`flex-block`}>
          <img src={data[0]} onClick={onToggleGalleryCarousel} className={'block radius-1 mb0'} alt={`ee`} />
        </Col>
        <Col s={12} m={6} className={`gallery-grid mb0`}>
          <Row className={`flex-block`}>
            <Col s={6}>
              <img src={`http://placehold.it/880x400/ffffff/c0392b/&text=image2`} onClick={onToggleGalleryCarousel} className={'block radius-1 mb0'} alt={`ee`} />
            </Col>
            <Col s={6} className={`pr0`}>
              <img src={`http://placehold.it/2000x800/ffffff/c0392b/&text=image5`} onClick={onToggleGalleryCarousel} className={'block radius-1 mb0'} alt={`ee`} />
            </Col>
          </Row>
          <Row className={`flex-block mb0`}>
            <Col s={6}>
              <img src={`http://placehold.it/1000x800/ffffff/c0392b/&text=image2`} onClick={onToggleGalleryCarousel} className={'block radius-1 mb0'} alt={`ee`} />
            </Col>
            <Col s={6} className={`pr0`}>
              <img src={data[4]} onClick={onToggleGalleryCarousel} className={'block radius-1 mb0'} alt={`ee`} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}
