import React, { useRef, } from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { Button } from './layout/form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLessThan } from '@fortawesome/free-solid-svg-icons';

export default function CustomSlick({ data }) {
  const sliderRef = useRef(null); 

  var settings = {
    dots: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    infinite: false,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const onSlickNext = () => {
    sliderRef.current.slickNext()
  }
  const onSlickPrev = () => {
    sliderRef.current.slickPrev()
  }
  return (
    <div className={`block-relative`}>
    <Slider {...settings} ref={sliderRef}>
      {
        data.map(({ node: { title, path, featured_media, id: key } }) => (
          <div className={`carousel__slide-item `} key={key}>
            <div className={`carousel__slide-image js-animate-image`} style={{ backgroundImage: `url('${featured_media.source_url}')` }} />
            <div className={`carousel__content`}>
              <h2 className={`carousel__slide-title js-animate`}>{title}</h2>
              <AniLink
                cover
                direction="down"
                duration={1.5}
                bg="
                  center / cover   /* position / size */
                  no-repeat        /* repeat */
                  fixed            /* attachment */
                  padding-box      /* origin */
                  content-box      /* clip */
                  var(--purple)            /* color */
                " className={`carousel__slide-link js-animate badge badge-success`} to={`${path}`}>Voir +</AniLink>
            </div>
          </div>
        ))
      }
    </Slider>
    <div className={`arrow-controls`}>
        <Button onClick={onSlickPrev} className={`control-arrow prev-arrow`}>
          <FontAwesomeIcon icon={faLessThan} />
        </Button>
        <Button onClick={onSlickNext} className={`control-arrow next-arrow`}>
          <FontAwesomeIcon icon={faLessThan} />
        </Button>
      </div>
    </div>
  );
}
