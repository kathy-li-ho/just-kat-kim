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
                accessToken: `ZIkhzERy-RAAAAAAAAAAGn93tpBImYTGF2wD_1xGqh9MuOfzDcX3gBxC80s8AWiD`,
                extensions: [
                    '.pdf',
                    '.gif',
                    '.jpg',
                    '.png',
                    '.avi',
                    '.mp4',
                    '.mov',
                    '.mkv',
                ],
                path: '/site_files',
                recursive: true,
            },
        },
        {
            resolve: 'gatsby-source-dropbox-paper',
            options: {
                access_token: `ZIkhzERy-RAAAAAAAAAAG5kn00vzQhKFMZiNr9mvfW7nhGmH_MCeUDYs3iT1W2fp`,
                format: 'html',
            },
        },
        {
            resolve: `gatsby-plugin-postcss`,
            options: {
                postCssPlugins: [require(`postcss-preset-env`)({stage: 0})],
            },
        },
        {
            resolve: 'gatsby-plugin-tidy',
            options: {
                cleanPublic: true,
                cleanCache: true,
                removeHashes: true,
                removeArtifacts: true,
                noJsMap: true,
                jsDir: ['js', 'jsx'],
                cssDir: 'css',
            },
        },
        `gatsby-transformer-ffmpeg`,
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
                icon: `src/images/favicon.png`, // This path is relative to the root of the site.
            },
        },
    ],
};
