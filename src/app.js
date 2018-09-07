import React from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import { SearhBar, VideoList } from './components/index'

const API_KEY = 'AIzaSyDJeKmLuO4mx_gKOx6EpMBG2G5MJJFUEmg'

class YoutubeVideos extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            videos: []
        }
        
        YTSearch({
            key: API_KEY,
            terms: 'React Project - Fetch YouTube Videos'
        }, (videos) => {
            this.setState({videos})
        })
    }
    
    render() {
        return(
            <div className={'video-container'}>

                <SearhBar />
                <VideoList videos={this.state.videos} />

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
