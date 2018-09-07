import React from 'react'
import ReactDOM from 'react-dom'

const VideoList = props => {
    return (
        <ul>
            { props.videos.length }
        </ul>
    )
}

export default VideoList