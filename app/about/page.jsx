"use client"; // Add this at the top

import React, { useState, useEffect } from "react";
import "@/assets/styles/AboutPage.css";

const AboutPage = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="container">
      <h1 className="about">About LBI Group</h1>
      <p>
        LBI Radio, based in Beirut, Lebanon, is a popular online radio station
        that offers a diverse range of programming, primarily focusing on the
        best Arabic music hits. Broadcasting 24/7, since August 1st 2011, the
        station caters to a wide audience, providing a mix of contemporary and
        classic Arabic songs, as well as other international genres. The
        station's tagline, "We speak your language," reflects its commitment to
        connecting with listeners through music and cultural programming, making
        it a go-to source for Arabic music lovers both in Lebanon and around the
        world.
      </p>
      <p>
        LBI Radio also features a variety of cultural content, making it a
        well-rounded station for those interested in Lebanese and broader Middle
        Eastern culture. The station can be accessed easily online through
        various streaming platforms, ensuring that listeners can tune in from
        anywhere, whether they are on a computer, tablet, or mobile device. LBI
        Radio's wide appeal and accessibility have helped it carve out a
        significant niche in the region's online radio landscape.
      </p>
      <p>
        In addition to LBI Radio, the LBI Group operates several other
        specialized radio stations, each catering to different musical tastes
        and eras. LBI Zaman focuses on golden hits from the past, offering
        listeners a nostalgic journey through classic Arabic songs that have
        shaped the region's musical heritage. This station is perfect for those
        who appreciate the timeless melodies and legendary artists of previous
        decades.
      </p>
      <p>
        LBI Oldies takes a slightly broader approach by featuring a mix of
        international oldies, appealing to a diverse audience that enjoys
        classic hits across different cultures and languages. This station
        offers a curated selection of music that spans various genres and
        periods, mostly 80's 90's and 00's, ensuring that every listener finds
        something that resonates with their memories.
      </p>
      <p>
        LBI Hits, on the other hand, is dedicated to the latest chart-toppers
        and contemporary music, focusing on the newest releases in both Arabic
        and global music scenes. It’s the go-to station for those who want to
        stay updated with the current music trends and enjoy the freshest tracks
        from today's popular artists. Together, these stations under the LBI
        Group umbrella provide a well-rounded musical experience, ensuring
        there’s something for everyone, whether they seek nostalgia, classic
        tunes, or the latest hits.
      </p>
      <p>
        You can listen to LBI Radio and its other stations on various platforms
        like:
        <a
          href="http://radio.garden/listen/lbi-radio/NnlGY68Y"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Radio Garden
        </a>
        ,
        <a
          href="https://www.radio.net/s/lbiradio"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          radio.net
        </a>
        , and
        <a
          href="https://listenonlineradio.com/lb/lbi-radio"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Listen Online Radio
        </a>
        .
      </p>

      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          ↑ Back to Top
        </button>
      )}
    </div>
  );
};

export default AboutPage;
