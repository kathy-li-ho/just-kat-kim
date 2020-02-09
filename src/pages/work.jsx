import React, {useLayoutEffect} from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import {cleanDropboxHTML, insertContent} from '../utils';
import Layout from '../components/layout/Layout';

const PortfolioPage = () => {
    const dropboxData = useStaticQuery(
        graphql`
            query content {
                allDropboxPaperDocument(
                    filter: {id: {eq: "LtVXFT3g6CDgltuzJYSLt"}}
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
    );
    const contentHTML = cleanDropboxHTML(dropboxData.allDropboxPaperDocument.edges[0].node.content);
    useLayoutEffect(() => insertContent(contentHTML));

    return <Layout page="work" pageTitle="Portfolio" />;
};

export default PortfolioPage;
