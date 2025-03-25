
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToIntro = () => {
    const introSection = document.getElementById('introduction');
    if (introSection) {
      introSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 to-primary/90"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 pt-20 text-center">
        <div className="max-w-4xl mx-auto space-y-6 animate-fade-in-slow">
          <div className="inline-block bg-church-gold/95 text-primary px-4 py-1 rounded-full text-sm font-medium tracking-wide mb-3 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Welcome to Our Church
          </div>
          
          <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight animate-fade-in" style={{ animationDelay: '0.6s' }}>
            Laciathuriu <span className="text-church-gold">Full Gospel</span> Churches of Kenya
          </h1>
          
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.9s' }}>
            A place of faith, hope, and love where all are welcome to worship and grow in Christ.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6 animate-fade-in" style={{ animationDelay: '1.2s' }}>
            <Link to="/about" className="btn-secondary">
              About Our Church
            </Link>
            <Link to="/sermons" className="btn-outline text-white border-white/30 hover:bg-white/10 hover:border-white/50 hover:text-white">
              Watch Sermons
            </Link>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
          onClick={scrollToIntro}
        >
          <div className="bg-white/20 backdrop-blur-lg rounded-full p-3 hover:bg-white/30 transition-colors">
            <ChevronDown className="h-6 w-6 text-white" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
