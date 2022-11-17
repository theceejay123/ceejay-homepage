import Head from "next/head";
import React, { useEffect, useState } from "react";

import { Navigation, Footer } from "@components";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  if (!isMounted) {
    return <div></div>;
  }

  return (
    theme && (
      <div className="flex flex-col h-screen">
        <Head>
          <title>Janeal Pimentel</title>
          <meta name="description" content="Digital Craftsman" />
          <link rel="icon" href="favicon.ico" />
        </Head>
        <Navigation theme={theme} setTheme={setTheme} isMounted={isMounted} />
        <Footer />
      </div>
    )
  );
}
