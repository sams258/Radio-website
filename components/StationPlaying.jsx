"use client"; // Client Component

import React from "react";
import "@/assets/styles/StationPlaying.css"; // Import the CSS for styling

const StationPlaying = ({ station }) => {
  return (
    <div className="station-playing">
      <span
        className="cc_streaminfo station-song"
        data-type="song"
        data-username={station.username}
      >
        Loading ...
      </span>
    </div>
  );
};

export default StationPlaying;
