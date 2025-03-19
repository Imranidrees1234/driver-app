import React, { useEffect, useRef, useState } from "react";
import io from "socket.io-client";

const VideoVerification = () => {
  const videoRef = useRef(null);
  const peerConnection = useRef(null);
  const socket = useRef(null);
  const [driverId] = useState("driver123");

  useEffect(() => {
    socket.current = io("https://admin-backend-production-4ca3.up.railway.app/");

    socket.current.emit("register_driver", driverId);
    console.log(`📌 Driver registered: ${driverId}`);

    socket.current.on("start_video_stream", async ({ adminId }) => {
      console.log(`📡 Admin ${adminId} requested video.`);

      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      videoRef.current.srcObject = stream;
      console.log("🎥 Camera access granted. Streaming video...");

      peerConnection.current = new RTCPeerConnection();
      stream.getTracks().forEach((track) => peerConnection.current.addTrack(track, stream));

      peerConnection.current.onicecandidate = (event) => {
        if (event.candidate) {
          socket.current.emit("send_ice_candidate", { candidate: event.candidate, adminId });
          console.log("📡 Sending ICE candidate...");
        }
      };
      

      const offer = await peerConnection.current.createOffer();
      await peerConnection.current.setLocalDescription(offer);

      console.log("📡 Sending WebRTC offer to Admin...");
      socket.current.emit("send_offer", { signal: offer, adminId, driverId });
    });

    socket.current.on("receive_answer", async ({ signal }) => {
      console.log("📡 Received WebRTC answer from Admin.");
      await peerConnection.current.setRemoteDescription(new RTCSessionDescription(signal));
    });

    return () => {
      if (socket.current) {
        socket.current.disconnect();
        console.log("❌ Driver disconnected.");
      }
    };
  }, [driverId]);

  return (
    <div>
      <h2>Driver Video Stream</h2>
      <video ref={videoRef} autoPlay playsInline style={{ width: "100%", border: "1px solid black" }} />
    </div>
  );
};

export default VideoVerification;



