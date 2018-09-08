import React from 'react'
import ReactDOM from 'react-dom'
import VideoListItem from './VideoListItem'

const VideoList = props => {
    const videoItem = props.videos.map((video)=>{
        return <VideoListItem key={video.etag} video={video} onVideoSelect={props.onVideoSelect} />
    })
    return (
        <ul>
            {videoItem}
        </ul>
    )
}

export default VideoList