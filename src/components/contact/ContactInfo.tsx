
import React from 'react';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';

const ContactInfo = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <div className="inline-block bg-church-gold/20 text-church-brown px-4 py-1 rounded-full text-sm font-medium mb-4">
                Get in Touch
              </div>
              <h2 className="heading-lg mb-6">Contact Information</h2>
              <p className="text-muted-foreground mb-8">
                We welcome you to reach out to us with any questions, prayer requests, or if you'd like to join our church family. Our friendly staff and volunteers are here to help.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-church-gold/10 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-church-gold" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Our Location</h3>
                  <p className="text-muted-foreground">123 Faith Avenue, Meru County, Kenya</p>
                  <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-church-gold mt-2 text-sm font-medium"
                  >
                    View on Map <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-church-gold/10 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-church-gold" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Phone</h3>
                  <p className="text-muted-foreground">+254 714 978 525</p>
                  <p className="text-muted-foreground">+254 725 252 908 (Office)</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-church-gold/10 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-church-gold" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Email</h3>
                  <p className="text-muted-foreground">info@laciathuriufullgospel.org</p>
                  <p className="text-muted-foreground">pastor@laciathuriufullgospel.org</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-church-gold/10 p-3 rounded-full mr-4">
                  <Clock className="h-6 w-6 text-church-gold" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Service Hours</h3>
                  <p className="text-muted-foreground">Sunday: 9:00 AM - 12:00 PM</p>
                  <p className="text-muted-foreground">Wednesday: 5:30 PM - 7:00 PM</p>
                  <p className="text-muted-foreground">Friday: 6:00 PM - 8:00 PM (Prayer Meeting)</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="h-full min-h-[400px] overflow-hidden rounded-xl shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127672.75772082225!2d37.5823558!3d0.050609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x178821e5eed5df97%3A0x62c35b4c8b5df83f!2sMeru%2C%20Kenya!5e0!3m2!1sen!2sus!4v1652345678901!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Church Location"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
