"use client"; // Client Component

import React, { useEffect, useState } from "react";
import styles from "../assets/styles/StationPlaying.module.css"; // Import CSS using Next.js's CSS modules

const StationPlaying = ({ station }) => {
  const [nowPlaying, setNowPlaying] = useState("Loading...");
  const [fadeClass, setFadeClass] = useState(""); // State to control fade-in

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
          setNowPlaying("No data available");
        }
        triggerFadeIn();
      } catch (error) {
        console.error("Error fetching now playing data:", error);
        setNowPlaying("Error loading track");
      }
    };

    const triggerFadeIn = () => {
      setFadeClass(""); // Reset the fade class
      setTimeout(() => setFadeClass(styles.fadeIn), 10); // Trigger fade-in with a slight delay
    };

    // Fetch initially
    fetchNowPlaying();

    // Set interval to fetch every 60 seconds (60000 milliseconds)
    const intervalId = setInterval(fetchNowPlaying, 60000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [station]);

  return (
    <div className={styles.stationPlaying}>
      <span className={`${styles.stationSong} ${fadeClass}`}>{nowPlaying}</span>
    </div>
  );
};

export default StationPlaying;
