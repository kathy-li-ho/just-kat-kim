import React from 'react';
import styled from 'styled-components';
import {PagesBlocksPhotos} from '../../.tina/__generated__/types';
import {BP} from '../style';

interface IPhotos {
    data: PagesBlocksPhotos;
}

interface IPhotosProps {
    isGallery?: boolean;
}

const PhotosWrapper = styled.div`
    display: flex;
    flex-direction: column;

    @media (${BP.MEDIUM}) {
        flex-direction: row;
        flex-wrap: ${(props: IPhotosProps) =>
            props.isGallery ? 'wrap' : 'no-wrap'};
        justify-content: space-around;
    }
`;

const Photo = styled.img`
    width: ${(props: IPhotosProps) => (props.isGallery ? '48%' : '100%')};
    height: auto;
    margin: 10px 0;

    @media (${BP.MEDIUM}) {
        width: ${(props: IPhotosProps) => (props.isGallery ? '24%' : '32%')};
    }
`;

export const Photos = ({data}: IPhotos) => {
    const {photos} = data;
    const numPhotos = photos?.length;

    return (
        <PhotosWrapper isGallery={numPhotos > 3}>
            {numPhotos
                ? photos.map(({photo}, i) => (
                      <Photo key={i} src={photo} alt="" />
                  ))
                : 'Please add at least three photos'}
        </PhotosWrapper>
    );
};
