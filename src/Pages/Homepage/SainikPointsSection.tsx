import Image from 'next/image';

const SainikPointsSection = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-4 py-12">
      <div className="w-[1306px] h-auto mx-auto space-y-7">

        {/* Row 1 */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Image */}
          <div className="w-[700px] h-[468px]">
            <Image
              src="/Image/life.jpg" // Replace with actual path
              alt="Life of a Sainik"
              width={700}
              height={468}
              className="rounded-lg w-full h-full object-cover"
            />
          </div>

          {/* Right Text */}
          <div className="flex-1 flex flex-col justify-center">
            <h2 className="text-[48px] font-regular font-poppins text-black mb-4">Life of a Sainik</h2>
            <p className="text-[20px] font-regular font-poppins text-gray-700 leading-relaxed">
              The life of a Sainik is a noble journey of discipline, sacrifice, and unwavering dedication,
              where every dawn begins with purpose and every night ends with the satisfaction of serving
              the nation with pride, honor, and relentless commitment. From braving the harshest terrains
              to standing guard during moments of national celebration, a soldier’s life is built on resilience,
              physical endurance, mental strength, and an unbreakable bond of brotherhood that goes beyond
              caste, religion, and region.
            </p>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col md:flex-row items-center justify-between h-[442px] bg-[#1C1C1C] px-6 rounded-xl">
          {/* Left Text */}
          <div className="flex-1 text-white max-w-[600px]">
            <h2 className="text-[42px] font-regular font-poppins mb-3">Government Facilities</h2>
            <p className="text-[20px] font-regular font-poppins leading-relaxed">
              The Government of India ensures the well-being of its soldiers and their families through a wide
              range of facilities including healthcare under the ECHS (Ex-Servicemen Contributory Health Scheme),
              pension benefits, canteen services, subsidized housing, educational support for children, and
              welfare schemes that provide security, dignity, and peace of mind to those who serve and have served
              in uniform.
            </p>
          </div>

          {/* Right Image */}
          <div className="w-[588px] h-[442px] flex justify-center items-center">
            <Image
              src="/Image/government.jpg" // Replace with actual path
              alt="Government Facilities"
              width={588}
              height={442}
              className="rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Row 3 */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Image */}
          <div className="w-[582px] h-[442px]">
            <Image
              src="/Image/patriotism.jpg" // Replace with actual path
              alt="Patriotism"
              width={582}
              height={442}
              className="rounded-lg w-full h-full object-cover"
            />
          </div>

          {/* Right Text */}
          <div className="flex-1 flex flex-col justify-center">
            <h2 className="text-[42px] font-regular font-poppins text-black mb-4">Patriotism Driven</h2>
            <p className="text-[20px] font-regular font-poppins text-gray-700 leading-relaxed">
              Patriotism is not just an emotion but a way of life in the Armed Forces, where every heartbeat
              echoes the rhythm of “Bharat Mata Ki Jai” and every action—be it a salute, a march, or a rescue
              mission—is a symbol of love for the nation that surpasses personal interest. The spirit of patriotism
              drives each soldier to go beyond the call of duty, to put the safety of the country above their own,
              and to inspire generations with stories of valor, devotion, and indomitable courage.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SainikPointsSection;
