
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

type MinistryProps = {
  title: string;
  description: string;
  icon: React.ElementType;
  imageUrl: string;
  link: string;
};

const MinistryCard = ({ title, description, icon: Icon, imageUrl, link }: MinistryProps) => {
  return (
    <div className="glass-card overflow-hidden group h-full flex flex-col">
      <div className="aspect-video overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <div className="bg-church-gold/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
          <Icon className="h-8 w-8 text-church-gold" />
        </div>
        
        <h3 className="heading-sm mb-3">{title}</h3>
        <p className="text-muted-foreground mb-6 flex-grow">{description}</p>
        
        <Link to={link} className="mt-auto inline-flex items-center text-primary font-medium hover:text-church-gold transition-colors group-hover:translate-x-1 duration-300">
          Learn More
          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default MinistryCard;
