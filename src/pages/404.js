import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Img404 from '../assets/images/404.svg';
import { Container } from "../components/layout/grid";

import '../assets/css/404.css';
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className={`page-404-container center`}>
      <Container>
        <img src={Img404} className={'404-img'} alt={`404`} />
        <h4>Oops! Cette page n'existe pas!</h4>
        <div className={`card__action`}>
          <Link to={`/`} className={`card__link-ui color-white`}>
            Me mene vers la page d'accueil
          <FontAwesomeIcon icon={faLongArrowAltRight} />
          </Link>
        </div>
      </Container>
    </div>

  </Layout>
)

export default NotFoundPage
