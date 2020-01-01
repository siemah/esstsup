import React, { useRef, useState, } from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes, faSortDown, faAngleDown, } from '@fortawesome/free-solid-svg-icons'

import { Container, } from './layout/grid';
import { Button, } from './layout/form';

import Logo from '../assets/images/logo-white-esst.png';

import '../assets/css/header.css';

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
    <header className={`main--menu__wrapper`}>
      <nav className={`main--menu__block center`}>
        <Container className={`flex-block relative`}>
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
            "
           to={`/`} className={'brand-logo left'}>
            <img className={`logo__image mb0`} src={Logo} alt={`esst logo`} />
          </AniLink>
          <Button onClick={onToggleMenu} className={`main-menu__toggle-button right ${showMobileMenu ? 'show' : ''}`}>
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
              <AniLink cover
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
                to={`/sample-page/`} className={`row-menu__link`}>
                A Propos
              </AniLink>
            </li>
            <li className={`row-menu__item`}>
              <AniLink cover
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
                to={`#`} className={`row-menu__link`}>
                LMD
                <FontAwesomeIcon icon={faAngleDown} />
              </AniLink>
              <ul className={'column-menu m0'}>
                <li className={`row-menu__item block m0`}>
                  <AniLink cover
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
                    to={`/sample-page/`} className={`row-menu__link`}>
                    M I
                  </AniLink>
                </li>
                <li className={`row-menu__item block m0`}>
                  <AniLink cover
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
                    to={`/sample-page/`} className={`row-menu__link`}>
                    S T
                  </AniLink>
                </li>
                <li className={`row-menu__item block m0`}>
                    <AniLink cover
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
                      to={`/sample-page/`} className={`row-menu__link`}>
                      S M
                    </AniLink>
                  </li>
              </ul>
            </li>
            <li className={`row-menu__item`}>
              <AniLink cover
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
                to={`#`} className={`row-menu__link`}>
                Formation continue
                <FontAwesomeIcon icon={faAngleDown} />
              </AniLink>
              <ul className={'column-menu m0'}>
                <li className={`row-menu__item block m0`}>
                  <AniLink cover
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
                    to={`/sample-page/`} className={`row-menu__link`}>
                    Informa
                  </AniLink>
                </li>
                <li className={`row-menu__item block m0`}>
                  <AniLink cover
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
                    to={`/sample-page/`} className={`row-menu__link`}>
                    Medical
                  </AniLink>
                </li>
                <li className={`row-menu__item block m0`}>
                  <AniLink cover
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
                    to={`/sample-page/`} className={`row-menu__link`}>
                    Telecom
                  </AniLink>
                </li>
                <li className={`row-menu__item block m0`}>
                  <AniLink cover
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
                    to={`/sample-page/`} className={`row-menu__link`}>
                    Pharma
                  </AniLink>
                </li>
              </ul>
            </li>
            <li className={`row-menu__item`}>
              <AniLink cover
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
                to={`/sample-page/`} className={`row-menu__link`}>
                Accueil
              </AniLink>
            </li>
            <li className={`row-menu__item`}>
              <AniLink cover
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
                to={`/sample-page/`} className={`row-menu__link`}>
                Partenaires
              </AniLink>
            </li>
            <li className={`row-menu__item`}>
              <AniLink cover
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
                to={`/sample-page/`} className={`row-menu__link`}>
                Contact
              </AniLink>
            </li>
          </ul>
          <div className={`wrapper-mobile__menu ${showMobileMenu ? 'show' : ''}`} onClick={onToggleMenu} />
        </Container>
        <ul ref={listMemu} className={`mobile-menu row-menu m0 flex-block flex-column`}>
          <li className={`row-menu__item`}>
            <AniLink cover
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
              to={`/sample-page/`} className={`row-menu__link`}>
              Accueil
            </AniLink>
          </li>
          <li className={`row-menu__item`}>
            <AniLink cover
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
              to={`/sample-page/`} className={`row-menu__link`}>
              A Propos
            </AniLink>
          </li>
          <li className={`row-menu__item`}>
            <AniLink cover
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
              to={`#`} className={`row-menu__link`}>
              LMD
              <FontAwesomeIcon icon={faAngleDown} />
            </AniLink>
            <ul className={'column-menu m0'}>
              <li className={`row-menu__item block m0`}>
                <AniLink cover
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
                  to={`/sample-page/`} className={`row-menu__link`}>
                  M I
                </AniLink>
              </li>
              <li className={`row-menu__item block m0`}>
                <AniLink cover
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
                  to={`/sample-page/`} className={`row-menu__link`}>
                  S T
                </AniLink>
              </li>
              <li className={`row-menu__item block m0`}>
                  <AniLink cover
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
                    to={`/sample-page/`} className={`row-menu__link`}>
                    S M
                  </AniLink>
                </li>
            </ul>
          </li>
          <li className={`row-menu__item`}>
            <AniLink cover
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
              to={`#`} className={`row-menu__link`}>
              Formation continue
              <FontAwesomeIcon icon={faAngleDown} />
            </AniLink>
            <ul className={'column-menu m0'}>
              <li className={`row-menu__item block m0`}>
                <AniLink cover
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
                  to={`/sample-page/`} className={`row-menu__link`}>
                  Informa
                </AniLink>
              </li>
              <li className={`row-menu__item block m0`}>
                <AniLink cover
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
                  to={`/sample-page/`} className={`row-menu__link`}>
                  Medical
                </AniLink>
              </li>
              <li className={`row-menu__item block m0`}>
                <AniLink cover
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
                  to={`/sample-page/`} className={`row-menu__link`}>
                  Telecom
                </AniLink>
              </li>
              <li className={`row-menu__item block m0`}>
                <AniLink cover
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
                  to={`/sample-page/`} className={`row-menu__link`}>
                  Pharma
                </AniLink>
              </li>
            </ul>
          </li>
          <li className={`row-menu__item`}>
            <AniLink cover
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
              to={`/sample-page/`} className={`row-menu__link`}>
              Partenaires
            </AniLink>
          </li>
          <li className={`row-menu__item`}>
            <AniLink cover
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
              to={`/sample-page/`} className={`row-menu__link`}>
              Contact
            </AniLink>
          </li>
        </ul>
          
      </nav>
    </header>
  );
}

export default Header;
