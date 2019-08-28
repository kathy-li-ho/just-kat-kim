import React, {useLayoutEffect} from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import {cleanDropboxHTML, insertContent} from '../utils';
import Layout from '../components/layout/Layout';
import AboutPhotoGrid from '../components/photo-grid/AboutPhotoGrid';

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
        insertContent(contentHTML, document.querySelector('#bio'))
    );

    return (
        <Layout page="about" pageTitle="About">
            <div id="bio" />
            <AboutPhotoGrid />
        </Layout>
    );
};

export default AboutPage;
