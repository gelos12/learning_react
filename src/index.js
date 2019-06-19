import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTAsearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import youtubeKey from './apiKey';


class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            videos : [] ,
            selectVideo : null
        };
        this.VideoSearch('아이패드미니');
    }

    VideoSearch(term){
        YTAsearch({key:youtubeKey, term},videos => {
            this.setState({
                videos : videos,
                selectedVideo : videos[0]
            });
        });
        console.log(this.state);
    }

    render(){
        return (
            <div>
                {/*<SearchBar onSearchChangeTerm={ term => this.VideoSearch(term)}/>*/}
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    videos={this.state.videos}
                    onChangeVideo = {selectedVideo => this.onChangeVideo(selectedVideo)}
                />
            </div>
        )
    };

    onChangeVideo(selectedVideo){
        this.setState({selectedVideo})
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));