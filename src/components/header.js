import React, { useRef, useState, } from "react";
// import Link from "gatsby-plugin-transition-link/Link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes, faSortDown, faAngleDown, } from '@fortawesome/free-solid-svg-icons'

import { Container, } from './layout/grid';
import { Button, } from './layout/form';

import Logo from '../assets/images/logo-white-esst.png';

import '../assets/css/header.css';
import { Link } from "gatsby";

/**
 * Header menu
 * @param {props} props of react component
 * @namespace agence62
 * @name Header
 * @author siemah
 * @version 0.1.0
 * @see react doc
 */
const Header = (props) => {

  const listMemu = useRef();
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  /**
   * display/hide menu list depend on previous state
   * @param {DOMEvent} e domevent
   */
  const onToggleMenu = e => {
    listMemu.current.classList.toggle('scaleUp');
    setShowMobileMenu(!showMobileMenu);
  }

  return (
    <header className={``}>
      <nav className={`main--menu__wrapper main--menu__block`}>
        <Container className={`flex-block relative`}>
          <Link
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
            "
           to={`/`} className={'brand-logo left'}>
            <img className={`logo__image mb0`} src={Logo} alt={`esst logo`} />
          </Link>
          <Button onClick={onToggleMenu} className={`main-menu__toggle-button bg-blue right ${showMobileMenu ? 'show' : ''}`}>
            {
              showMobileMenu 
                ? <FontAwesomeIcon icon={faTimes} />
                : <FontAwesomeIcon icon={faBars} />
            }
          </Button>
          {/* <form className={`search-form__block mb0 right`}>
            <FormField name={`search`} placeholder={'Recherche ..'} parentClassName={'search-form__input-container mt0'} className={`right search-form__input`} />
            <Button className={`search-form__button right`}>
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </form> */}
          <ul className={`row-menu m0`}>
            <li className={`row-menu__item`}>
              <Link cover
                direction="up"
                duration={1.5}
                bg="
                  /*url(https://source.unsplash.com/random) */
                  center / cover   /* position / size */
                  no-repeat        /* repeat */
                  fixed            /* attachment */
                  padding-box      /* origin */
                  content-box      /* clip */
                  var(--purple)            /* color */
                " 
                to={`/`} className={`row-menu__link`}>
                Accueil
              </Link>
            </li>
            <li className={`row-menu__item`}>
              <Link cover
                direction="up"
                duration={1.5}
                bg="
                  /*url(https://source.unsplash.com/random) */
                  center / cover   /* position / size */
                  no-repeat        /* repeat */
                  fixed            /* attachment */
                  padding-box      /* origin */
                  content-box      /* clip */
                  var(--purple)            /* color */
                " 
                to={`/a-propos-de-lesst/`} className={`row-menu__link`}>
                A Propos
              </Link>
            </li>
            <li className={`row-menu__item`}>
              <a cover
                direction="up"
                duration={1.5}
                bg="
                  /*url(https://source.unsplash.com/random) */
                  center / cover   /* position / size */
                  no-repeat        /* repeat */
                  fixed            /* attachment */
                  padding-box      /* origin */
                  content-box      /* clip */
                  var(--purple)            /* color */
                " 
                href={`#`}
                className={`row-menu__link`}>
                LMD
                <FontAwesomeIcon icon={faAngleDown} />
              </a>
              <ul className={'column-menu m0'}>
                <li className={`row-menu__item block m0`}>
                  <Link cover
                    direction="up"
                    duration={1.5}
                    bg="
                      /*url(https://source.unsplash.com/random) */
                      center / cover   /* position / size */
                      no-repeat        /* repeat */
                      fixed            /* attachment */
                      padding-box      /* origin */
                      content-box      /* clip */
                      var(--purple)            /* color */
                    " 
                    to={`/`} className={`row-menu__link`}>
                    M I
                  </Link>
                </li>
                <li className={`row-menu__item block m0`}>
                  <Link cover
                    direction="up"
                    duration={1.5}
                    bg="
                      /*url(https://source.unsplash.com/random) */
                      center / cover   /* position / size */
                      no-repeat        /* repeat */
                      fixed            /* attachment */
                      padding-box      /* origin */
                      content-box      /* clip */
                      var(--purple)            /* color */
                    " 
                    to={`/`} className={`row-menu__link`}>
                    S T
                  </Link>
                </li>
                <li className={`row-menu__item block m0`}>
                    <Link cover
                      direction="up"
                      duration={1.5}
                      bg="
                        /*url(https://source.unsplash.com/random) */
                        center / cover   /* position / size */
                        no-repeat        /* repeat */
                        fixed            /* attachment */
                        padding-box      /* origin */
                        content-box      /* clip */
                        var(--purple)            /* color */
                      " 
                      to={`/`} className={`row-menu__link`}>
                      S M
                    </Link>
                  </li>
              </ul>
            </li>
            <li className={`row-menu__item`}>
              <Link cover
                direction="up"
                duration={1.5}
                bg="
                  /*url(https://source.unsplash.com/random) */
                  center / cover   /* position / size */
                  no-repeat        /* repeat */
                  fixed            /* attachment */
                  padding-box      /* origin */
                  content-box      /* clip */
                  var(--purple)            /* color */
                " 
                to={`/`} className={`row-menu__link`}>
                Formation continue
                <FontAwesomeIcon icon={faAngleDown} />
              </Link>
              <ul className={'column-menu m0'}>
                <li className={`row-menu__item block m0`}>
                  <Link cover
                    direction="up"
                    duration={1.5}
                    bg="
                      /*url(https://source.unsplash.com/random) */
                      center / cover   /* position / size */
                      no-repeat        /* repeat */
                      fixed            /* attachment */
                      padding-box      /* origin */
                      content-box      /* clip */
                      var(--purple)            /* color */
                    " 
                    to={`/`} className={`row-menu__link`}>
                    Informa
                  </Link>
                </li>
                <li className={`row-menu__item block m0`}>
                  <Link cover
                    direction="up"
                    duration={1.5}
                    bg="
                      /*url(https://source.unsplash.com/random) */
                      center / cover   /* position / size */
                      no-repeat        /* repeat */
                      fixed            /* attachment */
                      padding-box      /* origin */
                      content-box      /* clip */
                      var(--purple)            /* color */
                    " 
                    to={`/`} className={`row-menu__link`}>
                    Medical
                  </Link>
                </li>
                <li className={`row-menu__item block m0`}>
                  <Link cover
                    direction="up"
                    duration={1.5}
                    bg="
                      /*url(https://source.unsplash.com/random) */
                      center / cover   /* position / size */
                      no-repeat        /* repeat */
                      fixed            /* attachment */
                      padding-box      /* origin */
                      content-box      /* clip */
                      var(--purple)            /* color */
                    " 
                    to={`/`} className={`row-menu__link`}>
                    Telecom
                  </Link>
                </li>
                <li className={`row-menu__item block m0`}>
                  <Link cover
                    direction="up"
                    duration={1.5}
                    bg="
                      /*url(https://source.unsplash.com/random) */
                      center / cover   /* position / size */
                      no-repeat        /* repeat */
                      fixed            /* attachment */
                      padding-box      /* origin */
                      content-box      /* clip */
                      var(--purple)            /* color */
                    " 
                    to={`/`} className={`row-menu__link`}>
                    Pharma
                  </Link>
                </li>
              </ul>
            </li>
            <li className={`row-menu__item`}>
              <Link cover
                direction="up"
                duration={1.5}
                bg="
                  /*url(https://source.unsplash.com/random) */
                  center / cover   /* position / size */
                  no-repeat        /* repeat */
                  fixed            /* attachment */
                  padding-box      /* origin */
                  content-box      /* clip */
                  var(--purple)            /* color */
                " 
                to={`/`} className={`row-menu__link`}>
                Partenaires
              </Link>
            </li>
            <li className={`row-menu__item`}>
              <Link cover
                direction="up"
                duration={1.5}
                bg="
                  /*url(https://source.unsplash.com/random) */
                  center / cover   /* position / size */
                  no-repeat        /* repeat */
                  fixed            /* attachment */
                  padding-box      /* origin */
                  content-box      /* clip */
                  var(--purple)            /* color */
                " 
                to={`/contact/`} className={`row-menu__link`}>
                Contact
              </Link>
            </li>
            <li className={`row-menu__item bg-blue right`}>
              <Link cover
                direction="up"
                duration={1.5}
                bg="
                  /*url(https://source.unsplash.com/random) */
                  center / cover   /* position / size */
                  no-repeat        /* repeat */
                  fixed            /* attachment */
                  padding-box      /* origin */
                  content-box      /* clip */
                  var(--purple)            /* color */
                " 
                to={`/preinscription/`} className={`row-menu__link`}>
                Preinscription
              </Link>
            </li>
          </ul>
          <div className={`wrapper-mobile__menu ${showMobileMenu ? 'show' : ''}`} onClick={onToggleMenu} />
        </Container>
      </nav>
      <ul ref={listMemu} className={`mobile-menu row-menu m0 flex-block flex-column`}>
          <li className={`row-menu__item`}>
            <Link cover
              direction="up"
              duration={1.5}
              bg="
                /*url(https://source.unsplash.com/random) */
                center / cover   /* position / size */
                no-repeat        /* repeat */
                fixed            /* attachment */
                padding-box      /* origin */
                content-box      /* clip */
                var(--purple)            /* color */
              " 
              to={`/`} className={`row-menu__link`}>
              Accueil
            </Link>
          </li>
          <li className={`row-menu__item`}>
            <Link cover
              direction="up"
              duration={1.5}
              bg="
                /*url(https://source.unsplash.com/random) */
                center / cover   /* position / size */
                no-repeat        /* repeat */
                fixed            /* attachment */
                padding-box      /* origin */
                content-box      /* clip */
                var(--purple)            /* color */
              " 
              to={`/`} className={`row-menu__link`}>
              A Propos
            </Link>
          </li>
          <li className={`row-menu__item`}>
            <Link cover
              direction="up"
              duration={1.5}
              bg="
                /*url(https://source.unsplash.com/random) */
                center / cover   /* position / size */
                no-repeat        /* repeat */
                fixed            /* attachment */
                padding-box      /* origin */
                content-box      /* clip */
                var(--purple)            /* color */
              " 
              to={`/`} className={`row-menu__link`}>
              LMD
              <FontAwesomeIcon icon={faAngleDown} />
            </Link>
            <ul className={'column-menu m0'}>
              <li className={`row-menu__item block m0`}>
                <Link cover
                  direction="up"
                  duration={1.5}
                  bg="
                    /*url(https://source.unsplash.com/random) */
                    center / cover   /* position / size */
                    no-repeat        /* repeat */
                    fixed            /* attachment */
                    padding-box      /* origin */
                    content-box      /* clip */
                    var(--purple)            /* color */
                  " 
                  to={`/`} className={`row-menu__link`}>
                  M I
                </Link>
              </li>
              <li className={`row-menu__item block m0`}>
                <Link cover
                  direction="up"
                  duration={1.5}
                  bg="
                    /*url(https://source.unsplash.com/random) */
                    center / cover   /* position / size */
                    no-repeat        /* repeat */
                    fixed            /* attachment */
                    padding-box      /* origin */
                    content-box      /* clip */
                    var(--purple)            /* color */
                  " 
                  to={`/`} className={`row-menu__link`}>
                  S T
                </Link>
              </li>
              <li className={`row-menu__item block m0`}>
                  <Link cover
                    direction="up"
                    duration={1.5}
                    bg="
                      /*url(https://source.unsplash.com/random) */
                      center / cover   /* position / size */
                      no-repeat        /* repeat */
                      fixed            /* attachment */
                      padding-box      /* origin */
                      content-box      /* clip */
                      var(--purple)            /* color */
                    " 
                    to={`/`} className={`row-menu__link`}>
                    S M
                  </Link>
                </li>
            </ul>
          </li>
          <li className={`row-menu__item`}>
            <a cover
              direction="up"
              duration={1.5}
              bg="
                /*url(https://source.unsplash.com/random) */
                center / cover   /* position / size */
                no-repeat        /* repeat */
                fixed            /* attachment */
                padding-box      /* origin */
                content-box      /* clip */
                var(--purple)            /* color */
              " 
              href={`#`} className={`row-menu__link`}>
              Formation continue
              <FontAwesomeIcon icon={faAngleDown} />
            </a>
            <ul className={'column-menu m0'}>
              <li className={`row-menu__item block m0`}>
                <Link cover
                  direction="up"
                  duration={1.5}
                  bg="
                    /*url(https://source.unsplash.com/random) */
                    center / cover   /* position / size */
                    no-repeat        /* repeat */
                    fixed            /* attachment */
                    padding-box      /* origin */
                    content-box      /* clip */
                    var(--purple)            /* color */
                  " 
                  to={`/`} className={`row-menu__link`}>
                  Informa
                </Link>
              </li>
              <li className={`row-menu__item block m0`}>
                <Link cover
                  direction="up"
                  duration={1.5}
                  bg="
                    /*url(https://source.unsplash.com/random) */
                    center / cover   /* position / size */
                    no-repeat        /* repeat */
                    fixed            /* attachment */
                    padding-box      /* origin */
                    content-box      /* clip */
                    var(--purple)            /* color */
                  " 
                  to={`/`} className={`row-menu__link`}>
                  Medical
                </Link>
              </li>
              <li className={`row-menu__item block m0`}>
                <Link cover
                  direction="up"
                  duration={1.5}
                  bg="
                    /*url(https://source.unsplash.com/random) */
                    center / cover   /* position / size */
                    no-repeat        /* repeat */
                    fixed            /* attachment */
                    padding-box      /* origin */
                    content-box      /* clip */
                    var(--purple)            /* color */
                  " 
                  to={`/`} className={`row-menu__link`}>
                  Telecom
                </Link>
              </li>
              <li className={`row-menu__item block m0`}>
                <Link cover
                  direction="up"
                  duration={1.5}
                  bg="
                    /*url(https://source.unsplash.com/random) */
                    center / cover   /* position / size */
                    no-repeat        /* repeat */
                    fixed            /* attachment */
                    padding-box      /* origin */
                    content-box      /* clip */
                    var(--purple)            /* color */
                  " 
                  to={`/`} className={`row-menu__link`}>
                  Pharma
                </Link>
              </li>
            </ul>
          </li>
          <li className={`row-menu__item`}>
            <Link cover
              direction="up"
              duration={1.5}
              bg="
                /*url(https://source.unsplash.com/random) */
                center / cover   /* position / size */
                no-repeat        /* repeat */
                fixed            /* attachment */
                padding-box      /* origin */
                content-box      /* clip */
                var(--purple)            /* color */
              " 
              to={`/`} className={`row-menu__link`}>
              Partenaires
            </Link>
          </li>
          <li className={`row-menu__item`}>
            <Link cover
              direction="up"
              duration={1.5}
              bg="
                /*url(https://source.unsplash.com/random) */
                center / cover   /* position / size */
                no-repeat        /* repeat */
                fixed            /* attachment */
                padding-box      /* origin */
                content-box      /* clip */
                var(--purple)            /* color */
              " 
              to={`/contact/`} className={`row-menu__link`}>
              Contact
            </Link>
          </li>
          <li className={`row-menu__item`}>
            <Link cover
              direction="up"
              duration={1.5}
              bg="
                /*url(https://source.unsplash.com/random) */
                center / cover   /* position / size */
                no-repeat        /* repeat */
                fixed            /* attachment */
                padding-box      /* origin */
                content-box      /* clip */
                var(--purple)            /* color */
              " 
              to={`/preinscription/`} className={`row-menu__link`}>
              Preinscription
            </Link>
          </li>
        </ul>
    </header>
  );
}

export default Header;
