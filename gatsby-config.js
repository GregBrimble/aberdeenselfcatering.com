module.exports = {
  siteMetadata: {
    title: `Self-Catering Accommodation | A & L Enterprises`,
    description: `Are you looking for self-catering accommodation in the Aberdeen area? Look no further. Contact A & L Enterprises today. We provide affordable services.`,
    copyright: "A & L Enterprises",
    contact: {
      phoneNumbers: [
        { value: "+44 1224 868 957", type: "landline" },
        { value: "+44 7927 938 834", type: "mobile" },
      ],
      emailAddress: "info@aberdeenselfcatering.com",
    },
    pricing: "£250 per week",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    //   },
    // },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `properties`,
        path: `${__dirname}/properties/`,
      },
    },
    "gatsby-remark-images",
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1200,
            },
          },
        ],
        defaultLayouts: {
          default: require.resolve("./src/templates/property.js"),
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/properties/images`,
      },
    },
  ],
  pathPrefix: "/aberdeenselfcatering.com",
}
