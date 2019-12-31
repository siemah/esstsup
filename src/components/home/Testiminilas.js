import React, { useRef, } from 'react';
import Slider from 'react-slick';

import AboutUs from '../../assets/images/about-us.png';
import { Button } from '../layout/form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLessThan } from '@fortawesome/free-solid-svg-icons';

export default function Testiminilas() {
  const sliderRef = useRef(null);
  const onSlickNext = () => {
    sliderRef.current.slickNext()
  }
  const onSlickPrev = () => {
    sliderRef.current.slickPrev()
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    arrows: false,
    fade: false,
  };
  return (
    <div className={`testimonials-block`}>
      <Slider {...settings} ref={sliderRef}>
        <div className={`testimonials-block__item bg-purple`}>
          <blockquote className={`testimonials__quote`}>
            "This is the best college ever i have seen and of course 
            This is the best college ever i have seen and of course 
            This is the best college ever i have seen and of course" 
          </blockquote>
          <div className={`testimonials__author flex-block`}>
            <img src={AboutUs} alt={`author image`} className={`testimonials__author-image`} />
            <div className={`testimonials__author-text-block`}>
              <h3 className={`testimonials__author-name`}>Zoe Miller</h3>
              <h5 className={`mb0 testimonials__author-job`}>CEO Agence62</h5>
            </div>
          </div>
        </div>
        <div className={`testimonials-block__item bg-lightblue`}>
          <blockquote className={`testimonials__quote`}>
            "This is the best college ever i have seen and of course 
            This is the best college ever i have seen and of course 
            This is the best college ever i have seen and of course 
            This is the best college ever i have seen and of course 
            This is the best college ever i have seen and of course" 
          </blockquote>
          <div className={`testimonials__author flex-block`}>
            <img src={AboutUs} alt={`author image`} className={`testimonials__author-image`} />
            <div className={`testimonials__author-text-block`}>
              <h3 className={`testimonials__author-name`}>Marek Hamsik</h3>
              <h5 className={`mb0 testimonials__author-job`}>CEO Agence62</h5>
            </div>
          </div>
        </div>
        <div className={`testimonials-block__item bg-purple`}>
          <blockquote className={`testimonials__quote`}>
            "This is the best college ever i have seen and of course 
            This is the best college ever i have seen and of course 
            This is the best college ever i have seen and of course" 
          </blockquote>
          <div className={`testimonials__author flex-block`}>
            <img src={AboutUs} alt={`author image`} className={`testimonials__author-image`} />
            <div className={`testimonials__author-text-block`}>
              <h3 className={`testimonials__author-name`}>Zoe Miller</h3>
              <h5 className={`mb0 testimonials__author-job`}>CEO Agence62</h5>
            </div>
          </div>
        </div>
        <div className={`testimonials-block__item bg-lightblue`}>
          <blockquote className={`testimonials__quote`}>
            "This is the best college ever i have seen and of course 
            This is the best college ever i have seen and of course 
            This is the best college ever i have seen and of course 
            This is the best college ever i have seen and of course" 
          </blockquote>
          <div className={`testimonials__author flex-block`}>
            <img src={AboutUs} alt={`author image`} className={`testimonials__author-image`} />
            <div className={`testimonials__author-text-block`}>
              <h3 className={`testimonials__author-name`}>Sven Bender</h3>
              <h5 className={`mb0 testimonials__author-job`}>CEO Agence62</h5>
            </div>
          </div>
        </div>
      </Slider>
      <div className={`arrow-controls flex-block`}>
        <Button onClick={onSlickPrev} className={`bg-lightpurple`}>
          <FontAwesomeIcon icon={faLessThan} />
        </Button>
        <Button onClick={onSlickNext} className={`bg-lightpurple next-prev`}>
          <FontAwesomeIcon icon={faLessThan} />
        </Button>
      </div>
    </div>
  )
}
