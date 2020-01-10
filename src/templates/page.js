import React from "react"
import { graphql, } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { getBackendSEOSocialMetas, getBackendSEOMetas } from "../utils/seo";

import '../assets/css/page.css';
import { Container } from "../components/layout/grid";
import Hero from "../components/Hero";

const WordpressPage = ({ data, ...rest }) => {
  // handle wordpress page data
  const { mainDomain, } = data.site.siteMetadata;
  let { yoast_title, title, yoast_meta, content, path, } = data.wordpressPage;
  const socialMetas = getBackendSEOSocialMetas(yoast_meta, {
    mainDomain,
    path,
  });
  const metas = getBackendSEOMetas(yoast_meta);
console.log('data', data)
  return (
    <Layout>
      <SEO title={yoast_title} meta={socialMetas} lang={data.site.siteMetadata.lang} {...metas} />
      <Hero className={`mb0 wrapper__block`} fullHeight={false}>
        <Container className={`flex-block flex-center`}>
          <h1 className={`page__title center`}>{title}</h1>
        </Container>
      </Hero>
      <Container className={`wrapper__block`}>
        <article className={`page page-container`}>
          <div className={`page-container`} dangerouslySetInnerHTML={{ __html: content }} />
        </article>
      </Container>
    </Layout>
  );
}
export default WordpressPage;

// grqaghQL query to fetch current page data from 
// wordpress headless cms
export const pageQuery = graphql`
  query($id: String!) {
    wordpressPage(id: { eq: $id }) {
      id
      title
      path
      status
      yoast_title
      yoast_meta {
        name
        property
      }
      content
    }
    site {
      id
      siteMetadata {
        title
        mainDomain
        lang
      }
    }
  }
`