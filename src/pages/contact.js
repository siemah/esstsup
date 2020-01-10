import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import '../assets/css/home.css';

import { Row, Container, Col } from "../components/layout/grid";
import RegisterForm from '../components/RegisterForm';
import { Link } from "gatsby";
import Map from "../components/Map";

import '../assets/css/contact.css'


const ContactPage = ({ data }) => {

  return (
    <Layout>
      <SEO title={`Contact`} />
      <div className={`fake-block`} />
      <div className='contact-page'>

        <div className={`map-form__block flex-block`}>
          <div className='map-block'>
            <Map
              mapboxApiAccessToken={'pk.eyJ1IjoiaGFtc2lrcGFzdG9yZSIsImEiOiJjanV1M2oxMDQwZGdnNDRvYWd2cXZ1MzgzIn0.x18nN52h37i3Lbeah58Zaw'}
              label="Siège de l'esst" />
          </div>
          <div className={`form-block`}>
            <RegisterForm title={'Contact'} />
          </div>
        </div>

        <Container className={`pt2`}>
          <Row>
            <Col s={12} m={6}>
              <h4 className={`mb1`}>Contactez nous</h4>
              <ul className="list-block m0 p0 mb1">
                <li className="lite-item mb0 opacity-0 js-slide-from-down">
                  Par Téléphone: <a href="tel:0213799931699" className='contact-link'>(0) 7 99 93 16 99</a> ou{` `}
                  <a href="tel:021323300801" className='contact-link'>(0) 23 30 08 01</a>
                </li>
                <li className="lite-item mb0 opacity-0 js-slide-from-down">
                  Par Email: <a href="mailto:contact@esst-sup.com" className='contact-link'>contact@esst-sup.com</a>
                </li>
              </ul>
              </Col>
              <Col s={12} m={6}>
              <h4 className={`mb1`}>Vous pouvez nous trouver</h4>
              <ul>
                <li className="lite-item mb0 opacity-0 js-slide-from-down">
                  Sur Facebook: <a href="https://www.facebook.com/esst-sup" className='contact-link'>ESSTSUP</a>
                </li>
                <li className="lite-item mb0 opacity-0 js-slide-from-down">
                  Sur Instagram: <a href="https://www.instagram.com/esst_sup/" className='contact-link'>ESST_SUP</a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>

      </div>
    </Layout>
  );
}
// export const pageQuery = graphql`
//   query MapboxApiAccessToken {
//     site {
//       siteMetadata {
//         mapboxApiAccessToken
//       }
//     }
//   }
// `

export default ContactPage
