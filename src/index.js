import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import YTsearch from 'youtube-api-search';

import apiKey from './api_key';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';
class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            videos : [],
            video : null
        };
        this.onChangeVideos('아이패드미니5');
    }
    render(){
        return (
            <div className="container row px-3 py-3">
                <SearchBar onChangeTerm={term => this.onChangeVideos(term)}/>
                <VideoDetail video ={this.state.video}/>
                <VideoList
                    videos={this.state.videos}
                    onClickVideo={video => this.setState({video})}
                />
            </div>
        )
    }

    onChangeVideos(term){
        YTsearch({key: apiKey, term}, videos=>{
            console.log(videos);
            this.setState({
                videos : videos,
                video : videos[0]
            })
        });
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));