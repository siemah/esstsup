import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import '../assets/css/home.css';

import { Row, Container, Col } from "../components/layout/grid";
import { Link } from "gatsby";


const SuccessFormPage = () => {

  return (
    <Layout>
      <SEO title={`Message de success`} />
      <div style={{
        padding: '5rem 0',
        marginTop: '50px'
      }}>
        <Container className={`center`}>
          <Row>
            <Col s={12}>
              <h1>
                Message envoye avec success
            </h1>
              <div>
                <Link to={`/`} style={{
                  color: '#ffffff',
                  padding: '1rem',
                  fontWeight: 'bold'
                }} className={`card__link-ui bg-blue`}>
                  Retour vers la page d'accueil
              </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
}

export default SuccessFormPage
