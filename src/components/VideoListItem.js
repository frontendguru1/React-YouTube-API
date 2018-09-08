import React from 'react'
import ReactDOM from 'react-dom'

class VideoListItem extends React.Component {
 

    render() {
        return(
            <li onClick={()=>{ this.props.onVideoSelect(this.props.video)}}>
                <div className={'video-item'}>
                    <div className={'video-thumb'}>
                        <img src={this.props.video.snippet.thumbnails.medium.url} />
                    </div>
                    <div className={'video-thumb-title'}>
                        {this.props.video.snippet.title}
                    </div>
                </div>
            </li>
        )
    }
}

export default VideoListItem