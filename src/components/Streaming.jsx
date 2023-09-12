import React, { useState, useRef, useEffect } from 'react';
import io from "socket.io-client"

const Streaming = () => {
  const [isCameraActive, setIsCameraActive] = useState(false);
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const socket = io.connect("http://localhost:8800"); // Use the correct server URL and port

  useEffect(() => {
    if (isCameraActive && videoRef.current) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
          videoRef.current.srcObject = stream;
          streamRef.current = stream;

          socket.emit('startStream'); // Notify the server to start the streaming

          // Handle socket messages from the server
          socket.on('message', (data) => {
            console.log(data);
          });

          socket.on('disconnect', () => {
            console.log('Socket disconnected');
          });

          // Add event listener to handle video data transmission
          socket.on('videoData', (msg) => {
            if (Buffer.isBuffer(msg)) {
              // Send video data to the server
              socket.emit('videoData', msg);
            } else {
              console.log(msg);
            }
          });

        })
        .catch((error) => {
          console.error('Error accessing webcam:', error);
        });
    } else {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
        streamRef.current = null;
      }
    }
  }, [isCameraActive]);

  const handleStartCamera = () => {
    setIsCameraActive(true);
  };

  const handleStopCamera = () => {
    setIsCameraActive(false);
    socket.disconnect();
  };

  return (
    <div className="text-center text-black">
      <div className='py-20'>
        {!isCameraActive ? (
          <button className="btn btn-primary text-black" onClick={handleStartCamera}>Start Camera</button>
        ) : (
          <button className="btn btn-secondary text-black" onClick={handleStopCamera}>Stop Camera</button>
        )}
      </div>
      <div className="px-96">
        <div className="border-2 bg-blue-400 border-yellow-400 w-96 h-60">
          {isCameraActive && (
            <video className="w-full h-full" ref={videoRef} autoPlay playsInline />
          )}
        </div>
      </div>
    </div>
  );
};

export default Streaming;
