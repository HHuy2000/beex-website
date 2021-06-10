import Head from "next/head";
import Footer from "../components/common/Footer";
import TopBar from "../components/common/TopBar";
import Advisory from "../components/home/Advisory";
import CTA from "../components/home/CTA";
import Header from "../components/home/Header";
import OurProducts from "../components/home/OurProducts";
import Pricing from "../components/home/Pricing";
import Services from "../components/home/Services";
import Testimonial from "../components/home/Testimonial";

export default function Home() {
  return (
    <>
      <Head>
        <title>BeeX - Homepage</title>
        <meta name="description" content="Think differently, act immediately" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <TopBar />
      <div className="main-content"><Header /></div>
      <div className="main-content"><Services /></div>
      <Advisory />
      <div className="main-content"><Pricing /></div>
      <div className="main-content"><OurProducts /></div>
      <div className="main-content"><CTA /></div>
      <div className="main-content"><Testimonial /></div>
      <Footer />
    </>
  );
}
