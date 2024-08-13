// app/page.jsx
"use client"; // Client Component

import React, { useEffect } from "react";
import { radioStations } from "@/components/radioStations";
import NowPlaying from "@/components/nowPlaying";
import Link from "next/link";
import "@/assets/styles/home.css";

const HomePage = () => {
  

  return (
    <div>
      <h1>Welcome to LBI Group official website</h1>

      <div className="station-cards">
        {radioStations.map((station) => (
          <div key={station.id} className="station-card">
            <h2>{station.name}</h2>
            <img src={station.logo} alt={`${station.name} logo`} />

            <NowPlaying station={station} />
            <div className="listen-now">
              <Link href={`/station/${station.id}`}>Listen Now</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
