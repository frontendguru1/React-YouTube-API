import React from 'react'
import ReactDOM from 'react-dom'
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
        
        YTSearch({
            key: API_KEY,
            terms: 'React Project - Fetch YouTube Videos'
        }, (videos) => {
            this.setState({videos, selectedVideo: videos[0]})
        })
    }

    renderHeader() {
        return(
            <div className={'header-wrapper'}>
                <div className={'container'}>
                    <div className={'logo'}>YouTube Video API</div>
                    <div className={'search-container'}>
                        <SearhBar />
                    </div>
                </div>
            </div>
        )   
    }
    
    render() {
        console.log(this.state.videos)
        return(
            <div>
                {this.renderHeader()}                
                <div className={'video-container'}>
                    <div className={'video-col-left'}>
                        <div className={'video-player-container'}>
                            <VideoPlayer video={this.state.selectedVideo} />
                        </div>
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
