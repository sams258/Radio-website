// components/NowPlaying.jsx
"use client"; // Client Component

import React, { useEffect, useState } from "react";

const NowPlaying = ({ station }) => {
  const [nowPlaying, setNowPlaying] = useState("Loading...");

  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const response = await fetch(
          `https://${station.server}.shoutca.st/recentfeed/${station.username}/json/`
        );
        const data = await response.json();
        if (data.items && data.items.length > 0) {
          setNowPlaying(data.items[0].title); // Set the track title
        } else {
          setNowPlaying("Playing Live Stream");
        }
      } catch (error) {
        console.error("Error fetching now playing data:", error);
        setNowPlaying("Error loading track");
      }
    };

    fetchNowPlaying();
  }, [station]);

  return (
    <div className="now-playing">
      <span>{nowPlaying}</span>
    </div>
  );
};

export default NowPlaying;
