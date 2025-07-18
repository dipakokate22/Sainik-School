// /components/Testimonials.js
"use client"; // Add this directive for using React hooks (useState)

import React, { useState } from 'react';
import Image from 'next/image';

// --- Sample Data ---
// You can easily add or change testimonials here.
// Make sure the image paths in 'imageSrc' point to files in your /public directory.
const testimonialsData = [
  {
    id: 1,
    quote: "Our child has thrived in this school environment, where every teacher genuinely cares about their success! We couldn't be happier with the support and resources provided.",
    name: "Emily Johnson",
    desc: "Parent, Happy Family",
    imageSrc: "/profile-placeholder-1.png", // Example path
    rating: 3,
  },
  {
    id: 2,
    quote: "The discipline, academic rigor, and focus on character development at Sainik School are unparalleled. It has prepared our son for a future of leadership and service.",
    name: "Rajesh Kumar",
    desc: "Parent of a Cadet",
    imageSrc: "/profile-placeholder-2.png", // Example path
    rating: 5,
  },
  {
    id: 3,
    quote: "I am grateful for the lifelong friendships and the incredible mentorship I received. Sainik School didn't just educate me; it shaped me into the person I am today.",
    name: "Arjun Singh",
    desc: "Alumnus, Class of 2015",
    imageSrc: "/profile-placeholder-3.png", // Example path
    rating: 4,
  },
];

// --- Helper SVG Icons ---
const StarFilledIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.007z" clipRule="evenodd" />
  </svg>
);

const StarOutlineIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.613.049.868.85.42 1.285l-4.086 3.465a.563.563 0 00-.168.56l1.282 5.344c.193.805-.688 1.442-1.424.994l-4.96-2.882a.563.563 0 00-.576 0L4.79 21.24c-.736.448-1.617-.189-1.424-.994l1.282-5.344a.563.563 0 00-.168-.56L.394 9.682c-.448-.435-.193-1.236.42-1.285l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
  </svg>
);

// --- Helper Component for Dynamic Star Rating ---
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }, (_, index) => (
        index < rating 
        ? <StarFilledIcon key={index} className="h-6 w-6 text-yellow-400" />
        : <StarOutlineIcon key={index} className="h-6 w-6 text-gray-400" />
      ))}
    </div>
  );
};

// --- Main Testimonials Component ---
const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex - 1 + testimonialsData.length) % testimonialsData.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  const activeTestimonial = testimonialsData[currentIndex];

  return (
    <section className="w-full bg-[#F7F1EE] py-20 sm:py-28">
      {/* Container with responsive padding */}
      <div className="mx-auto max-w-[1440px] max-h-[640px] px-6 xl:px-[250px]">
        <div className="text-center">
          <h2 className="text-[48px] font-normal text-gray-900">
            Testimonials
          </h2>
          <p className="mx-auto mt-4 max-w-5xl text-[20px] font-normal text-gray-700">
            Hear what our students and parents say about their journey at Sainik School.
          </p>
        </div>

        <div className="mt-16  flex items-center justify-center gap-5">
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="flex-shrink-0 rounded-md border border-black p-2.5 transition-colors hover:bg-gray-200/50"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="black" className="h-7 w-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
          </button>

          {/* Testimonial Card */}
          <div className="mx-auto flex w-full max-w-[800px] max-h-[350px] flex-col items-center rounded-xl border border-gray-300 p-8 sm:p-12">
            <StarRating rating={activeTestimonial.rating} />
            <p className="mt-6 text-center text-[20px] font-normal leading-relaxed text-gray-800">
              {activeTestimonial.quote}
            </p>
            <div className="mt-10 flex w-full flex-col items-center justify-center gap-6 sm:flex-row">
              <div className="flex items-center gap-4">
                <Image
                  src={activeTestimonial.imageSrc}
                  alt={activeTestimonial.name}
                  width={56}
                  height={56}
                  className="h-14 w-14 rounded-full bg-gray-200 object-cover"
                />
                <div>
                  <p className="text-[16px] font-semibold text-gray-900">{activeTestimonial.name}</p>
                  <p className="text-[16px] font-normal text-gray-600">{activeTestimonial.desc}</p>
                </div>
              </div>
              <div className="hidden h-10 w-px bg-gray-300 sm:block"></div>
              <Image
                // IMPORTANT: Replace this src with your actual logo file
                src="/sainik-school-logo.svg" // Example logo path
                alt="Sainik School Logo"
                width={110}
                height={34}
                className="object-contain"
              />
            </div>
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            aria-label="Next testimonial"
            className="flex-shrink-0 rounded-md border border-black p-2.5 transition-colors hover:bg-gray-200/50"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="black" className="h-7 w-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;