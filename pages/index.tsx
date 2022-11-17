import Head from "next/head";
import React from "react";

import { Navigation, Footer } from "@components";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Head>
        <title>Janeal Pimentel</title>
        <meta name="description" content="Digital Craftsman" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <Navigation />
      <Footer />
    </div>
  );
}
