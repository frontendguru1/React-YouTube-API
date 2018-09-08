import React from 'react'
import ReactDOM from 'react-dom'

class VideoPlayer extends React.Component { 

    render() {
        const videoId = this.props.video && this.props.video.id && this.props.video.id.videoId
        console.log(videoId)
        const url = `https://youtube.com/embed/${videoId}`

        if(!this.props.video) {
            return <div>Loading...</div>
        }

        return (
            <div className={'video-player-container'}>
                 <iframe src={url} />
            </div>
        )
    }
}

export default VideoPlayer