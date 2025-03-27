
import { SmartphoneNfc, Layout, Database } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ServiceCard = ({ 
  title, 
  description, 
  icon: Icon, 
  color, 
  darkColor,
  delay 
}: { 
  title: string; 
  description: string; 
  icon: any; 
  color: string;
  darkColor: string;
  delay: number;
}) => {
  const { domRef, isVisible } = useScrollAnimation();
  
  return (
    <div 
      ref={domRef}
      className={`${color} dark:${darkColor} rounded-xl p-6 transform transition-all duration-500 ease-out border border-[rgba(0,0,0,0.03)] dark:border-[rgba(255,255,255,0.05)] h-full shadow-sm`}
      style={{ 
        opacity: isVisible ? 1 : 0, 
        transform: isVisible 
          ? 'translateY(0) rotate(0deg)' 
          : 'translateY(20px) rotate(-4deg)',
        transitionDelay: `${delay}s`
      }}
    >
      <div className="rounded-full w-12 h-12 flex items-center justify-center bg-white dark:bg-black mb-4">
        <Icon size={24} className="text-gray-800 dark:text-gray-200" />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300">{description}</p>
    </div>
  );
};

const Services = () => {
  const { domRef, isVisible } = useScrollAnimation();
  
  const services = [
    {
      title: "Mobile App Development",
      description: "Building intuitive and responsive mobile applications with Flutter and Android, focusing on exceptional user experiences.",
      icon: SmartphoneNfc,
      color: "bg-yellow-card",
      darkColor: "bg-dark-yellow-card",
      delay: 0.1
    },
    {
      title: "UI & Product Design",
      description: "Creating beautiful, functional interfaces that delight users while solving business problems effectively.",
      icon: Layout,
      color: "bg-blue-card",
      darkColor: "bg-dark-blue-card",
      delay: 0.2
    },
    {
      title: "Backend Integration",
      description: "Implementing secure backend solutions with Firebase, AWS, and other cloud platforms to power mobile applications.",
      icon: Database,
      color: "bg-pink-card",
      darkColor: "bg-dark-pink-card",
      delay: 0.3
    }
  ];

  return (
    <section id="services" className="py-20 md:py-24 bg-gray-50 dark:bg-black">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <div 
            ref={domRef}
            className="transition-all duration-500"
            style={{ 
              opacity: isVisible ? 1 : 0, 
              transform: isVisible ? 'none' : 'translateY(-20px)' 
            }}
          >
            <div className="handwritten mb-2 inline-block">What I do?</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">My Expertise</h2>
            <p className="text-gray-600 dark:text-gray-300">
              I specialize in creating exceptional mobile experiences with a focus on performance, 
              security, and intuitive design. Here's how I can help you:
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
