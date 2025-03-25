
import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, Heart } from 'lucide-react';

const IntroCard = ({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) => (
  <div className="glass-card p-6 md:p-8 h-full flex flex-col items-center text-center">
    <div className="bg-church-gold/10 p-4 rounded-full mb-4">
      <Icon className="h-8 w-8 text-church-gold" />
    </div>
    <h3 className="heading-sm mb-3">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

const Introduction = () => {
  return (
    <section id="introduction" className="section-padding bg-church-cream/50 bg-texture-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <div className="inline-block bg-church-gold/20 text-church-brown px-4 py-1 rounded-full text-sm font-medium mb-4">
            Our Mission
          </div>
          <h2 className="heading-lg mb-6">Welcome to Laciathuriu Full Gospel Churches of Kenya</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Founded on the principles of faith, community, and service, our church is dedicated to spreading the love of Christ throughout our community. We believe in the power of the Holy Spirit and the transformative message of the Gospel.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <IntroCard 
            icon={Clock}
            title="Join Our Services"
            description="We meet every Sunday at 9 AM for worship, prayer, and teaching from God's Word. Come experience the presence of God with us."
          />
          <IntroCard 
            icon={Users}
            title="Grow In Community"
            description="Connect with a vibrant community of believers who support, encourage, and pray for one another as we walk together in faith."
          />
          <IntroCard 
            icon={Heart}
            title="Serve With Love"
            description="Discover your gifts and talents to serve others through our various ministries and outreach programs in our local community."
          />
        </div>
        
        <div className="text-center">
          <Link to="/about" className="btn-primary">
            Learn More About Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
