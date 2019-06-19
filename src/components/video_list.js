import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = props =>{
    const VideoListItems = props.videos.map(
        video => <VideoListItem key={video.etag} video={video} onChangeVideo={selectedVideo => props.onChangeVideo(selectedVideo)}/>
    );
    return (
        <div className="video-list col-xl-4 col-lg-12">
            <ul >
                {VideoListItems}
            </ul>
        </div>
    );
};

export default VideoList;