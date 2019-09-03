import React, {useLayoutEffect} from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import {cleanDropboxHTML, insertContent} from '../utils';
import Layout from '../components/layout/Layout';

const AboutPage = () => {
    const dropboxHTML = useStaticQuery(
        graphql`
            query aboutContent {
                allDropboxPaperDocument(
                    filter: {id: {eq: "dc8RpIbhCX34s7NMLrXVg"}}
                ) {
                    edges {
                        node {
                            content
                        }
                    }
                }
            }
        `,
        []
    ).allDropboxPaperDocument.edges[0].node.content;
    const contentHTML = cleanDropboxHTML(dropboxHTML);
    useLayoutEffect(() =>
        insertContent(contentHTML)
    );

    return (
        <Layout page="about" pageTitle="About" />
    );
};

export default AboutPage;
