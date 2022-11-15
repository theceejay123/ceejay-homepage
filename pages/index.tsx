import Head from "next/head";

import Navigation from "../components/Navigation/Navigation.component";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Janeal Pimentel</title>
        <meta name="description" content="Digital Craftsman" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <Navigation />
    </div>
  );
}
