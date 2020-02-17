import React, {useLayoutEffect} from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import {cleanDropboxHTML, insertContent} from '../utils';
import Layout from '../components/layout/Layout';
import './styles/work.css';

const docSVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 85.271 114.521">
  <path fill="white" stroke="rgba(255, 215, 0, 0.5)" stroke-width="4"  d="M11.271 114.521H74c6.225 0 11.271-5.046 11.271-11.271V39.656L45.568 0H11.271C5.046 0 0 5.046 0 11.271v91.979c0 6.225 5.046 11.271 11.271 11.271z"/>
  <path fill="gold" d="M59.321 37.383c6.417.333 25.95 2.273 25.95 2.273L45.568 0s1.767 19.496 2.306 25.95c.526 6.295 5.139 11.107 11.447 11.433z"/>
  <path fill="gold" d="M85.271 39.656L45.568 0"/>
</svg>`;
const videoRegex = /<a href="(.*\.mp4\?dl=)0".*(\1)0<\/a>/;
const videoPlayer =
    '<video controls><source src="$11" type="video/mp4">Your browser doesn\'t support HTML5 video. Here is a <a href="$10" target="_blank">link to the video</a> instead.</video>';
const resumeRegex = /(<a )(href=".*[^.mp4]\?dl=)0">.*a>/;
const resumeCTA = `$1$21" class="resume">${docSVG} Resume</a>`;

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
    const contentHTML = cleanDropboxHTML(
        dropboxData.allDropboxPaperDocument.edges[0].node.content
    );
    const contentWithVideo = contentHTML.replace(videoRegex, videoPlayer);
    const contentWithResumeCTA = contentWithVideo.replace(
        resumeRegex,
        resumeCTA
    );
    console.log(contentHTML);
    useLayoutEffect(() => insertContent(contentWithResumeCTA));

    return <Layout page="work" pageTitle="Work" />;
};

export default PortfolioPage;
