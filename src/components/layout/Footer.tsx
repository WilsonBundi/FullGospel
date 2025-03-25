
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Church Info */}
          <div className="space-y-6">
            <h3 className="font-serif text-xl font-semibold border-b border-white/30 pb-2 mb-4">
              Laciathuriu Full Gospel
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-church-gold shrink-0 mt-1" />
                <p className="text-sm">123 Gundune LCA, Meru County, Kenya</p>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-church-gold shrink-0 mt-1" />
                <p className="text-sm">+254 714 978 525</p>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-church-gold shrink-0 mt-1" />
                <p className="text-sm">info@laciathuriufullgospel.org</p>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-serif text-xl font-semibold border-b border-white/30 pb-2 mb-4">
              Quick Links
            </h3>
            <nav className="flex flex-col space-y-3">
              <Link to="/" className="text-sm hover:text-church-gold transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-sm hover:text-church-gold transition-colors">
                About Us
              </Link>
              <Link to="/sermons" className="text-sm hover:text-church-gold transition-colors">
                Sermons
              </Link>
              <Link to="/ministries" className="text-sm hover:text-church-gold transition-colors">
                Ministries
              </Link>
              <Link to="/gallery" className="text-sm hover:text-church-gold transition-colors">
                Gallery
              </Link>
              <Link to="/contact" className="text-sm hover:text-church-gold transition-colors">
                Contact
              </Link>
            </nav>
          </div>
          
          {/* Service Times */}
          <div className="space-y-6">
            <h3 className="font-serif text-xl font-semibold border-b border-white/30 pb-2 mb-4">
              Service Times
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-church-gold shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-medium">Sunday Service</p>
                  <p className="text-sm">9:00 AM - 12:00 PM</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-church-gold shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-medium">Midweek Service</p>
                  <p className="text-sm">Wednesday, 5:30 PM - 7:00 PM</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-church-gold shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-medium">Prayer Meeting</p>
                  <p className="text-sm">Friday, 6:00 PM - 8:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Connect */}
          <div className="space-y-6">
            <h3 className="font-serif text-xl font-semibold border-b border-white/30 pb-2 mb-4">
              Connect With Us
            </h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="bg-white/10 p-3 rounded-full hover:bg-church-gold/80 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="bg-white/10 p-3 rounded-full hover:bg-church-gold/80 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="bg-white/10 p-3 rounded-full hover:bg-church-gold/80 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
            <Link to="/donate" className="inline-block mt-4 bg-church-gold text-primary font-medium px-6 py-2 rounded-md hover:bg-church-gold/90 transition-colors">
              Donate Now
            </Link>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-6 text-center text-sm">
          <p>© {currentYear} Laciathuriu Full Gospel Churches of Kenya. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
