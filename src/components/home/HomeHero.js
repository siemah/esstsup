import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, } from '@fortawesome/free-solid-svg-icons'

import Hero from '../Hero';
import { Container, Col, Row, } from '../layout/grid';
import AboutUs from '../../assets/images/about-us.png';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HomeHero({ data, className = '', }) {

  React.useEffect(() => {
    if(typeof window !== `undefined`) {
      let firsytSlideElementToAnimate = document.querySelectorAll('.slick-slide.slick-active .js-animate-sliding');
      firsytSlideElementToAnimate.forEach(elem => {
        elem.classList.add(`slide-${elem.dataset.slide}`)
      });
    }
  }, []);

  const settings = {
    className: "center js-slider__block",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 1,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 5000,
    dots: true,
    fade: true,
    arrows: false,
    // autoplaySpeed:5000,
    beforeChange: () => {
      if (typeof window !== `undefined`) {
        let slickSlider = document.querySelector('.js-slider__block');
        let animateContent = slickSlider.querySelectorAll('.js-animate-sliding')
        animateContent.forEach(elem => {
          elem.classList.remove('slide-up')
          elem.classList.remove('slide-left')
          elem.classList.remove('slide-down')
        });
      }
    },
    afterChange: () => {
      if (typeof window !== `undefined`) {
        let currentSlide = document.querySelector('.slick-slide.slick-active');
        let animateContent = currentSlide.querySelectorAll('.js-animate-sliding')
        currentSlide.querySelector('.slide-up')
        console.log(currentSlide.querySelector('.slide-up'))
        animateContent.forEach(elem => {
          elem.classList.add(`slide-${elem.dataset.slide}`)
        });
      }
    },
  };
  return (
    <Hero fullHeight={true} className={`${className}`}>

      <Slider {...settings}>

        <div>
          <div className={`hero-image`} style={{ backgroundImage: `url(https://images.unsplash.com/photo-1562575214-da9fcf59b907?ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80)` }} />
          <Container className={`flex-block`}>
            <div className={'hero-text flex-block flex-column flex-center'}>
              <h3 className={`block__sub-title block text-left js-animate-sliding js-delay-0 center mb1`} data-slide='down'>Nos Licences</h3>
              <h2 className={`block__title block  text-left js-animate-sliding js-delay-1 center mb1`} data-slide='left'>Licence En Télécommunication </h2>
              <div className={`hero__action block js-animate-sliding js-delay-2`} data-slide='up'>
                <AniLink
                  paintDrip
                  hex={`#004197`}
                  to={`/sample-page/`}
                  className={`card-ui__link radius-1 left`}>
                  En Savoir <FontAwesomeIcon icon={faPlus} />
              </AniLink>
              </div>
            </div>
          </Container>
        </div>
        <div>
          <Container className={`flex-block`}>
            <div className={'hero-text flex-block flex-column flex-center'}>
              <h3 className={`block__sub-title block text-left js-animate-sliding js-delay-0 center mb1`} data-slide='down'>Nos Licences</h3>
              <h2 className={`block__title block js-animate-sliding js-delay-1 text-left center mb1`} data-slide='left'>Licence En Informatique</h2>
              <div className={`hero__action block`}>
                <AniLink
                  paintDrip
                  hex={`#004197`}
                  to={`/sample-page/`}
                  className={`card-ui__link radius-1 left js-animate-sliding js-delay-2`} data-slide='up'>
                  En Savoir <FontAwesomeIcon icon={faPlus} />
              </AniLink>
              </div>
            </div>
          </Container>
          <div className={`hero-image`} style={{ backgroundImage: `url(https://images.unsplash.com/photo-1530971013997-e06bb52a2372?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=986&q=80)` }} />
        </div>
        <div>
          <Container className={`flex-block`}>
            <div className={'hero-text flex-block flex-column flex-center'}>
              <h3 className={`block__sub-title block text-left js-animate-sliding js-delay-0 center mb1`} data-slide='down'>Nos Licences</h3>
              <h2 className={`block__title block js-animate-sliding js-delay-1 text-left center mb1`} data-slide='left'>Licence En Électronique</h2>
              <div className={`hero__action block js-animate-sliding js-delay-2`} data-slide='up'>
                <AniLink
                  paintDrip
                  hex={`#004197`}
                  to={`/sample-page/`}
                  className={`card-ui__link radius-1 left`}>
                  En Savoir <FontAwesomeIcon icon={faPlus} />
              </AniLink>
              </div>
            </div>
          </Container>
          <div className={`hero-image`} style={{ backgroundImage: `url(https://images.unsplash.com/photo-1575296505699-7648cf327b3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=925&q=80)` }} />
        </div>
        <div>
          <Container className={`flex-block`}>
            <div className={'hero-text flex-block flex-column flex-center'}>
              <h3 className={`block__sub-title block text-left js-animate-sliding js-delay-0 center mb1`} data-slide='down'>Nos Licences</h3>
              <h2 className={`block__title block js-animate-sliding js-delay-1 text-left center mb1`} data-slide='left'>Licence En Chimie</h2>
              <div className={`hero__action block js-animate-sliding js-delay-2`} data-slide='up'>
                <AniLink
                  paintDrip
                  hex={`#004197`}
                  to={`/sample-page/`}
                  className={`card-ui__link radius-1 left`}>
                  En Savoir <FontAwesomeIcon icon={faPlus} />
                </AniLink>
              </div>
            </div>
          </Container>
            <div className={`hero-image`} style={{ backgroundImage: `url(https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80)` }} />
        </div>
        
        
        {/* <div>
          <Container className={`flex-block`}>
            <div className={'hero-text flex-block flex-column flex-center'}>
              <h3 className={`block__sub-title block text-left  center mb1`}>Study for tomorow</h3>
              <h2 className={`block__title block  text-left center mb1`}>We Provide Great Education</h2>
              <div className={`hero__action block js-animate-sliding`}>
                <AniLink
                  paintDrip
                  hex={`#004197`}
                  to={`/sample-page/`}
                  className={`card-ui__link radius-1 left`}>
                  Licence Informatique
              </AniLink>
              </div>
            </div>
            <div className={`hero-image js-animate-sliding js-animate-sliding-image`} style={{ backgroundImage: `url(${AboutUs})` }} />
          </Container>
        </div> */}

      </Slider>


      {
        //   <div className={`flex-block`}>
        //   <div className={'hero-text flex-block flex-column flex-center'}>
        //     <h3 className={`block__sub-title block text-left js-animate center mb1`}>Study for tomorow</h3>
        //     <h2 className={`block__title block js-animate text-left center mb1`}>We Provide Great Education</h2>
        //     <div className={`hero__action block js-animate`}>
        //       <AniLink
        //         paintDrip
        //         hex={`#004197`}
        //         to={`/sample-page/`}
        //         className={`card-ui__link radius-0 left`}>
        //         Licence Informatique
        //       </AniLink>
        //     </div>
        //   </div>
        //   <div className={`hero-image js-animate js-animate-image`} style={{ backgroundImage: `url(${AboutUs})` }} />
        // </div>
      }
      {/* <CustomSlick data={data} /> this is the slider */}


      {/* <Slider className={'wrapper__block pt1'} data={data} /> */}
      {/* <Carousel className={'wrapper__block pt1'} data={data} /> */}
    </Hero>
  )
}
