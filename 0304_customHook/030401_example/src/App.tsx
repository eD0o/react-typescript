import React, { useEffect, useRef, useState } from 'react';
import videoSrc from './video.mp4';

function App() {

  const [isPlaying, setIsPlaying] = useState(false)
  const video = useRef<HTMLVideoElement>(null);

  const goForward = () => {
    if (!video.current) return
    video.current.currentTime += 2
  }

  const changePlayBackRate = (speed: number) => {
    if (!video.current) return
    video.current.playbackRate = speed
  }

  const mute = () => {
    if (!video.current) return
    video.current.muted = !video.current.muted
  }

  const pictureInPicture = async () => {
    if (!video.current) return
    if (document.pictureInPictureElement) {
      await document.exitPictureInPicture()
    }
    else {
      await video.current.requestPictureInPicture();
    }
  }

  useEffect(() => {
    console.log(video);
  }, [video])

  return (
    <>
      <div className='flex'>
        {isPlaying ? (
          <button onClick={() => video.current?.pause()}>Pause</button>
        ) : (
          <button onClick={() => video.current?.play()}>Play</button>
        )}
        <button onClick={goForward}>+2s</button>
        <button onClick={() => changePlayBackRate(1)}>1x</button>
        <button onClick={() => changePlayBackRate(2)}>2x</button>
        <button onClick={pictureInPicture}>PiP</button>
        <button onClick={mute}>M</button>
      </div>
      <video controls ref={video} src={videoSrc} onPlay={() => setIsPlaying(true)} onPause={() => setIsPlaying(false)}></video>
    </>
  )
}

export default App
