import React, { useEffect, useRef } from 'react';
import videoSrc from './video.mp4';

function App() {

  const video = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    console.log(video.current);
  }, [])

  return (
    <>
      <div className='flex'>
        <button onClick={() => video.current?.play()}>Play</button>
        <button onClick={() => video.current?.pause()}>Pause</button>
      </div>
      <video controls ref={video} src={videoSrc}></video>
    </>
  )
}

export default App
