import React from 'react';

const videoDetail = ({video}) => {
    if(!video){
        return <div>loading...</div>
    }
    console.log(video);
    const videoId = video.id.videoId;
    const url = `http://www.youtube.com/embed/${videoId}`;
    return (
        <div className="col-md-12 col-lg-12 col-xl-7">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe src={url} frameBorder="0"></iframe>
            </div>
            <div className="col-12">
                <h3>{video.snippet.channelTitle}</h3>
                <p>{video.snippet.title}</p>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    )
};

export default videoDetail;