
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import GalleryGrid from '../components/gallery/GalleryGrid';

const Gallery = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <section className="py-20 bg-church-navy text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="inline-block bg-white/10 text-church-gold px-4 py-1 rounded-full text-sm font-medium mb-4">
                Our Memories
              </div>
              <h1 className="heading-xl mb-6">Church Gallery</h1>
              <p className="text-white/80 text-lg leading-relaxed">
                Browse through photos from our worship services, community events, outreach programs, and more.
              </p>
            </div>
          </div>
        </section>
        
        <GalleryGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
