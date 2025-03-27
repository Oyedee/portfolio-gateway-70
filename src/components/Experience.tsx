
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ExperienceCard = ({
  position,
  company,
  period,
  description,
  index,
}: {
  position: string;
  company: string;
  period: string;
  description: string;
  index: number;
}) => {
  const { domRef, isVisible } = useScrollAnimation({ threshold: 0.1 });
  
  return (
    <div 
      ref={domRef} 
      className={`flex gap-6 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="relative flex flex-col items-center">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white ${index % 2 === 0 ? 'bg-purple-600' : 'bg-blue-500'}`}>
          {index + 1}
        </div>
        {index < 3 && <div className="w-0.5 grow mt-2 bg-gray-200 dark:bg-gray-700"></div>}
      </div>
      
      <div className="pb-12">
        <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 mb-4">
          <h3 className="text-xl font-bold dark:text-white">{position}</h3>
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-4">
            <span className="font-medium text-purple-600">{company}</span>
            <span className="hidden sm:inline text-gray-300">•</span>
            <span className="text-gray-500 dark:text-gray-400 text-sm">{period}</span>
          </div>
          <p className="text-gray-600 dark:text-gray-300">{description}</p>
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const { domRef, isVisible } = useScrollAnimation();
  
  const experiences = [
    {
      position: "Mobile Developer",
      company: "Dukka",
      period: "Feb 2024 - Present",
      description: "Developing KYC/KYB features, implementing 'Sell on the Go' functionality, refining PIN input keypad for POS terminals, and building real-time notification systems."
    },
    {
      position: "Mobile Developer",
      company: "Sankore Investments - Kada",
      period: "Aug 2022 - Jan 2024",
      description: "Engineered streamlined onboarding processes, developed secure donation systems, implemented community features, and integrated Naira and USD payment gateways."
    },
    {
      position: "Mobile Developer",
      company: "First Ally Investment Capital - MyInvestar",
      period: "Jun 2022 - Aug 2022",
      description: "Created comprehensive KYC systems, implemented multi-factor authentication, developed wallet systems, and built dynamic investment portfolio views."
    },
    {
      position: "Android Developer Intern",
      company: "HNG Internship",
      period: "Jul 2021 - Oct 2021",
      description: "Led development team for Zuri DMs and Channels App, built SQL databases, integrated with Android applications, and coordinated with cross-functional teams."
    }
  ];
  
  return (
    <section id="experience" className="py-20 md:py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <div 
            ref={domRef}
            className={`transition-all duration-500 ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-4'}`}
          >
            <div className="handwritten mb-2 inline-block">Work Experience</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white">My Professional Journey</h2>
            <p className="text-gray-600 dark:text-gray-300">
              With expertise in mobile development, I've helped various companies build exceptional
              digital products. Here's my professional background:
            </p>
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
