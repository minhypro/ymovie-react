import React from 'react'
import {useParams} from 'react-router'

function VideoPlayer() {
    const { movieId } = useParams();

  return (
    <div className="mb-3 video-player container" >
        <iframe id="ve-iframe" src={"https://2embed.org/embed/" + movieId} width="100%" height="100%" allowfullscreen="allowfullscreen" frameborder="0" title="Video Player"></iframe>
    </div>
  )
}

export default VideoPlayer