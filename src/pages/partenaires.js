import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Img404 from '../assets/images/404.svg';
import { Container, Row, Col } from "../components/layout/grid";

import '../assets/css/404.css';
import CondorLogo from '../assets/images/partenaires/logo_condor.png';
import HuppLogo from '../assets/images/partenaires/logo_hupp.png';
import IcosnetLogo from '../assets/images/partenaires/logo_icosnet.png';
import MobilisLogo from '../assets/images/partenaires/logo_mobilis.png';
import SntfLogo from '../assets/images/partenaires/logo_sntf.png';
import NovaLogo from '../assets/images/partenaires/logo_nova.png';

const PartenairesPage = () => (
  <Layout>
    <SEO title="Partenaires" />
    <div className={`page-partenaires-container bg-lightgrey`}>
    <div className={`wrapper__block`}>
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
                  <img src={CondorLogo} alt={`condor`} className={`mb0`} />
                </div>
              </Col>
              <Col s={6} m={3} className={`flex-block`}>
                <div className={`flex-item`}>
                  <img src={NovaLogo} className={`mb0`} />
                </div>
              </Col>
              <Col s={6} m={3} className={`flex-block`}>
                <div className={`flex-item`}>
                  <img src={MobilisLogo} className={`mb0`} />
                </div>
              </Col>
              <Col s={6} m={3} className={`flex-block`}>
                <div className={`flex-item`}>
                  <img src={IcosnetLogo} className={`mb0`} />
                </div>
              </Col>
            </div>
            <div className={`partenaire__block`}>
              <Col s={6} m={3} className={`flex-block`}>
                <div className={`flex-item`}>
                  <img src={HuppLogo} className={`mb0`} />
                </div>
              </Col>
              <Col s={6} m={3} className={`flex-block`}>
                <div className={`flex-item`}>
                  <img src={SntfLogo} className={`mb0`} />
                </div>
              </Col>
            </div>
          </Row>

        </Container>
      </div>
    </div>

  </Layout>
)

export default PartenairesPage
