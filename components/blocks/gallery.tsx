import React from 'react';
import styled from 'styled-components';
import {
    PagesBlocksGallery,
    PagesBlocksPhotos,
} from '../../.tina/__generated__/types';

interface IGallery {
    data: PagesBlocksGallery;
}

const GalleryWrapper = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-around;
    }
`;

const Photo = styled.img`
    width: 48%;
    height: auto;
    margin: 10px 0;

    @media (min-width: 768px) {
        width: 24%;
    }
`;

export const Gallery = ({data}: IGallery) => {
    const {gallery} = data;
    if (!gallery?.length) return <>Add some photos!</>;

    return (
        <GalleryWrapper>
            {gallery.map(({photo}, i) => {
                return <Photo key={i} src={photo} alt="" />;
            })}
        </GalleryWrapper>
    );
};
