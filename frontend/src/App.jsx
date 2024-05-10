import React, { useRef } from 'react';
import VideoPlayer from './VideoPlayer';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

function App() {
  const playerRef = useRef(null);
  const videoLink = "http://localhost:8000/uploads/courses/d27cf2cd-170b-4031-a6bf-c32e0d9a00aa/index.m3u8";

  const videoPlayerOptions = {
    controls: true,
    responsive: true,
    fluid: true,
    sources: [{
      src: videoLink,
      type: "application/x-mpegURL"
    }]
  }

  const handlePlayerReady = (player) => {
    playerRef.current = player;
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  }

  return (
    <>
      <h1>Video player</h1>
      <VideoPlayer
        options={videoPlayerOptions}
        onReady={handlePlayerReady}
      />
    </>
  )
}

export default App
