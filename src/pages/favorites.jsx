import React, {useLayoutEffect} from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Layout from '../components/layout/Layout';

const FavoritesPage = () => {
    const contentHTML = useStaticQuery(
        graphql`
            query {
                allDropboxPaperDocument(
                    filter: {id: {eq: "1hmiDz44GUuVi0PuZTcRk"}}
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

    const contentNoLinkStyles = contentHTML.replace(
        /style="color: #47B5FA; text-decoration: none"/g,
        ''
    );

    useLayoutEffect(() => {
        const mainElement = document.querySelector('#list');
        if (!mainElement.innerHTML) {
            mainElement.insertAdjacentHTML('afterbegin', contentNoLinkStyles);
        }
    });

    return (
    <Layout page="favorites" pageTitle="Kat's Bag">
        <div id="list" />
    </Layout>
    );
};

export default FavoritesPage;
