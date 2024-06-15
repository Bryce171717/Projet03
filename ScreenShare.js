// src/components/ScreenShare.js
import React, { useRef } from 'react';

const ScreenShare = () => {
  const videoRef = useRef(null);

  const startScreenShare = async () => {
    const stream = await navigator.mediaDevices.getDisplayMedia({ video: true });
    videoRef.current.srcObject = stream;
  };

  return (
    <div>
      <button onClick={startScreenShare}>Start Screen Share</button>
      <video ref={videoRef} autoPlay style={{ width: '100%' }}></video>
    </div>
  );
};

export default ScreenShare;
