
import { ArrowRight, Mail, Github, Linkedin } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Hero = () => {
  const { domRef, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="pt-32 pb-20 md:pt-36 md:pb-24 overflow-hidden grid-pattern">
      <div className="container mx-auto px-6 md:px-12">
        <div ref={domRef} className={`grid md:grid-cols-2 gap-12 items-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="order-2 md:order-1">
            <div className="handwritten mb-2">Mobile Developer</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              I build exceptional<br />
              mobile experiences
            </h1>
            <p className="text-gray-600 mb-8 text-lg">
              Specializing in Flutter and Android development with a focus on creating seamless, 
              intuitive applications that solve real problems.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <a href="#contact" className="button-primary">
                <span>Hire Me</span>
                <ArrowRight size={18} />
              </a>
              <a href="#projects" className="button-outline">
                <span>View Projects</span>
              </a>
            </div>
            
            <div className="flex gap-6">
              <a 
                href="mailto:oyempemia@gmail.com" 
                className="animated-icon flex items-center justify-center h-10 w-10 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="animated-icon flex items-center justify-center h-10 w-10 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="animated-icon flex items-center justify-center h-10 w-10 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-purple-100 flex items-center justify-center overflow-hidden animate-float">
              <div className="absolute inset-2 rounded-full bg-white">
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-200 to-blue-200"></div>
                  {/* User avatar image would go here */}
                  <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-purple-600">H</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 transform rotate-3 bg-yellow-card px-5 py-3 rounded-lg shadow-lg animate-rotate-card">
              <div className="font-medium">Flutter Developer</div>
            </div>
            
            <div className="absolute -top-4 -right-4 transform -rotate-6 bg-blue-card px-5 py-3 rounded-lg shadow-lg animate-rotate-card">
              <div className="font-medium">Mobile Expert</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
