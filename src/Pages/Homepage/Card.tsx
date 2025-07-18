import Image from "next/image";

// Data remains the same
const schools = [
  {
    name: "Rashtriya Military School",
    image: "/Image/img.jpg",
    desc: "Premier residential school nurturing future armed forces leaders through discipline, academics, and all-round development.",
  },
  {
    name: "Army Public School",
    image: "/Image/img.jpg",
    desc: "Empowering young minds with discipline, knowledge, and values for a brighter tomorrow.",
  },
  {
    name: "Acumen Academy",
    image: "/Image/img.jpg",
    desc: "Acumen Academy empowers changemakers with practical tools and leadership programs to tackle global challenges.",
  },
];

export default function SchoolsSection() {
  return (
    // CHANGE 5 & 6: Set section padding, max-width, and removed fixed height
    <section className="w-full max-w-[1440px] mx-auto bg-white flex flex-col items-center py-[80px] px-[72px]">
      
      {/* Title Section */}
      <div className="text-center">
        {/* CHANGE 2: Updated font styles for title */}
        <h2 className="text-[48px] font-normal text-black">
          Explore Best Schools Near You
        </h2>
        {/* CHANGE 2: Updated font styles for subtitle */}
        <p className="text-[20px] font-normal text-black/80 mt-2">
          Discover innovative designs that inspire learning.
        </p>
      </div>

      {/* Card Container */}
      {/* CHANGE 4: Updated grid gap, removed fixed height/width to be responsive */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[40px]">
        {Array(2)
          .fill(schools)
          .flat()
          .map((school, idx) => (
            // --- School Card ---
            // Card dimensions and shadow are preserved as requested.
            // flex-col is crucial for the internal layout.
            <div
              key={idx}
              className="w-[405px] h-[430px] bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.3)] p-4 flex flex-col"
            >
              <div className="w-full h-[180px] overflow-hidden rounded-lg">
                <Image
                  src={school.image}
                  alt={school.name}
                  width={405}
                  height={180}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* This div contains the top content (name, description) */}
              <div className="mt-4">
                {/* CHANGE 2: School name font */}
                <h3 className="text-[20px] font-medium text-black">{school.name}</h3>
                {/* CHANGE 2: Description font */}
                <p className="text-[14px] font-normal text-[#3D3C3C] mt-2 leading-relaxed">{school.desc}</p>
              </div>

              {/* CHANGE 1: This spacer div grows to push the next element to the bottom */}
              <div className="flex-grow"></div>

              {/* This div contains all the bottom-aligned content */}
              <div className="mt-4">
                <div className="flex gap-2">
                  {/* CHANGE 2: Tags font */}
                  <span className="bg-[#DAEADD] text-black px-3 py-1 rounded-md text-[12px] font-medium">
                    Education
                  </span>
                  <span className="bg-[#DAEADD] text-black px-3 py-1 rounded-md text-[12px] font-medium">
                    Fees
                  </span>
                  <span className="bg-[#DAEADD] text-black px-3 py-1 rounded-md text-[12px] font-medium">
                    Rating
                  </span>
                </div>

                <div className="flex items-center mt-3 text-2xl">
                  <span className="text-yellow-400">★</span>
                  <span className="text-yellow-400">★</span>
                  <span className="text-yellow-400">★</span>
                  <span className="text-gray-300">★</span>
                  <span className="text-gray-300">★</span>
                </div>
                
                {/* CHANGE 2: View Details font */}
                <button className="text-green-700 mt-2 text-[16px] text-base font-normal hover:underline">
                  View Details →
                </button>
              </div>
            </div>
          ))}
      </div>

      {/* View All Button */}
      {/* CHANGE 3 & 7: Updated button styles and margin-top */}
      <button className="mt-[50px] w-[104px] h-[40px] bg-[#10744E] text-white rounded-[50px] hover:bg-[#0d6342] transition text-base font-normal flex items-center justify-center">
        View all
      </button>
    </section>
  );
}