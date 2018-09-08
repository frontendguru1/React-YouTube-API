import React from 'react'
import ReactDOM from 'react-dom'

class VideoPlayer extends React.Component { 

    render() {
        const videoId = this.props.video && this.props.video.id && this.props.video.id.videoId
        console.log(videoId)
        const url = `https://youtube.com/embed/${videoId}`

        if(!this.props.video) {
            return <div className={'video-loader'}>Loading...</div>
        }

        return (
            <div>
                <div className={'video-player-container'}>
                    <iframe src={url} />
                </div>
                <div className={'video-details'}>
                    <div className={'video-title'}>{this.props.video.snippet.title}</div>                    
                    <div className={'video-des'}>{this.props.video.snippet.description}</div>

                </div>
            </div>
        )
    }
}

export default VideoPlayer