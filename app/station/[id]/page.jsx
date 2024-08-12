// app/station/[id]/page.jsx
"use client"; // Client Component

import React, { useEffect } from "react";
import { useParams } from 'next/navigation'; // New API for routing/navigation
import { radioStations } from '@/components/radioStations';

const StationDetail = () => {
  const { id } = useParams(); // useParams from next/navigation

  const station = radioStations.find((station) => station.id === parseInt(id));

  // Script is loaded
  useEffect(() => {
    if (station) {
      const script = document.createElement('script');
      script.src = `https://${station.server}.shoutca.st/system/streaminfo.js`;  // Dynamic script src
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
    <div>
      <img src={station.logo} alt={`${station.name} logo`} />
      <h1>{station.name}</h1>
      <p>{station.description}</p>
      
      <h2>Now Playing:</h2>
      <span
        className="cc_streaminfo"
        data-type="song"
        data-username={station.username}  // Dynamic username for each station
      >
        Loading ...
      </span>

      <audio controls>
        <source src={station.liveStreamUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default StationDetail;
