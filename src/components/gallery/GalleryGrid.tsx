
import React, { useState } from 'react';
import { X } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1515162305285-0293e4767cc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Sunday Worship Service",
    category: "Worship"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1470826052883-56de01e2b6a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Youth Ministry Retreat",
    category: "Youth"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1523803326055-13445afc4136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Women's Conference",
    category: "Women"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Children's Sunday School",
    category: "Children"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Community Outreach",
    category: "Outreach"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1576444356170-66073046b1bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Christmas Celebration",
    category: "Events"
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1547355253-ff0740f6e8c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Easter Service",
    category: "Events"
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Worship Team Practice",
    category: "Worship"
  }
];

const GalleryGrid = () => {
  const [selectedImage, setSelectedImage] = useState<null | typeof galleryImages[0]>(null);
  const [filter, setFilter] = useState("All");
  
  const filteredImages = filter === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);
  
  const categories = ["All", ...Array.from(new Set(galleryImages.map(img => img.category)))];

  return (
    <section className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <div className="inline-block bg-church-gold/20 text-church-brown px-4 py-1 rounded-full text-sm font-medium mb-4">
            Our Memories
          </div>
          <h2 className="heading-lg mb-6">Photo Gallery</h2>
          <p className="text-muted-foreground">
            Explore moments from our worship services, community events, and outreach programs. These images capture the spirit and community of Laciathuriu Full Gospel.
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === category
                    ? 'bg-church-gold text-white'
                    : 'bg-muted hover:bg-church-gold/20 text-muted-foreground hover:text-church-brown'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image)}
              className="glass-card overflow-hidden cursor-pointer group animate-fade-in"
              style={{ animationDelay: `${image.id * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-base">{image.title}</h3>
                <p className="text-church-gold text-sm">{image.category}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-5xl w-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white rounded-full p-2 text-black hover:bg-gray-200 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <div className="text-white text-center mt-4">
                <h3 className="text-xl font-medium">{selectedImage.title}</h3>
                <p className="text-gray-300">{selectedImage.category}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GalleryGrid;
