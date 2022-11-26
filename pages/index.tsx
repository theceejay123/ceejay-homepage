import Head from "next/head";
import React, { useEffect, useState } from "react";

import { Navigation, Footer, NavigationMenu } from "@components";
import { useTheme } from "next-themes";
import { NavigationMenuContextProvider } from "@contexts";

export default function Home() {
  const title = "Janeal Pimentel";
  const { theme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  if (!isMounted) {
    return <div></div>;
  }

  return (
    theme && (
      <NavigationMenuContextProvider>
        <div className="flex flex-col h-screen">
          <Head>
            <title>Janeal Pimentel</title>
            <meta name="description" content="Digital Craftsman" />
            <link rel="icon" href="favicon.ico" />
          </Head>
          <NavigationMenu title={title} />
          <Navigation title={title} />
          <Footer />
        </div>
      </NavigationMenuContextProvider>
    )
  );
}
