const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  siteMetadata: {
    title: `Esst`,
    description: `Website description.`,
    author: `@siemah`,
    mainDomain: 'https://esst-sup.com',
    lang: 'fr',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        /*
         * The base URL of the WordPress site without the trailingslash and the protocol. This is required.
         * Example : 'gatsbyjsexamplewordpress.wordpress.com' or 'www.example-site.com'
         */
        baseUrl: `${process.env.WORDPRESS_MAIN_URL}`,
        // The protocol. This can be http or https.
        protocol: `${process.env.WORDPRESS_PROTOCOL}`,
        // Indicates whether the site is hosted on wordpress.com.
        // If false, then the assumption is made that the site is self hosted.
        // If true, then the plugin will source its content on wordpress.com using the JSON REST API V2.
        // If your site is hosted on wordpress.org, then set this to false.
        hostingWPCOM: process.env.WORDPRESS_WPCOMHOSTING === 'true' ? true : false,
        useACF: process.env.WORDPRESS_ACF === 'true' ? true : false,
        verboseOutput: process.env.VERBOSE_OUTPUT === 'true' ? true : false,
        // Set how many pages are retrieved per API request.
        perPage: parseInt(process.env.WORDPRESS_PER_PAGE, 10),
        // Set how many simultaneous requests are sent at once.
        concurrentRequests: 10,
        // Set WP REST API routes whitelists
        // and blacklists using glob patterns.
        // Defaults to whitelist the routes shown
        // in the example below.
        // See: https://github.com/isaacs/minimatch
        // Example:  `["/*/*/comments", "/yoast/**"]`
        // ` will either include or exclude routes ending in `comments` and
        // all routes that begin with `yoast` from fetch.
        // Whitelisted routes using glob patterns
        includedRoutes: [
          "**/posts",
          "**/pages",
          "**/media",
          "**/menus",
          "/yoast/**",
          "/yoast/**",
          "/*/*/comments", 
        ],
        // use a custom normalizer which is applied after the built-in ones.
        normalizer: function({ entities }) {
          return entities
        },
      },
    },
    `gatsby-plugin-transition-link`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
