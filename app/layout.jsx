import React from "react";
import Navbar from "@/components/Navbar";
import "@/assets/styles/globals.css";

export const metadata = {
  title: "LBI GROUP HEADQUARTERS",
  description: "This is the official website of LBI GROUP online radios",
  keywords: "lbi radio, group, online, radio, zaman, oldies, hits, albal",
  openGraph: {
    title: "LBI GROUP HEADQUARTERS",
    description: "This is the official website of LBI GROUP online radios",
    url: "https://lbiradio.com/",
    images: [
      {
        url: "https://lbiradio.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LBI GROUP Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LBI GROUP HEADQUARTERS",
    description: "This is the official website of LBI GROUP online radios",
    image: "https://lbiradio.com/og-image.jpg",
  },
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta
          name="facebook-domain-verification"
          content="glg94s3dve1479l98deqmw3qyuuoxw"
        />
        <link rel="shortcut icon" href="https://lbiradio.com/favicon.ico" />
        {/* Open Graph Tags */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta
          property="og:image:width"
          content={metadata.openGraph.images[0].width}
        />
        <meta
          property="og:image:height"
          content={metadata.openGraph.images[0].height}
        />
        <meta property="og:type" content={metadata.openGraph.type} />
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta
          name="twitter:description"
          content={metadata.twitter.description}
        />
        <meta name="twitter:image" content={metadata.twitter.image} />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
