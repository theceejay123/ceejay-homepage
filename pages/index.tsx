import Head from "next/head";
import React, { useEffect, useState } from "react";

import { Navigation, Footer } from "@components";
import { useTheme } from "next-themes";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    let checkCleanup = false;

    if (!checkCleanup) {
      console.log("Client is now mounted. system theme applied!");
      setIsMounted(true);
    }

    return () => {
      checkCleanup = true;
    };
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="flex flex-col h-screen">
      <Head>
        <title>Janeal Pimentel</title>
        <meta name="description" content="Digital Craftsman" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <Navigation isMounted={isMounted} />
      <Footer />
    </div>
  );
}
