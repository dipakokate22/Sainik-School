'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

const logos = [
  { name: 'Aurora International', logo: '/homePage/logo.png' },
  { name: 'Crystal Lake School', logo: '/homePage/logo.png' },
  { name: 'Army Public School', logo: '/homePage/logo.png' },
  { name: 'Rashtriya Military School', logo: '/homePage/logo.png' },
];

const TrustedBySection = () => {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const loopScroll = (target: HTMLDivElement, reverse = false) => {
        const totalWidth = target.scrollWidth / 2;

        gsap.to(target, {
          x: reverse ? totalWidth : -totalWidth,
          duration: 20,
          ease: 'linear',
          repeat: -1,
          modifiers: {
            x: gsap.utils.unitize((x: string) => parseFloat(x) % totalWidth),
          },
        });
      };

      if (row1Ref.current) loopScroll(row1Ref.current, false);
      if (row2Ref.current) loopScroll(row2Ref.current, true);
    });

    return () => ctx.revert();
  }, []);

  // Duplicate logos only once
  const loopItems = [...logos, ...logos];

  return (
    <section className="bg-[#f8f1ed] py-16 w-full overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 text-center">
        <h2 className="text-[42px] font-poppins font-medium mb-12 text-[#111]">
          Trusted by top educational <br /> institutions worldwide
        </h2>

        {/* Row 1 - Left to Right */}
        <div className="overflow-hidden w-full mb-6">
          <div className="flex w-max" ref={row1Ref}>
            {loopItems.map((item, idx) => (
              <div
                key={`row1-${idx}`}
                className="flex items-center px-10 shrink-0"
              >
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={50}
                  height={50}
                  className="mr-3"
                />
                <span className="text-[20px] font-poppins text-gray-800">{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Right to Left */}
        <div className="overflow-hidden w-full">
          <div className="flex w-max" ref={row2Ref}>
            {loopItems.map((item, idx) => (
              <div
                key={`row2-${idx}`}
                className="flex items-center px-10 shrink-0"
              >
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={50}
                  height={50}
                  className="mr-3"
                />
                <span className="text-[20px] font-poppins text-gray-800">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;