import React from "react";
import Navbar from "@/components/Navbar";
import "@/assets/styles/globals.css";

export const metadata = {
  title: "LBI GROUP HEADQUARTERS",
  description: "This is the official website of LBI GROUP online radios",
  keywords: "lbi radio, group, online, radio, zaman, oldies, hits, albal",
};

const MainLayout = ({ children }) => {  
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <link rel="shortcut icon" href="https://lbiradio.com/favicon.ico" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
