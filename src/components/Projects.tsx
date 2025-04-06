
import { ExternalLink } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ProjectCard = ({ 
  title, 
  description, 
  tags,
  url, 
  index 
}: {
  title: string;
  description: string;
  tags: string[];
  url: string;
  index: number;
}) => {
  const { domRef, isVisible } = useScrollAnimation({ threshold: 0.2 });
  
  // Alternate the card colors
  const cardColors = ["project-card-yellow", "project-card-blue", "project-card-pink"];
  const color = cardColors[index % cardColors.length];
  
  return (
    <div 
      ref={domRef}
      className={`relative rounded-xl overflow-hidden transition-all duration-500 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className={`${color} p-6 md:p-8 h-full card-shadow group-hover:animate-card-hover`}>
        <div className="mb-4 flex flex-wrap gap-2">
          {tags.map((tag, tagIndex) => (
            <span key={tagIndex} className="tag">{tag}</span>
          ))}
        </div>
        <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-800">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <a 
          href="{{ url }}" target="_blank"
          className="inline-flex items-center gap-2 font-medium text-gray-900 group-hover:text-purple-600 transition-colors"
        >
          View Project <ExternalLink size={16} />
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  const { domRef, isVisible } = useScrollAnimation();
  
  const projects = [
    {
      title: "Dukka App",
      description: "All your Businesses in the palm of your hands.",
      tags: ["Flutter", "Fintech", "Business"],
      url: "https://dukka.com/"
    },
    {
      title: "Kada",
      description: "A community focused app that helps you manage Endowment fund and causes for your small and large Alumni networks",
      tags: ["Flutter", "Java", "Endowment", "Alumni"],
      url: "https://kada.ng/"
    },
    {
      title: "Weeshr",
      description: "A comprehensive birthday gifting platform with wishlist creation, social sharing features, and secure payment integration.",
      tags: ["Flutter", "Firebase"],
      url: "https://weeshr.com/"
    },
    {
      title: "Baxi Onafriq",
      description: "Financial platform enabling agent-based transactions, commission tracking, and integrated mobile money systems with real-time processing.",
      tags: ["Flutter", "Financial APIs"],
      url: "https://onafriq.com/"
    },
    {
      title: "My Invester",
      description: "A fintech app that helps you manage your savings, investments, loan disburment etc",
      tags: ["Flutter", "Fintech", "Investment"],
      url: "https://myinvestar.ng/"
    },
    {
      title: "Flash Chat",
      description: "Modern messaging app with Firebase authentication, custom animations, and real-time chat functionality.",
      tags: ["Flutter", "Firebase"],
      url: "#"
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <div 
            ref={domRef}
            className={`transition-all duration-500 ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-4'}`}
          >
            <div className="handwritten mb-2 inline-block">Featured Projects</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white">My Recent Work</h2>
            <p className="text-gray-600 dark:text-gray-300">
              I've worked on a variety of projects, from mobile applications to comprehensive platforms. 
              Here are some highlights from my portfolio:
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
