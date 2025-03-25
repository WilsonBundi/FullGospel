
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ContactInfo from '../components/contact/ContactInfo';
import ContactForm from '../components/contact/ContactForm';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <section className="py-20 bg-church-navy text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="inline-block bg-white/10 text-church-gold px-4 py-1 rounded-full text-sm font-medium mb-4">
                Get In Touch
              </div>
              <h1 className="heading-xl mb-6">Contact Us</h1>
              <p className="text-white/80 text-lg leading-relaxed">
                We'd love to hear from you! Reach out with your questions, prayer requests, or to learn more about our church family.
              </p>
            </div>
          </div>
        </section>
        
        <ContactInfo />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
