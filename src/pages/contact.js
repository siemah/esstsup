import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import '../assets/css/home.css';

import { Row, Container, Col } from "../components/layout/grid";
import { Link } from "gatsby";
import Map from "../components/Map";


const ContactPage = ({ data }) => {

  return (
    <Layout>
      <SEO title={`Contact`} />
      <div className='map-block'>
        <Map
          mapboxApiAccessToken={'pk.eyJ1IjoiaGFtc2lrcGFzdG9yZSIsImEiOiJjanV1M2x4Y2YwMXM4NGRtdW04MXFlcXhlIn0.P8brIUb-4BqAbyBZXYPMYw'}
          label="Siège de l'esst" />
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
