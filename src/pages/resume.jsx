import React, {useLayoutEffect} from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import {cleanDropboxHTML, insertContent} from '../utils';
import Layout from '../components/layout/Layout';

const pdfSVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 85.271 114.521">
  <path fill="white" d="M11.271 114.521H74c6.225 0 11.271-5.046 11.271-11.271V39.656L45.568 0H11.271C5.046 0 0 5.046 0 11.271v91.979c0 6.225 5.046 11.271 11.271 11.271z"/>
  <g fill="gold">
    <path d="M16.636 100.506v-20.8c0-.341.144-.64.432-.896.288-.256.667-.384 1.136-.384h6.432c2.197 0 3.957.582 5.28 1.744 1.322 1.163 1.984 2.981 1.984 5.456v.192c0 2.496-.688 4.331-2.064 5.504-1.376 1.174-3.195 1.76-5.456 1.76h-3.584v7.424c0 .405-.208.726-.624.96-.416.235-.901.352-1.456.352-.576 0-1.067-.117-1.472-.352-.405-.234-.608-.554-.608-.96zm4.16-10.688h3.584c1.066 0 1.893-.309 2.48-.928.586-.618.88-1.536.88-2.752v-.384c0-1.216-.293-2.133-.88-2.752-.587-.619-1.414-.928-2.48-.928h-3.584v7.744zM36.06 100.539V79.707c0-.341.17-.64.512-.896.341-.256.778-.384 1.312-.384h5.664c2.282 0 4.106.587 5.472 1.76s2.048 3.029 2.048 5.568v8.736c0 2.539-.683 4.395-2.048 5.568s-3.189 1.76-5.472 1.76h-5.664c-.534 0-.971-.128-1.312-.384-.342-.257-.512-.555-.512-.896zm4.16-2.369h3.328c2.24 0 3.36-1.227 3.36-3.68v-8.736c0-2.453-1.12-3.68-3.36-3.68H40.22V98.17zM56.22 100.506V79.738c0-.405.181-.725.544-.96.363-.234.789-.352 1.28-.352h11.168c.426 0 .747.176.96.528.213.352.32.773.32 1.264 0 .512-.112.95-.336 1.312-.224.363-.539.544-.944.544H60.38v6.4h4.896c.405 0 .72.16.944.48.224.32.336.715.336 1.184 0 .427-.112.8-.336 1.12s-.539.48-.944.48H60.38v8.768c0 .405-.208.726-.624.96-.416.235-.901.352-1.456.352-.576 0-1.067-.117-1.472-.352-.406-.234-.608-.554-.608-.96z"/>
  </g>
  <path fill="rgba(255, 240, 90, 0.5)" d="M57.048 39.656h28.223L45.568 0l.033 28.223c.008 6.316 5.13 11.433 11.447 11.433z"/>
  <path fill="gold" d="M59.321 37.383c6.417.333 25.95 2.273 25.95 2.273L45.568 0s1.767 19.496 2.306 25.95c.526 6.295 5.139 11.107 11.447 11.433z"/>
  <path fill="gold" d="M85.271 39.656L45.568 0"/>
</svg>`;

const ResumePage = () => {
    const dropboxHTML = useStaticQuery(
        graphql`
            query {
                allDropboxPaperDocument(
                    filter: {id: {eq: "JuB27iyjOMroLQZlGWDuk"}}
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
    const contentDownloadLink = contentHTML.replace(
        'www.dropbox.com',
        'dl.dropboxusercontent.com'
    );
    const contentDownloadCopy = contentDownloadLink.replace(
        /https:\/\/www.*(?=<\/a>)/,
        pdfSVG + 'Resume'
    );
    useLayoutEffect(() => insertContent(contentDownloadCopy));

    return <Layout page="resume" pageTitle="Resume" />;
};

export default ResumePage;
