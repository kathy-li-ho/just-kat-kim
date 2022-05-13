import React from 'react';
import styled from 'styled-components';
import {TinaTemplate} from 'tinacms';
import {PagesBlocksGallery} from '../../.tina/__generated__/types';
import {BP} from '../style';

interface IPhotos {
    data: PagesBlocksGallery;
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
    title: 'Photo title',
    src: 'https://dummyimage.com/400x600/efefef/dddddd.jpg&text=+=%5E%5E=',
};

export const photoBlockSchema: TinaTemplate = {
    label: 'Featured Photos',
    name: 'gallery',
    ui: {
        defaultItem: {
            photos: [placeholderImg, placeholderImg, placeholderImg],
        },
    },
    fields: [
        {
            label: 'Photos',
            name: 'photos',
            type: 'object',
            list: true,
            ui: {
                defaultItem: placeholderImg,
                itemProps: (item) => {
                    if (item?.title?.length > 0) {
                        return {label: item?.title};
                    }
                },
            },
            fields: [
                {
                    label: 'Title',
                    name: 'title',
                    type: 'string',
                    ui: {defaultValue: placeholderImg.title},
                },
                {
                    label: 'Photo',
                    name: 'src',
                    type: 'image',
                },
            ],
        },
    ],
};
