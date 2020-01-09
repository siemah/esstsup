import React from 'react'
import { Link } from 'gatsby';

import { Container, Row, Col } from '../layout/grid'

import AboutUsImage from '../../assets/images/about-us.png';

export default function RowBlock({ containerClassName='', children, secondHalfClassName='', titleClassName='', imageSource, firstHalfClassName='', subtitle, title, content, contentComponent: C, link, isRight=false}) {
  const MainContent = () => content ? <p>{content}</p> : <C />
  return (
    <div className={`wrapper__block fake-bg${isRight ? '-right' : ''} ${containerClassName}`}>
        <Container>
          <Row className={`mb0 flex-block block__row`}>
            <Col s={12} m={5} className={`js-animate-image ${firstHalfClassName}`}>
              {
                imageSource 
                ? <img src={imageSource} className={`block__image mb0 radius-0`} alt={`reading about us`} />
                : children
              }
            </Col>
            <Col s={12} m={7} className={`block__description flex-block flex-column flex-center ${secondHalfClassName}`}>
              {
                subtitle &&
                <h3 className={`block__subtitle-title js-animate  block mb1`}>{subtitle}</h3>
              }
              <h2 className={`block__title block ${titleClassName} js-animate mb1`} >
                {title}
              </h2>
              <div className={'block__content js-animate  block'}>
                <MainContent />
              </div>
              {
                link && (
                  <div className={`block__action block js-animate  m0`}>
                    <Link className={`block__link js-animate  form-field__button`} to={`${link}`}>En Savoir Plus</Link>
                  </div>
                )
              }
            </Col>
          </Row>
        </Container>
      </div>
  )
}
