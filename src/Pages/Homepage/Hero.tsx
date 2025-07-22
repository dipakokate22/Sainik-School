"use client";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const imagesCol1 = ["/Image/img.png", "/Image/img.png", "/Image/img.png", "/Image/img.png","/Image/img.png", "/Image/img.png", "/Image/img.png", "/Image/img.png"];
const imagesCol2 = ["/Image/img.png", "/Image/img.png", "/Image/img.png", "/Image/img.png","/Image/img.png", "/Image/img.png", "/Image/img.png", "/Image/img.png"];

export default function HeroSection() {
  useEffect(() => {
    gsap.to(".col-left", {
      y: "-30%",
      duration: 20,
      repeat: -1,
      ease: "none",
      yoyo: true,
    });

    gsap.to(".col-right", {
      y: "30%",
      duration: 20,
      repeat: -1,
      ease: "none",
      yoyo: true,
    });
  }, []);

  return (
    <section className="max-w-[1440px] h-[870px] mx-auto flex items-center justify-center font-poppins overflow-hidden">
      <div className="w-full max-w-[1295px] h-auto flex items-center justify-between gap-10">
        {/* Left Column */}
        <div className="w-1/2 flex flex-col  justify-start gap-6">
          <h1 className="text-[48px] font-regular font-poppins text-black leading-tight">
            We’re proud to help <br />
            students find the right <br />
            path to success. Here’s <br />
            how far we’ve come:
          </h1>
          <p className="text-gray-600 font-regular font-poppins text-[20px]">
            Trusted by Students, Schools & Cities Across India
          </p>

          <div className="flex gap-10 mt-4">
            <div>
              <p className="font-medium font-poppins text-[20px] text-black">📍 Cities Covered</p>
              <p className="text-black font-regular font-poppins text-[14px]">
                Across all major <br/>Indian regions
              </p>
            </div>
            <div>
              <p className="font-medium font-poppins text-[20px] text-black">🏫 Schools Listed</p>
              <p className="text-black font-regular font-poppins text-[14px]">
                From CBSE, ICSE, & <br /> state boards
              </p>
            </div>
          </div>

          <button className="bg-[#10744E] text-[16px] font-medium font-poppins w-[188px] px-6 py-3 rounded-full mt-6 hover:bg-green-800 transition">
            Take Admission
          </button>
        </div>

        {/* Right Column with Two Scrolling Columns */}
        <div className="w-1/2 flex gap-[18px]  overflow-hidden h-[830px]">
          {/* Column 1 */}
          <div className="col-left flex flex-col gap-[18px]">
            {imagesCol1.map((img, index) => (
              <Image
                key={index}
                src={img}
                alt={`col1-${index}`}
                width={311}
                height={331}
                className="rounded-lg w-[311px] h-[331px] object-cover"
              />
            ))}
          </div>

          {/* Column 2 */}
          <div className="col-right flex flex-col gap-[18px]">
            {imagesCol2.map((img, index) => (
              <Image
                key={index}
                src={img}
                alt={`col2-${index}`}
                width={311}
                height={331}
                className="rounded-lg w-[311px] h-[331px] object-cover"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
