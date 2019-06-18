import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTAsearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import apiKey from './apiKey';


class App extends Component{
    constructor(props){
        super(props);
        this.state = { videos : []};
        YTAsearch({key:apiKey, term: '아이패드미니5'}, videos => this.setState({videos}));
    }
    render(){
        return (
            <div>
                <SearchBar/>
                <VideoDetail video={this.state.videos[0]}/>
                <VideoList videos={this.state.videos}/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));