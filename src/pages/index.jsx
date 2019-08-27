import React, {useLayoutEffect} from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Layout from '../components/layout/Layout';

const HomePage = () => {
    const contentHTML = useStaticQuery(
        graphql`
            query {
                allDropboxPaperDocument(
                    filter: {id: {eq: "7hGgmvthELebTBGwnHkYx"}}
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

    useLayoutEffect(() => {
        const mainElement = document.querySelector('main');
        if (!mainElement.innerHTML) {
            mainElement.insertAdjacentHTML('afterbegin', contentHTML);
        }
    });

    return <Layout page="home" />;
};

export default HomePage;
