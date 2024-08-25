"use client"; // Client Component

import React, { useEffect } from "react";
import { useParams } from "next/navigation"; // New API for routing/navigation
import { radioStations } from "@/components/radioStations";
import StationPlaying from "@/components/StationPlaying";
import MoreRadios from "@/components/MoreRadios"; // Import the MoreRadios component
import "@/assets/styles/station.css"; // Import the station.css file

const StationDetail = () => {
  const { id } = useParams(); // Get the station ID from the URL

  const station = radioStations.find((station) => station.id === parseInt(id));

  useEffect(() => {
    if (station) {
      const script = document.createElement("script");
      script.src = `https://${station.server}.shoutca.st/system/streaminfo.js`; // Dynamic script src
      script.language = "javascript";
      script.type = "text/javascript";
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
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
      <StationPlaying station={station} />{" "}
      {/* The new StationPlaying component */}
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
