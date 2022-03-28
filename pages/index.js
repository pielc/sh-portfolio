import "@fontsource/jetbrains-mono";
import Head from "next/head";
import { ShHeading } from "../components/typo";
import {
  Contact,
  Projects,
  Skills,
  About,
  Footer,
} from "../components/content";
import { TypeWriterTitle } from "../components/effects";

export default function Home() {
  return (
    <div style={{ padding: "0 1rem" }}>
      <Head>
        <title>About PLC</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icons/plc-logo.png" />
      </Head>

      <TypeWriterTitle />

      <About />
      <ShHeading>skills</ShHeading>
      <Skills />
      <ShHeading>projects</ShHeading>
      <Projects />
      <ShHeading>contact</ShHeading>
      <Contact />
      <Footer />
    </div>
  );
}
