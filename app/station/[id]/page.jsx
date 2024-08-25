"use client"; // Client Component

import React, { useEffect } from "react";
import { useParams } from "next/navigation"; // New API for routing/navigation
import { radioStations } from "@/components/radioStations";
import StationPlaying from "@/components/StationPlaying";
import MoreRadios from "@/components/MoreRadios"; // Import the MoreRadios component
import "@/assets/styles/station.css"; // Import the station.css file

const StationDetail = () => {
  const { id } = useParams(); // Get the station ID from the URL

  const station = radioStations.find(
    (station) => station.id === parseInt(id, 10)
  );

  useEffect(() => {
    if (station) {
      // Remove any existing Centova Cast scripts
      const existingScript = document.getElementById("centova-cast-script");
      if (existingScript) {
        existingScript.remove();
      }

      // Create and append the new Centova Cast script
      const script = document.createElement("script");
      script.id = "centova-cast-script"; // Assign an ID for easy reference
      script.src = `https://${
        station.server
      }.shoutca.st/system/streaminfo.js?${Date.now()}`; // Append timestamp to prevent caching
      script.async = true;
      script.defer = true;

      document.body.appendChild(script);

      script.onload = () => {
        console.log(`Centova Cast script loaded for ${station.name}`);
        // Manually trigger the Centova Cast update function if available
        if (window.cc_streaminfo) {
          window.cc_streaminfo();
        }
      };

      script.onerror = () => {
        console.error(`Failed to load Centova Cast script for ${station.name}`);
      };

      // Cleanup function to remove the script when the component unmounts or station changes
      return () => {
        const scriptToRemove = document.getElementById("centova-cast-script");
        if (scriptToRemove) {
          scriptToRemove.remove();
        }
      };
    }
  }, [station]);

  if (!station) {
    return <div>Station not found</div>;
  }

  return (
    <div className="station-details">
      <h1 className="station-name">{station.name}</h1>
      <img
        src={station.logo}
        alt={`${station.name} logo`}
        className="station-logo"
      />
      <p className="station-description">{station.description}</p>
      <StationPlaying station={station} />
      {/* Use the StationPlaying component */}
      <audio controls className="station-audio">
        <source src={station.liveStreamUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      {/* Include the MoreRadios component and pass the current station's ID */}
      <MoreRadios mainStationId={station.id} radioStations={radioStations} />
    </div>
  );
};

export default StationDetail;
