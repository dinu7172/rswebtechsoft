"use client"
import Head from 'next/head';
import { useRef} from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import Clients from "@/components/Clients";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Services from "@/components/Services";
import About1 from "@/components/About1";
import ServiceComponent from "@/components/Services";
import Contact from "@/components/Contact";


export default function Home() {
  const contactRef = useRef(null);

  return (

    <main>
      <Head>
        <link rel="icon" href="/favicon.png" /> {/* Specify the favicon */}
        <meta name="description" content="Your website description" /> {/* Add other metadata */}
        {/* Add more metadata tags as needed */}
      </Head>
        <Navbar contactRef={contactRef}/>

      <section id="hero-banner">
        <HeroBanner />
      </section>

      <section id="about1">
        <About1 />
      </section>

      <section id="services">
        <ServiceComponent />
      </section>

      <section id="product">
        <ProductCard />
      </section>
      <section id="contact">
        <Contact />
      </section>

      <section id="footer">
        <Footer />
      </section>
    </main>
  );
}
