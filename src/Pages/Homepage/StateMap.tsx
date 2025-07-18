'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const statesData = [
  { name: 'Maharashtra', map: '/homePage/maharashtra.png', schools: [{ name: 'Sainik School Balachadi', logo: '/homePage/school.png' }, { name: 'Rashtriya Military School, Dholpur', logo: '/homePage/school.png' }] },
  { name: 'Rajasthan', map: '/homePage/maharashtra.png', schools: [{ name: 'Sainik School Balachadi', logo: '/homePage/school.png' }, { name: 'Rashtriya Military School, Dholpur', logo: '/homePage/school.png' }] },
  { name: 'Gujrat', map: '/homePage/maharashtra.png', schools: [{ name: 'Sainik School Balachadi', logo: '/homePage/school.png' }, { name: 'Rashtriya Military School, Dholpur', logo: '/homePage/school.png' }] },
  { name: 'Madhya Pradesh', map: '/homePage/maharashtra.png', schools: [{ name: 'Sainik School Balachadi', logo: '/homePage/school.png' }, { name: 'Rashtriya Military School, Dholpur', logo: '/homePage/school.png' }] },
  { name: 'Arunachal Pradesh', map: '/homePage/maharashtra.png', schools: [{ name: 'Sainik School Balachadi', logo: '/homePage/school.png' }, { name: 'Rashtriya Military School, Dholpur', logo: '/homePage/school.png' }] },
  { name: 'Punjab', map: '/homePage/maharashtra.png', schools: [{ name: 'Punjab Military School', logo: '/homePage/school.png' }, { name: 'Army Public School', logo: '/homePage/school.png' }] },
  { name: 'Bihar', map: '/homePage/maharashtra.png', schools: [{ name: 'Sainik School Gopalganj', logo: '/homePage/school.png' }, { name: 'RMS Patna', logo: '/homePage/school.png' }] },
  { name: 'Uttar Pradesh', map: '/homePage/maharashtra.png', schools: [{ name: 'Sainik School Amethi', logo: '/homePage/school.png' }, { name: 'Sainik School Jhansi', logo: '/homePage/school.png' }] },
  // Add more as needed...
];

const NationwideFootprint = () => {
  const [activeState, setActiveState] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const list = scrollRef.current;
    if (!list) return;

    const items = list.children;
    const totalHeight = list.scrollHeight;

    // Duplicate the items for seamless looping
    Array.from(items).forEach((item) => {
      list.appendChild(item.cloneNode(true));
    });

    // Animate scroll
    tl.current = gsap.timeline({ repeat: -1 });
    tl.current.to(list, {
      y: `-${totalHeight}px`,
      duration: statesData.length * 5, // Adjust speed
      ease: "none",
    });

    // Pause on hover
    const handleMouseEnter = () => tl.current?.pause();
    const handleMouseLeave = () => tl.current?.play();

    list.addEventListener('mouseenter', handleMouseEnter);
    list.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      list.removeEventListener('mouseenter', handleMouseEnter);
      list.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="max-w-full bg-[#1C1F24] mx-auto px-4 py-16 overflow-hidden">
      <div className="w-[1306px] h-auto mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Left Column - Auto Scroll State Cards */}
        <div className="relative h-[600px] overflow-hidden">
          <div ref={scrollRef} className="space-y-4 will-change-transform">
            {statesData.map((state, idx) => {
              const isActive = activeState === idx;
              return (
                <div
                  key={idx}
                  className="w-[630px] bg-white rounded-xl shadow-md transition-all duration-300 overflow-hidden"
                >
                  {/* Clickable Header */}
                  <div
                    className="flex items-center justify-between px-6 py-4 cursor-pointer"
                    onClick={() => setActiveState(isActive ? null : idx)}
                  >
                    <h3
                      className={`font-regular text-[24px] font-poppins text-black transition-all duration-300 ${
                        isActive ? 'text-[32px]' : 'text-[24px]'
                      }`}
                    >
                      {state.name}
                    </h3>
                    <Image
                      src={state.map}
                      alt={state.name}
                      width={isActive ? 64 : 40}
                      height={isActive ? 64 : 40}
                      className="object-contain transition-all duration-300"
                    />
                  </div>

                  {/* Expandable Content */}
                  {isActive && state.schools.length > 0 && (
                    <div className="grid grid-cols-2 gap-4 px-6 pb-6">
                      {state.schools.map((school, sIdx) => (
                        <div
                          key={sIdx}
                          className="w-[230px] h-[120px] bg-[#1C1C1C] text-white rounded-xl shadow-lg flex items-center px-4"
                        >
                          <Image
                            src={school.logo}
                            alt={school.name}
                            width={40}
                            height={40}
                            className="mr-4 object-contain"
                          />
                          <p className="text-[20px] font-regular font-poppins leading-tight">
                            {school.name}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column - Title + Static Map */}
        <div className="flex flex-col items-center text-center">
          <h2 className="text-[48px] font-regular font-poppins text-white mb-4">
            Nationwide Footprint
          </h2>
          <p className="text-[20px] font-regular font-poppins text-white mb-6">
            Sainik Schools are strategically located across states to provide equal opportunity
            and access to disciplined, defense-oriented education.
          </p>
          <Image
            src="/homePage/map.png"
            alt="India Map"
            width={550}
            height={450}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default NationwideFootprint;