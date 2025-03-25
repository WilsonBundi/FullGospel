
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Leadership from '../components/about/Leadership';
import History from '../components/about/History';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <section className="py-20 bg-church-navy text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="inline-block bg-white/10 text-church-gold px-4 py-1 rounded-full text-sm font-medium mb-4">
                Who We Are
              </div>
              <h1 className="heading-xl mb-6">About Our Church</h1>
              <p className="text-white/80 text-lg leading-relaxed">
                Learn about the history, leadership, and vision of Laciathuriu Full Gospel of Kenya — a church family dedicated to spreading the Gospel and serving our community.
              </p>
            </div>
          </div>
        </section>
        
        <Leadership />
        <History />
      </main>
      <Footer />
    </div>
  );
};

export default About;
