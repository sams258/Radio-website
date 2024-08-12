// app/page.jsx
"use client"; // Client Component

import React, { useEffect } from "react";
import { radioStations } from "@/components/radioStations";
import Link from "next/link";
import "@/assets/styles/home.css";

const HomePage = () => {
  useEffect(() => {
    radioStations.forEach((station) => {
      const script = document.createElement("script");
      script.src = `https://${station.server}.shoutca.st/system/streaminfo.js`; // Dynamic script src
      script.language = "javascript";
      script.type = "text/javascript";
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    });
  }, []);

  return (
    <div>
      <h1>Welcome to My Online Radio Group</h1>
      <p>Discover our radio stations below:</p>
      <div className="station-cards">
        {radioStations.map((station) => (
          <div key={station.id} className="station-card">
            <img src={station.logo} alt={`${station.name} logo`} />
            <h2>{station.name}</h2>
            <h3>Now Playing:</h3>
            <span
              className="cc_streaminfo"
              data-type="song"
              data-username={station.username} // Dynamic username
            >
              Loading ...
            </span>
            <div className="listen-now">
              <Link href={`/station/${station.id}`}>
                Listen Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
