import React from 'react';
import ReactPlayer from 'react-player/vimeo';
import styled from 'styled-components';
import {TinaTemplate} from 'tinacms';
import {BORDER, SIZES} from '../style';

interface IVideo {
    data: {
        url: string;
    };
}

const Error = styled.div`
    background: lavenderblush;
    border: 1px solid lightcoral;
    border-radius: ${BORDER.RADIUS05};
    color: lightcoral;
    font-size: ${SIZES.SMALL};
    margin: auto;
    max-width: 75%;
    padding: 20px;
`;

export const Video = ({data}: IVideo) => {
    const canPlayURL = ReactPlayer.canPlay(data.url);

    console.log(data, data?.url);

    if (!canPlayURL) {
        return (
            <Error>
                Please choose a video from Vimeo, or ask Kathy for compatibility
                with another video hosting platform.
            </Error>
        );
    }

    return (
        <ReactPlayer
            style={{margin: 'auto', maxWidth: 640, maxHeight: 360}}
            width={undefined}
            height={undefined}
            url={data.url}
            onError={(error) => console.log(error)}
            light
        />
    );
};

export const videoBlockSchema: TinaTemplate = {
    name: 'video',
    label: 'Video',
    ui: {
        defaultItem: {
            url: 'https://vimeo.com/85683143',
        },
    },
    fields: [
        {
            type: 'string',
            label: 'Video URL',
            name: 'url',
        },
    ],
};
