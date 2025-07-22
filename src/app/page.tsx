// pages/index.js
import Footer from "@/Components/Footer";
import Navbar from "@/Components/NavBar";
import SainikPointsSection from "@/Pages/Homepage/SainikPointsSection";
import Testimonials from "@/Pages/Homepage/Testimonials";
import TrustedBySection from "@/Pages/Homepage/TrustedBySection";
import VoicesAndViews from "@/Pages/Homepage/VoicesAndViews";
import WhyJoinSainikSchool from "@/Pages/Homepage/WhyJoinSainikSchool";
import StateMap from "@/Pages/Homepage/StateMap";
import Card from "@/Pages/Homepage/Card";
import Hero from "@/Pages/Homepage/Hero";

export default function Home() {
  return (
    // Add a wrapper div here with the required styles
    <div className="bg-[#F7F1EE]">
      <div className="max-w-[1440px] mx-auto">
        <Navbar />
        <Hero />
        <Card />
        <StateMap />
        <SainikPointsSection />
        <WhyJoinSainikSchool />
        <VoicesAndViews />
        <TrustedBySection />
        <Testimonials />
        <Footer />
      </div>
    </div>
  );
}