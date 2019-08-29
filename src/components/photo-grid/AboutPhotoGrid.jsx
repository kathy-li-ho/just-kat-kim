import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import {getValueIn} from '../../utils';
import PhotoGrid from './PhotoGrid';
import './AboutPhotoGrid.css';

const AboutPhotoGrid = () => {
    const dropbox = useStaticQuery(
        graphql`
            query {
                allDropboxNode(filter: {path: {regex: "/about//"}}) {
                    edges {
                        node {
                            localFile {
                                childImageSharp {
                                    resize(width: 300, quality: 90) {
                                        src
                                    }
                                }
                            }
                        }
                    }
                }
            }
        `,
        []
    ).allDropboxNode.edges;
    const photos = dropbox.map(photo => {
        return getValueIn(
            photo,
            'node',
            'localFile',
            'childImageSharp',
            'resize',
            'src'
        );
    });

    return (
        <PhotoGrid
            photos={photos}
            gridClass="aboutGrid"
            imgClass="aboutPhoto"
        />
    );
};

export default AboutPhotoGrid;
