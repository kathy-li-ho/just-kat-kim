import React, {useLayoutEffect} from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import {cleanDropboxHTML, insertContent} from '../utils';
import Layout from '../components/layout/Layout';
import './styles/favorites.css';

const FavoritesPage = () => {
    const dropboxHTML = useStaticQuery(
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
    const contentHTML = cleanDropboxHTML(dropboxHTML);
    useLayoutEffect(() =>
        insertContent(contentHTML)
    );

    return (
        <Layout page="favorites" pageTitle="Kat's Bag" />
    );
};

export default FavoritesPage;
