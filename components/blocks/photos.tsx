import React from 'react';
import styled from 'styled-components';
import {TinaTemplate} from 'tinacms';
import {BP} from '../style';

interface IPhotos {
    data: {
        photos: {
            photo: string;
        }[];
    };
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

const defaultPhoto = {
    photo: 'https://dummyimage.com/400x600/efefef/dddddd.jpg&text=+=%5E%5E=',
};

export const photoBlockSchema: TinaTemplate = {
    name: 'photos',
    label: 'Photos',
    ui: {
        defaultItem: {
            photos: [defaultPhoto, defaultPhoto, defaultPhoto],
        },
    },
    fields: [
        {
            type: 'object',
            label: 'Featured Photos',
            name: 'photos',
            list: true,
            ui: {
                defaultItem: {
                    photo: {...defaultPhoto},
                },
            },
            fields: [
                {
                    type: 'image',
                    label: 'Photo',
                    name: 'photo',
                },
            ],
        },
    ],
};
