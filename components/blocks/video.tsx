import React from 'react';
import ReactPlayer from 'react-player/vimeo';
import {PagesBlocksVideo} from '../../.tina/__generated__/types';

interface IVideo {
    data: PagesBlocksVideo;
}

export const Video = ({data}: IVideo) => {
    const canPlayURL = ReactPlayer.canPlay(data.url);

    console.log(data, data?.url);

    if (!canPlayURL) {
        return <p>Cannot play video from this url! {data.url}</p>;
    }

    return (
        <ReactPlayer
            style={{margin: 'auto'}}
            url={data.url}
            onError={(error) => console.log(error)}
            light
        />
    );
};
