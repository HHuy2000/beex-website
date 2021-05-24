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
        <title>New App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopBar />
      <Header />
      <Services />
      <Advisory />
      <Pricing />
      <OurProducts />
      <CTA />
      <Testimonial />
      <Footer />
    </>
  );
}
