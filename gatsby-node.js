/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');

/**
 * create pages for wordpress pages and posts programmatically
 * @see gatsbyjs docs about createPages API
 */
exports.createPages = ({ graphql, actions }) => {

  const { createPage } = actions;


  const wordpressPages = new Promise(async (resolve, reject) => {

    try {
      // graphql query to retrieve all wordpress pages data
      const result = await graphql(`
        {
          allWordpressPage {
            edges {
              node {
                id
                path
                status
                template
              }
            }
          }
        }
      `);
      // check if there is any errors
      if (result.errors) {
        throw new Error(result.errors);
      }
      // Pages data gotten from wordpress headless
      const { allWordpressPage, } = result.data;
      // Page template paths.
      const pageTemplate = path.resolve(`./src/templates/page.js`)
      allWordpressPage.edges.forEach(edge => {
        // Gatsby uses Redux to manage its internal state.
        // Plugins and sites can use functions like "createPage"
        // to interact with Gatsby.
        createPage({
          // Each page is required to have a `path` as well
          // as a template component. The `context` is
          // optional but is often necessary so the template
          // can query data specific to each page.
          path: edge.node.path,
          component: pageTemplate,
          context: {
            id: edge.node.id,
          },
        });
      });
      resolve();
    } catch (error) {
      console.log('------ERROR-----', error)
      reject(error)
    }

  });

  return Promise.all([wordpressPages]);
};