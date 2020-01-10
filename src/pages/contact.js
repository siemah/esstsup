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
            <RegisterForm />
          </div>
        </div>
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
