import Head from "next/head";
import Accessories from "../components/Accessories";
import Header from "../components/Header";
import HeroSection from "../components/Hero";
import Model_3 from "../components/Model_3";
import Model_S from "../components/Model_S";
import Model_X from "../components/Model_X";
import Model_Y from "../components/Model_Y";
import SolarNewRoof from "../components/Solar_new_roof";

export default function Home() {
  return (
    <>
      <Head>
        <title>Official Tesla Homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="main__contents">
        <HeroSection />
        <Model_S />
        <Model_3 />
        <Model_X />
        <Model_Y />
        <SolarNewRoof />
        <Accessories />
      </div>
    </>
  );
}
