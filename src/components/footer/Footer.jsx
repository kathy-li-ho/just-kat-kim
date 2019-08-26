import React from 'react';
import PropTypes from 'prop-types';
import {useStaticQuery, graphql} from 'gatsby';
import Social from './social/Social';
import './Footer.css';

const transparentPNG =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';
const path = obj => {
    return obj && 'node' in obj ? obj.node.localFile.childImageSharp.fluid : {src: transparentPNG};
};

const generateSizes = () => {
    const bps = [576, 768, 992, 1200, 1600];
    const sizes = bps.map((bp, i) => {
        return `${i ? ' \n' : ''}(max-width: ${bp - 1}px) ${bp}px`;
    });
    sizes.push('\n1920px');
    return {sizes: sizes.toString()};
};

const Footer = ({page}) => {
    const footers = useStaticQuery(graphql`
        query {
            allDropboxNode(filter: {path: {regex: "/footers/"}}) {
                edges {
                    node {
                        localFile {
                            childImageSharp {
                                fluid(srcSetBreakpoints: [576, 768, 992, 1200, 1600],  maxWidth: 1920) {
                                    src
                                    srcSet
                                }
                            }
                        }
                    }
                }
            }
        }
    `).allDropboxNode.edges;

    const imageProps = {
        className: 'footerImg',
        ...path(footers.filter(edge => path(edge).src.includes(page))[0]),
        ...generateSizes(),
    };

    return (
        <footer className="footer">
            <Social />
            <small className="copy">
                &copy;{new Date().getFullYear()} <strong>katherine kim</strong>.
            </small>
            <img {...imageProps} alt="footer" />
        </footer>
    );
};


Footer.propTypes = {
    page: PropTypes.string.isRequired,
};

export default Footer;
