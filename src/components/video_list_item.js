import React from 'react';

const videoListItem = ({onClickVideo, video}) =>{
    if(!video){
        return <div>loading...</div>
    }
    const imgUrl = video.snippet.thumbnails.default.url;
    return (
        <li onClick={()=>onClickVideo(video)} className="list-group-item media">
            <div className="media">
                <div className="media-left">
                    <img className="media-object" src={imgUrl}/>
                </div>
                <div className="media-body">
                    <div className="media-heading">
                        {video.snippet.title}
                    </div>
                </div>
            </div>
        </li>
    )
};

export default videoListItem;