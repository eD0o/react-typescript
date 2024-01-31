import React, { useEffect, useRef } from 'react';
import videoSrc from './video.mp4';
import useLocalStorage from './useLocalStorage';

function App() {

  const video = useRef<HTMLVideoElement>(null);

  const [volume, setVolume] = useLocalStorage('volume', '0')

  useEffect(() => {
    if (!video.current) return;
    const n = Number(volume);
    if (n >= 0 && n <= 1) video.current.volume = n;
  }, [volume])

  return (
    <>
      {volume}
      <div className='flex'>
        <button onClick={() => setVolume("0")}>0</button>
        <button onClick={() => setVolume("0.5")}>50</button>
        <button onClick={() => setVolume("1")}>100</button>
      </div>
      <video controls ref={video} src={videoSrc}></video>
    </>
  )
}

export default App
