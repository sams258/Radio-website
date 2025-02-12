// app/page.jsx
"use client"; // Client Component

import React, { useEffect } from "react";
import { radioStations } from "@/components/radioStations";
import NowPlaying from "@/components/NowPlaying";
import Link from "next/link";
import "@/assets/styles/home.css";
import Introduction from "@/components/Introduction";

const HomePage = () => {
  return (
    <div>
      <Introduction />

      <div className="station-cards">
        {radioStations.map((station) => (
          <div key={station.id} className="station-card">
            <h2>{station.name}</h2>
            <Link href={`/station/${station.id}`}>
              <img src={station.logo} alt={`${station.name} logo`} />
            </Link>

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
