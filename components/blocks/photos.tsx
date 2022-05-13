import React from 'react';
import styled from 'styled-components';
import {TinaTemplate} from 'tinacms';
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
                ? photos.map(({src}, i) => (
                      <Photo {...{alt: '', key: i, src}} />
                  ))
                : 'Please add at least three photos'}
        </PhotosWrapper>
    );
};

const placeholderImg = {
    src: 'https://dummyimage.com/400x600/efefef/dddddd.jpg&text=+=%5E%5E=',
};

export const photoBlockSchema: TinaTemplate = {
    name: 'photos',
    label: 'Photos',
    ui: {
        defaultItem: {
            photos: [placeholderImg, placeholderImg, placeholderImg],
        },
    },
    fields: [
        {
            type: 'object',
            label: 'Featured Photos',
            name: 'photos',
            list: true,
            ui: {
                defaultItem: placeholderImg,
            },
            fields: [
                {
                    type: 'image',
                    label: 'Photo',
                    name: 'src',
                },
            ],
        },
    ],
};
