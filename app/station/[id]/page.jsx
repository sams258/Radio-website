// app/station/[id]/page.jsx
"use client"; // Client Component

import React, { useEffect } from "react";
import { useParams } from "next/navigation"; // New API for routing/navigation
import { radioStations } from "@/components/radioStations";
import NowPlaying from "@/components/NowPlaying";
import "@/assets/styles/station.css"; // Import the station.css file

const StationDetail = () => {
  const { id } = useParams(); // useParams from next/navigation

  const station = radioStations.find((station) => station.id === parseInt(id));

  // Script is loaded
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
      {" "}
      {/* Apply the station-details class */}
      <h1 className="station-name">{station.name}</h1>{" "}
      {/* Apply the station-name class */}
      <img
        src={station.logo}
        alt={`${station.name} logo`}
        className="station-logo"
      />{" "}
      {/* Apply the station-logo class */}
      <p className="station-description">{station.description}</p>{" "}
      {/* Apply the station-description class */}
      <NowPlaying station={station} />
      <audio controls className="station-audio">
        {" "}
        {/* Apply the station-audio class */}
        <source src={station.liveStreamUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default StationDetail;
