import React, { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const LiveLocationWithMarker = () => {
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const [ws, setWs] = useState(null); // WebSocket state

  useEffect(() => {
    // Initialize WebSocket connection
    const socket = new WebSocket("ws://localhost:3001");

    socket.onopen = () => {
      console.log("Connected to WebSocket server");
    };

    socket.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.latitude && data.longitude) {
          updateLocation(data.latitude, data.longitude);
        }
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    };


    socket.onclose = () => {
      console.log("WebSocket disconnected");
    };

    setWs(socket);

    return () => {
      socket.close();
    };
  }, []);

  const updateLocation = (latitude, longitude) => {
    mapRef.current.setView([latitude, longitude], 16);
    if (markerRef.current) {
      markerRef.current.setLatLng([latitude, longitude]);
    } else {
      markerRef.current = L.marker([latitude, longitude], {
        title: "Your Location",
      }).addTo(mapRef.current);
    }
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          if (ws) {
            ws.send(JSON.stringify({ latitude, longitude })); // Send location to WebSocket server
          }
        },
        (error) => {
          console.error("Error getting location:", error);
        },
        { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, [ws]);

  return <div id="map" style={{ height: "100vh", width: "100%" }} />;
};

export default LiveLocationWithMarker;
