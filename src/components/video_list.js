import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = props =>{
    const VideoListItems = props.videos.map(
        video => <VideoListItem key={video.etag} video={video} onChangeVideo={selectedVideo => props.onChangeVideo(selectedVideo)}/>
    );
    return (
        <ul className="col3">
            {VideoListItems}
        </ul>
    );
};

export default VideoList;