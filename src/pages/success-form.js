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

  return (
    <Layout>

      <Container>
        <Row>
          <Col s={12}>
            <h1>
              Message envoye avec success
            </h1>
          </Col>
        </Row>
      </Container>

    </Layout>
  );
}

export default SuccessFormPage
