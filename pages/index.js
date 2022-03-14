import Head from "next/head";
import {ShHeading} from "../components/typo";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hello</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ShHeading>about</ShHeading>
      <ShHeading>skills</ShHeading>
      <ShHeading>projects</ShHeading>
      {/* <ShHeading>work day routine?</ShHeading> */}
      <ShHeading>contact</ShHeading>
      {/* timeline on other page ? */}
      <ShHeading>timeline?</ShHeading>

    </div>
  );
}
