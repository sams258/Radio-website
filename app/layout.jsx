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
      <body>
        <Navbar />
        <main>{children}</main>
        <script
          language="javascript"
          type="text/javascript"
          src="https://andromeda.shoutca.st/system/streaminfo.js"
        ></script>
      </body>
    </html>
  );
};

export default MainLayout;
