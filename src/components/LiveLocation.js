import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { io } from "socket.io-client";

// Fix for default Leaflet icon not showing
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const LiveLocation = () => {
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const socket = useRef(null);

  useEffect(() => {
    // Set default Leaflet icon
    const DefaultIcon = L.icon({
      iconUrl: markerIcon,
      shadowUrl: markerShadow,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
    });
    L.Marker.prototype.options.icon = DefaultIcon;

    // Initialize map if it hasn't been initialized
    if (!mapRef.current) {
      mapRef.current = L.map("map").setView([0, 0], 16);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "OpenStreetMap contributors",
      }).addTo(mapRef.current);
    }

    // Connect to WebSocket server
    socket.current = io("https://livelocation-backend-production.up.railway.app/");

    socket.current.on("connect", () => {
      console.log("Connected to WebSocket server");
    });

    // Check if geolocation is supported
    if (!navigator.geolocation) {
      console.error("Geolocation is not supported by this browser.");
      return;
    }

    // Watch for location updates
    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        // Ensure coordinates are valid
        if (!isNaN(latitude) && !isNaN(longitude)) {
          console.log("Driver's Location:", latitude, longitude);

          // Update map view and marker
          mapRef.current.setView([latitude, longitude], 16);
          if (markerRef.current) {
            markerRef.current.setLatLng([latitude, longitude]);
          } else {
            markerRef.current = L.marker([latitude, longitude], {
              title: "Driver Location",
            }).addTo(mapRef.current);
          }

          // Send coordinates to server
          socket.current.emit("send-location", { latitude, longitude });
        } else {
          console.error("Invalid LatLng values:", latitude, longitude);
        }
      },
      (error) => {
        console.error("Geolocation Error:", error.message);
      },
      { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
    );

    // Cleanup function
    return () => {
      navigator.geolocation.clearWatch(watchId);
      socket.current.disconnect();
    };
  }, []);

  return <div id="map" style={{ height: "100vh", width: "100%" }} />;
};

export default LiveLocation;
