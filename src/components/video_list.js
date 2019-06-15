import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = props =>{
    console.log(props.videos);
    const VideoListItems = props.videos.map(
        video => <VideoListItem key={video.etag} video={video}/>
    );
    return (
        <ul className="col3">
            {VideoListItems}
        </ul>
    );
};

export default VideoList;