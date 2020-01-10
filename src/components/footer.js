import React, { useEffect, } from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMailBulk, faPhone, faMap, } from "@fortawesome/free-solid-svg-icons";

import { Container, Row, Col, } from './layout/grid';

import Logo from '../assets/images/logo-white-esst.png';
import Fb from '../assets/images/facebook.svg';
import Insta from '../assets/images/instagram.svg';

import '../assets/css/footer.css';

const isInViewport = element => {
  // check ig element has getBoundingClientRect function
  if (!('getBoundingClientRect' in element)) return true;
  let rect = element.getBoundingClientRect();
  return (
    rect.left >= 0 &&
    // rect.top >= 0 &&
    (rect.bottom - rect.height) <= (window.innerHeight || document.documentElement.clientHeight) //&&
    // rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

/**
 * Header menu
 * @param {props} props of react component
 * @namespace agence62
 * @name Header
 * @author siemah
 * @version 0.1.0
 * @see react doc
 */
const Footer = (props) => {

  const onScroll = e => {
    let _elms = document.querySelectorAll('.js-animate');
    let _images = document.querySelectorAll('.js-animate-image');
    _elms.forEach(element => {
      if (isInViewport(element))
        element.classList.add('slide-up');
    });
    _images.forEach(img => {
      if (isInViewport(img))
        img.classList.add('reveal-image');
    });
  }

  useEffect(() => {
    if (typeof window !== `undefined`) {
      window.addEventListener('scroll', onScroll);
      onScroll();
    }
    return () => {
      if (typeof window !== `undefined`) {
        window.removeEventListener('scroll', onScroll);
      }
    }
  });

  return (
    <footer className={`main-footer__block`}>
      <Container>
        <div className={`footer__top-block  relative`}>
          <Row className={'mb0 footer-menu flex-block'}>
            <Col s={12} m={5} className={`footer__box-item p2`}>
              <Link to={`/`} className={'mb1'}>
                <img className={`logo__image mb1`} src={Logo} alt={`esst logo`} />
              </Link>
              <p className={`brand-description muted mb1`}>
                lorem ipsum dolor sit amet amek a winathana nigh amel.
                lorem ipsum dolor sit amet amek a winathana nigh amel.
            </p>
              {/* move this section to be in contact section on left of form */}
            </Col>
            <Col s={12} m={4} className={`footer__box-item p2 bg-darkblue`}>
              <h2 className={`footer__title uppercase mb1`}>Nos Formations</h2>
              <ul className={`list m0`}>
                <li className={`list-item mb1`} ><Link className={`list-link`} to={`/licence-en-telecommunication/`}>Licence en Télécommunication</Link></li>
                <li className={`list-item mb1`} ><Link className={`list-link`} to={`/licence-en-informatique/`}>Licence en Informatique </Link></li>
                <li className={`list-item mb1`} ><Link className={`list-link`} to={`/licence-en-electronique/`}>Licence en Électronique</Link></li>
                <li className={`list-item mb1`} ><Link className={`list-link`} to={`/licence-en-chimie/`}>Licence en Chimie</Link></li>
              </ul>
            </Col>
            <Col s={12} m={3} className={`footer__box-item p2 bg-darkenblue`}>
              <h2 className={`footer__title uppercase mb1`}>Réseaux Sociaux</h2>
              <ul className={`list m0`}>
                <li className={`list-item flex-block center mb1`} >
                  <div className={`card__icon-container flex-block flex-center center rounded mb0 `}>
                    <img width={20} src={Fb} alt={`reseaux social`} />
                  </div>
                  <a className={`list-link flex-block flex-center`} href={`https://www.facebook.com/esst-sup`}>ESSTSUP</a>
                </li>
                <li className={`list-item flex-block mb1 center`} >
                  <div className={`card__icon-container flex-block flex-center center rounded mb0 `}>
                    <img width={20} src={Insta} alt={`reseaux social`} />
                  </div>
                  <a className={`list-link flex-block flex-center`} href={`https://www.instagram.com/esst_sup/`}>ESST_SUP</a>
                </li>
              </ul>
            </Col>
          </Row>
        </div>
        <Row className={'mb0'}>
          <Col s={12}>
            <p className={`coyright__block mb0`}>
              Copyright @ 2019 Esst-sup. Tous les droits réservées.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
