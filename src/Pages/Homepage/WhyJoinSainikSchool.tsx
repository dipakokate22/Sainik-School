// components/WhyJoinSainikSchool.tsx

import React from 'react';
import Image from 'next/image';
import { Poppins } from 'next/font/google';
import { IoSchoolOutline, IoBodyOutline, IoGlobeOutline } from 'react-icons/io5';
import { FaUserShield } from 'react-icons/fa';
import { BsPeople } from 'react-icons/bs';
import { LiaSchoolSolid } from "react-icons/lia";

// Initialize Poppins font
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // 400=regular, 500=medium, 700=bold
});

// Card data (no changes)
const cardData = [
  { icon: IoSchoolOutline, title: "CBSE Excellence", description: "High-quality CBSE curriculum taught by expert faculty." },
  { icon: FaUserShield, title: "NDA-Oriented Training", description: "Dedicated academic + physical training to crack NDA & beyond." },
  { icon: BsPeople, title: "Structured Discipline", description: "A daily routine that builds time management, leadership, and ethics." },
  { icon: LiaSchoolSolid, title: "Military Hostel Life", description: "Develop self-reliance and unity while living on campus." },
  { icon: IoBodyOutline, title: "Physical & Mental Fitness", description: "Sports, drills, and yoga for holistic development." },
  { icon: IoGlobeOutline, title: "Pan-India Presence", description: "Students from all states foster national pride and unity." },
];

// Define colors for the light effects
const LIGHT_EFFECT_COLORS = {
  ORANGE: '#EEA786',
  GRAY: '#CDCDCD',
  GREEN: '#6B8A7B',
};

// --- NEW REFACTORED FEATURE CARD COMPONENT ---
type FeatureCardProps = {
  icon: React.ElementType;
  title: string;
  description: string;
  lightColor: string;
};

const FeatureCard = ({ icon: Icon, title, description, lightColor }: FeatureCardProps) => (
  <div className="w-[302px] h-[204px] bg-[#1C1F24]/70 backdrop-blur-sm rounded-2xl shrink-0 relative overflow-hidden transition-transform hover:scale-105">
    {/* Light Effect element - positioned absolutely behind the content */}
    <div
      className="absolute -top-1/4 -left-1/4 w-[200px] h-[200px] opacity-10 blur-7xl"
      style={{
        backgroundImage: `radial-gradient(circle, ${lightColor}, transparent 80%)`,
      }}
    />

    {/* Content Wrapper - positioned relatively to sit on top of the light effect */}
    <div className="relative z-10 flex flex-col h-full">
      {/* Top Row: Icon + Title */}
      <div className="flex items-start mt-[20px] ml-[5px] mr-[20px] mb-[21px] gap-[20px]">
        {/* Icon Circle */}
        <div className="w-[80px] h-[80px] bg-black/30 rounded-full flex items-center justify-center flex-shrink-0">
          <Icon className="text-white text-3xl" />
        </div>
        {/* Title */}
        <h3 className="font-medium text-[20px] text-white leading-tight pt-2">
          {title}
        </h3>
      </div>

      {/* Bottom Row: Description */}
      <p className="font-normal text-[14px] text-gray-300 leading-snug px-6">
        {description}
      </p>
    </div>
  </div>
);


const WhyJoinSainikSchool = () => {
  return (
    <section className={`relative w-full h-[834px] max-w-[1440px] mx-auto flex items-center overflow-hidden ${poppins.className}`}>
      {/* Background Image */}
      <Image
        src="/Image/Frame1.png"
        alt="Sainik School promotional background"
        layout="fill"
        objectFit="cover"
        // className="-z-10"
        priority
      />

        {/* NEW: White Overlay */}
        <div className="absolute inset-0 bg-white opacity-20 z-10"></div>

      {/* Main Content Wrapper */}
      <div className="w-full flex items-center justify-between px-[73px] gap-[73px] z-20">
        {/* Left Part: Title, Description, Button */}
        <div className="text-black w-[540px] shrink-0">
          <h2 className="text-[48px] font-bold leading-tight mb-5">
            Why Join <br /> Sainik School?
          </h2>
          <p className="text-[20px] leading-relaxed mb-10">
            Where courage meets discipline, and education <br />
            shapes future defense leaders. <br />
            Sainik Schools are more than institutions — they <br />
            are launchpads for tomorrows heroes.
          </p>
          <button className="bg-[#1C1F24]/100 hover:bg-[#2c2d30]/100 text-white font-semibold w-[218px] h-[40px] rounded-full flex items-center justify-center transition-colors">
            Explore All Schools
          </button>
        </div>

        {/* Right Part: 6 Feature Cards with cascaded layout */}
        <div className="flex flex-col gap-6">
          {/* Row 1: Orange Light Effect */}
          <div className="flex gap-6">
            {cardData.slice(0, 2).map((card, index) => (
              <FeatureCard key={`row1-${index}`} {...card} lightColor={LIGHT_EFFECT_COLORS.ORANGE} />
            ))}
          </div>

          {/* Row 2: Gray Light Effect */}
          <div className="flex gap-6 ml-[34px]">
            {cardData.slice(2, 4).map((card, index) => (
              <FeatureCard key={`row2-${index}`} {...card} lightColor={LIGHT_EFFECT_COLORS.GRAY} />
            ))}
          </div>

          {/* Row 3: Green Light Effect */}
          <div className="flex gap-6 ml-[68px]">
            {cardData.slice(4, 6).map((card, index) => (
              <FeatureCard key={`row3-${index}`} {...card} lightColor={LIGHT_EFFECT_COLORS.GREEN} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoinSainikSchool;