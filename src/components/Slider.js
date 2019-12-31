import React, {useState, } from 'react';
import Carousel from 'nuka-carousel';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { Button } from './layout/form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

export default function Swiper({ data, carouselClassName='', carouselControlClassName='', }) {

  const numberOfSlides = (data.length -1);
  const [slideIndex, setSlideIndex] = useState(0);
  const onSlideForward = () => {
    console.log(`click forward ${slideIndex}/${numberOfSlides}`, slideIndex >= numberOfSlides)
    if(slideIndex >= numberOfSlides) setSlideIndex(0); // reset to 0
     else setSlideIndex(slideIndex+1)
  };
  const onSlideBackward = () => {
    console.log(`click ${slideIndex}/${numberOfSlides}`)
    if(slideIndex <= 0) setSlideIndex(numberOfSlides); // reset to 0
     else setSlideIndex(slideIndex-1)
  }

  return (
    <div className={'carousel__wrapper flex-block flex-row-reverse'}>
      <Carousel
        cellSpacing={-50}
        cellAlign={`center`}
        // framePadding={`0 auto`}
        renderCenterLeftControls={null}
        renderCenterRightControls={null}
        renderBottomCenterControls={null}
        className={`${carouselClassName}`}
        slideIndex={slideIndex}
        >
        {
          data.map(({ node: { title, path, featured_media, id: key } }) => (
            <div className={`carousel__slide-item`} key={key}>
              <div className={`carousel__slide-image`} style={{ backgroundImage: `url('${featured_media.source_url}')` }} />
              <div className={`carousel__content`}>
                <h2 className={`carousel__slide-title`}>{title}</h2>
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
                  " className={`carousel__slide-link badge badge-success`} to={`${path}`}>Voir +</AniLink>
              </div>
            </div>
          ))
        }
      </Carousel>
      <div className={`carousel-control__container flex-block flex-column ${carouselControlClassName}`}>
        <Button onClick={onSlideForward}>
         <FontAwesomeIcon icon={faArrowCircleRight} color={'red'} />
        </Button>
        <Button onClick={onSlideBackward}>
          <FontAwesomeIcon icon={faArrowCircleLeft} color={'purple'} />
        </Button>
      </div>
    </div>
  );
}
