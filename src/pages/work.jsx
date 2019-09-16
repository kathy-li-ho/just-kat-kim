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

            query videos {
                allDropboxNode(filter: {localFile: {extension: {regex: "/mov|mp4|avi|mkv/"}}}) {
                  edges {
                    node {
                      localFile {
                        childVideoFfmpeg {
                          transcode(outputOptions: "mp4") {
                            src
                            originalName
                          }
                        }
                      }
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
