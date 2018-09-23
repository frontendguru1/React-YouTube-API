import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'
import YTSearch from 'youtube-api-search'
import SearhBar from './components/SearchBar'
import VideoList from './components/VideoList'
import VideoPlayer from './components/VideoPlayer'
// import { SearhBar, VideoList, VideoPlayer } from './components'
const API_KEY = 'AIzaSyDJeKmLuO4mx_gKOx6EpMBG2G5MJJFUEmg'

class YoutubeVideos extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            videos: [],
            selectedVideo: null,
        }
        this.videoSearch("Java")
    }

    videoSearch(term) {
        YTSearch({
            key: API_KEY,
            term: term
        }, (videos) => {
            this.setState({videos, selectedVideo: videos[0]})
        })
    }

    renderHeader() {
        const _videoSearch = _.debounce((term)=>{this.videoSearch(term)}, 500)
        return(
            <div className={'header-wrapper'}>
                <div className={'container'}>
                    <div className={'logo'}>YouTube Video API</div>
                    <div className={'search-container'}>
                        <SearhBar onSearchTermChange={_videoSearch} />
                    </div>
                </div>
            </div>
        )   
    }
    
    render() {
        return(
            <div>
                { this.renderHeader() }   
                <div className={'video-container'}>
                    <div className={'video-col-left'}>
                        <VideoPlayer video={this.state.selectedVideo} />
                    </div>
                    <div className={'video-thumbs-container'}>
                        <VideoList videos={this.state.videos} onVideoSelect={selectedVideo=>this.setState({selectedVideo})} />
                    </div>
                </div>
            </div>
        )
    }
}

//init app
const appContainer = document.getElementById('app')
ReactDOM.render(
    <YoutubeVideos />,
    appContainer
)
