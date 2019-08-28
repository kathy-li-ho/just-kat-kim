module.exports = {
    siteMetadata: {
        title: `Just Kat Kim`,
        description: `A portfolio site`,
        author: `Katherine Kim, Kathy Li`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages`,
            },
        },
        {
            resolve: `gatsby-source-dropbox`,
            options: {
                accessToken: `-QYqjbZms2oAAAAAAAAhfl7J42f4FSiJ_j0zoFlq4PenqQLtrCF0cTKQA_stOvQ9`,
                extensions: ['.pdf', '.gif', '.jpg', '.png'],
                path: '',
                recursive: true,
            },
        },
        {
            resolve: 'gatsby-source-dropbox-paper',
            options: {
                access_token: `-QYqjbZms2oAAAAAAAAhnuo0RGzbl4HgmuinkVLu-142QhU38saTJ4vV931eyW83`,
                format: 'html',
            },
        },
        {
            resolve: `gatsby-plugin-postcss`,
            options: {
                postCssPlugins: [require(`postcss-preset-env`)({stage: 0})],
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
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
};
