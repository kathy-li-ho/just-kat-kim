import React from 'react';
import ReactPlayer from 'react-player';
import {PagesBlocksVideo} from '../../.tina/__generated__/types';

interface IVideo {
    data: PagesBlocksVideo;
}

export const Video = ({data}: IVideo) => {
    const canPlayURL = ReactPlayer.canPlay(data.url);

    if (!canPlayURL) {
        return <p>Cannot play video from this url! {data.url}</p>;
    }

    return (
        <ReactPlayer
            url={data.url}
            onError={(error) => console.log(error)}
            light
        />
    );
};
