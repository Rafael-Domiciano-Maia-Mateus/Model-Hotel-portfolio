import { Suspense, lazy } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";
import WhatsAppButton from "./components/WhatsAppButton";
import CustomCursor from "./components/CustomCursor";
import Footer from "./components/Footer";

// Seções abaixo da dobra são carregadas sob demanda (code splitting)
const About = lazy(() => import("./components/About"));
const Amenities = lazy(() => import("./components/Amenities"));
const Rooms = lazy(() => import("./components/Rooms"));
const Gallery = lazy(() => import("./components/Gallery"));
const VideoSection = lazy(() => import("./components/VideoSection"));
const Stats = lazy(() => import("./components/Stats"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const CTA = lazy(() => import("./components/CTA"));
const Contact = lazy(() => import("./components/Contact"));

function SectionFallback() {
  return <div style={{ minHeight: "40vh" }} aria-hidden="true" />;
}

export default function App() {
  return (
    <>
      <Loader />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />

      <main id="main-content">
        <Hero />

        <Suspense fallback={<SectionFallback />}>
          <About />
          <Amenities />
          <Rooms />
          <Gallery />
          <VideoSection />
          <Stats />
          <Testimonials />
          <CTA />
          <Contact />
        </Suspense>
      </main>

      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </>
  );
}
