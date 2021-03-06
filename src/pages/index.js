import React from "react";
import { graphql, Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import BlockIcon from "../components/home/BlockIcon";

import '../assets/css/home.css';

import RowBlock from "../components/home/RowBlock";
import { Row, Container, Col } from "../components/layout/grid";
import Card from "../components/home/Card";
import { faChalkboardTeacher, faBookReader, faBrain, faAtom, faGlobe, faBuilding, faPhone, faEnvelope, faMobile, faMap, faMapMarker, faMapMarkerAlt, faPlus, faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import HomeHero from "../components/home/HomeHero";

import TelecomIcon from '../assets/images/icons/telecom.svg';
import InfoIcon from '../assets/images/icons/info.svg';
import ElectroIcon from '../assets/images/icons/electro.svg';
import ChimieIcon from '../assets/images/icons/chimie.svg';
import Logo from '../assets/images/esst-logo.png';
import RegisterForm from "../components/RegisterForm";
import Gallery from "../components/home/Gallery";
import Carousel from "../components/Carousel";
import Testiminilas from "../components/home/Testiminilas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Link from "gatsby-plugin-transition-link/Link";

const IndexPage = ({ data }) => {
  const iconData1 = [
    {
      title: "Best Teachers",
      content: "We have best teachers ever here in Algiers",
      icon: faChalkboardTeacher,
      bgIconClassName: 'bg-lightpurple',
      iconColorClassName: 'color-darkpurple',
    },
    {
      title: "Best Teachers",
      content: "We have best teachers ever here in Algiers",
      icon: faBookReader,
      bgIconClassName: 'bg-lightpurple',
      iconColorClassName: 'color-pink',
    },
    {
      title: "Best Teachers",
      content: "We have best teachers ever here in Algiers",
      icon: faBrain,
      bgIconClassName: 'bg-lightpurple',
      iconColorClassName: 'color-purple',
    }
  ];
  const statisticsIcons = [
    {
      title: "Télécommunication",
      content: "Licence en",
      icon: faAtom,
      bgIconClassName: 'bg-lightblue',
      iconColorClassName: 'color-white',
      link: '/licence-genie-des-telecommunications-et-reseaux-gtr-licence-professionnalisante/',
    },
    {
      title: "Informatique",
      content: "Licence en",
      icon: faGlobe,
      bgIconClassName: 'bg-blue',
      iconColorClassName: 'color-white',
      link: '/licence-en-informatique/',
    },
    {
      title: "Électronique",
      content: "Licence en",
      icon: faBookReader,
      bgIconClassName: 'bg-pink',
      iconColorClassName: 'color-white',
      link: '/licence-en-electronique/',
    },
    {
      title: "Chimie",
      content: "Licence en",
      icon: faBuilding,
      bgIconClassName: 'bg-green',
      iconColorClassName: 'color-white',
      link: '/licence-en-chimie/',
    }
  ];
  const { allWordpressPage: wpPages } = data;

  const ContactContent = () => (
    <div className={``}>
      <h3 className={`color-blue`}>
        ÉCOLE SUPÉRIEURE DES SCIENCES ET TECHNOLOGIES (ESST)
      </h3>
      <ul className={`contacts-list m0 mb1`}>
        <li className={`js-animate slide-up mb0 flex-block`}>
          <div className={`card__icon-container flex-block flex-center center rounded mb0 `}>
            <FontAwesomeIcon icon={faMobile} className={`form-list__icon color-blue`} />
          </div>
          <div className={`flex-block flex-column  flex-center`}>
            <a className={`form-list__link color-darkenblue`} href={`tel://+213 (0) 7 99 93 16 99`}>+213 (0) 7 99 93 16 99</a>
            <a className={`form-list__link color-darkenblue`} href={`tel://+213 (0) 7 99 93 16 99`}>+213 (0) 7 99 93 16 99</a>
          </div>
        </li>
        <li className={`js-animate slide-up mb0 flex-block`}>
          <div className={`card__icon-container flex-block flex-center center rounded mb0 `}>
            <FontAwesomeIcon icon={faEnvelope} className={`form-list__icon color-pink`} />
          </div>
          <a className={`form-list__link flex-block flex-center color-darkenblue`} href={`mailto:contact@esst-sup.com`}>contact@esst-sup.com</a>
        </li>
        <li className={`js-animate slide-up mb0 flex-block`}>
          <div className={`card__icon-container flex-block flex-center center rounded mb0 `}>
            <FontAwesomeIcon icon={faMapMarkerAlt} className={`form-list__icon color-purple`} />
          </div>
          <a className={`form-list__link flex-block flex-center color-darkenblue`} href={`https://www.google.com/maps/place/Ecole+sup%C3%A9rieure+des+sciences+et+technologies+ESST/@36.739342,3.0009627,16z/data=!4m5!3m4!1s0x128fafb4df0b65b5:0x89de8edd6a7c4e29!8m2!3d36.739342!4d3.0053401`}>
            Adresse : ESST, 43 Chemin Sidi M’Barek, Oued Romane, 16104 El Achour - Alger
          </a>
        </li>
      </ul>
    </div>
  );

  return (
    <Layout>

      <SEO title="Home" />

      <HomeHero className={`home-hero wrapper__block relative pt0 pb0 mb0`} data={wpPages.edges || []} />

      <div className={`wrapper__block bg-lightgrey`}>
        <Container className={`about-us__container`}>
          <Row className={`mb0`}>
            <Col s={12} m={6} className={`dots-label__container`}>
              <h2 className={`main__title-block color-blue bg-lightgrey`}>À Propos De L’ESST</h2>
              <p className={`about-us__text-content`}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown printer took a galley.
            </p>
            </Col>
            <Col s={12} m={6} className={`about-us__image-container`}>
              <p className={`about-us__text-content`}>
                type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            </Col>
          </Row>
          <Row className={`about-us__text-block ml0`}>
            <Col s={12}>
              <Link to={`/a-propos-de-lesst/`} className={`about-us__link card-ui__link right`}>
                En Savoir <FontAwesomeIcon icon={faLongArrowAltRight} className={`link__icon`} />
              </Link>
            </Col>
          </Row>
        </Container>
      </div>

      <div className={`wrapper__block cards-container relative`}>
        <Container>
          <Row className={`mb0`}>
            <Col s={12} m={6} l={3} className={`mb2`}>
              <div className={`card-container`}>
                <div className={`card-icon__container center`}>
                  <img src={TelecomIcon} alt={'telecom'} />
                </div>
                <div className={'card-description__container'}>
                  <h3 className={`card__subtitle`}>Licence En</h3>
                  <h3 className={`card__title`}>Télécommunication</h3>
                </div>
                <div className={`card__action`}>
                  <Link to={`/licence-en-telecommunication/`}>
                    En Savoir <FontAwesomeIcon icon={faLongArrowAltRight} />
                  </Link>
                </div>
              </div>
            </Col>
            <Col s={12} m={6} l={3} className={`mb2`}>
              <div className={`card-container`}>
                <div className={`card-icon__container center`}>
                  <img src={InfoIcon} alt={'telecom'} />
                </div>
                <div className={'card-description__container'}>
                  <h3 className={`card__subtitle`}>Licence En</h3>
                  <h3 className={`card__title`}>Informatique</h3>
                </div>
                <div className={`card__action`}>
                  <Link to={`/licence-en-informatique/`}>
                    En Savoir <FontAwesomeIcon icon={faLongArrowAltRight} />
                  </Link>
                </div>
              </div>
            </Col>
            <Col s={12} m={6} l={3} className={`mb2`}>
              <div className={`card-container`}>
                <div className={`card-icon__container center`}>
                  <img src={ElectroIcon} alt={'telecom'} />
                </div>
                <div className={'card-description__container'}>
                  <h3 className={`card__subtitle`}>Licence En</h3>
                  <h3 className={`card__title`}>Électronique</h3>
                </div>
                <div className={`card__action`}>
                  <Link to={`/licence-en-electronique/`}>
                    En Savoir <FontAwesomeIcon icon={faLongArrowAltRight} />
                  </Link>
                </div>
              </div>
            </Col>
            <Col s={12} m={6} l={3}>
              <div className={`card-container`}>
                <div className={`card-icon__container center`}>
                  <img src={ChimieIcon} alt={'telecom'} />
                </div>
                <div className={'card-description__container'}>
                  <h3 className={`card__subtitle`}>Licence En</h3>
                  <h3 className={`card__title`}>Chimie</h3>
                </div>
                <div className={`card__action`}>
                  <Link to={`/licence-en-chimie/`}>
                    En Savoir <FontAwesomeIcon icon={faLongArrowAltRight} />
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* <div className={`wrapper__block icons-container bg-orange relative`}>
        <BlockIcon itemClassName={`center`} forMediumSize={2} forSmallSize={2} containerClassName={`container`} data={statisticsIcons} />
      </div> */}

      <div className={`wrapper__block bg-lightgrey`}>
        <Container className={`partenaire__container`}>
          <Row>
            <Col s={12} className={`dots-label__container`}>
              <h2 className={`main__title-block color-blue bg-lightgrey js-animate mb1`}>Nos Partenaires</h2>
            </Col>
          </Row>
          <Row>
            <div className={`partenaire__block`}>
              <Col s={6} m={3} className={`flex-block`}>
                <div className={`flex-item`}>
                  <img src={Logo} className={`mb0`} />
                </div>
              </Col>
              <Col s={6} m={3} className={`flex-block`}>
                <div className={`flex-item`}>
                  <img src={Logo} className={`mb0`} />
                </div>
              </Col>
              <Col s={6} m={3} className={`flex-block`}>
                <div className={`flex-item`}>
                  <img src={Logo} className={`mb0`} />
                </div>
              </Col>
              <Col s={6} m={3} className={`flex-block`}>
                <div className={`flex-item`}>
                  <img src={Logo} className={`mb0`} />
                </div>
              </Col>
            </div>
            <div className={`partenaire__block`}>
              <Col s={6} m={3} className={`flex-block`}>
                <div className={`flex-item`}>
                  <img src={Logo} className={`mb0`} />
                </div>
              </Col>
              <Col s={6} m={3} className={`flex-block`}>
                <div className={`flex-item`}>
                  <img src={Logo} className={`mb0`} />
                </div>
              </Col>
              <Col s={6} m={3} className={`flex-block`}>
                <div className={`flex-item`}>
                  <img src={Logo} className={`mb0`} />
                </div>
              </Col>
              <Col s={6} m={3} className={`flex-block`}>
                <div className={`flex-item`}>
                  <img src={Logo} className={`mb0`} />
                </div>
              </Col>
            </div>
          </Row>

        </Container>
      </div>

      <div className={``}>
        {/* <RowBlock
          isRight
          imageSource={Logo}
          link={`/`}
          firstHalfClassName={`flex-block flex-center`}
          subtitle={''}
          title={'À Propos De L’ESST'}
          content={`
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}
        /> */}
      </div>

      <RowBlock
        containerClassName={`wrapper__block `}
        children={<RegisterForm className={'bg-blue mb0'} />}
        isRight
        title={'Inscription et renseignements'}
        secondHalfClassName={`dots-label__container`}
        titleClassName={`main__title-block color-blue bg-white`}
        contentComponent={ContactContent}
      />
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    allWordpressPage {
      edges {
        node {
        id
        wordpress_id
        title
        path
        content
      }
    }
  }
}
`;

export default IndexPage
