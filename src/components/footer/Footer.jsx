import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import Social from './social/Social';
import './Footer.css'

const transparentPNG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";
const path = obj => {return  obj && "node" in obj ? obj.node.fluid : {src: transparentPNG}};
const generateSizes = () => {
    const bps = [576, 768, 992, 1200, 1600]
    const sizes = bps.map((bp, i) => {
        return `${i ? ' \n' : ''}(max-width: ${bp - 1}px) ${bp}px`
    })
    sizes.push('\n1920px')
    return {sizes: sizes.toString()};
}

const Footer = () => {
    const footers = useStaticQuery(graphql`
        query {
            allImageSharp(filter: {fluid: {originalName: {regex: "/footer/"}}}) {
                edges {
                    node {
                        fluid(srcSetBreakpoints: [576, 768, 992, 1200, 1600], maxWidth: 1920) {
                            src
                            srcSet
                        }
                    }
                }
            }
        }
    `).allImageSharp.edges;

    let slug = window.location.pathname;
    if (slug === '/') slug = '/home/';
    const page = slug.slice(1,-1);
    const {src, srcSet} = path(footers.filter(edge => path(edge).src.includes(page))[0]);
    const imageProps = {
        className: "footerImg",
        src,
        srcSet,
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
    )
}

export default Footer
