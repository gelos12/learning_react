import React from 'react';

import VideoListItem from './video_list_item';

const videoList = ({onClickVideo, videos}) => {
    const videoList = videos.map(video => {
        return (
            <VideoListItem
                key={video.etag}
                onClickVideo={ video => onClickVideo(video)}
                video={video}
            />
            )
    });
    return (
        <div className="col-md-12 col-lg-12 col-xl-5">
            {videoList}
        </div>
    )
};

export default videoList;
