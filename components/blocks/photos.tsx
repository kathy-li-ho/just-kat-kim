import React from 'react';
import styled from 'styled-components';
import {PagesBlocksPhotos} from '../../.tina/__generated__/types';

interface IPhotos {
    data: PagesBlocksPhotos;
}

const PhotosWrapper = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-around;
    }
`;

const Photo = styled.img`
    width: 100%;
    height: auto;
    margin: 10px 0;

    @media (min-width: 768px) {
        width: 32%;
    }
`;

export const Photos = ({data}: IPhotos) => {
    const {photos} = data;
    if (!photos.length) return null;

    let photoArray = photos;
    if (photos.length > 3) {
        photos.slice(0, 3);
    }

    return (
        <PhotosWrapper>
            {photoArray.map(({photo}, i) => {
                return <Photo key={i} src={photo} alt="" />;
            })}
        </PhotosWrapper>
    );
};
