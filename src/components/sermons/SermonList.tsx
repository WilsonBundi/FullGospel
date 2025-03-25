
import React, { useState } from 'react';
import { Play, Calendar, Clock, Download, Search } from 'lucide-react';

type SermonType = {
  id: number;
  title: string;
  preacher: string;
  date: string;
  duration: string;
  thumbnail: string;
  audioUrl: string;
  description: string;
};

const sermons: SermonType[] = [
  {
    id: 1,
    title: "The Power of Faith",
    preacher: "Pastor Jacob",
    date: "May 21, 2023",
    duration: "45 minutes",
    thumbnail: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    audioUrl: "#",
    description: "Exploring how faith can move mountains in our lives and help us overcome challenges."
  },
  {
    id: 2,
    title: "Walking in God's Purpose",
    preacher: "Rev. Kithinji",
    date: "May 14, 2023",
    duration: "52 minutes",
    thumbnail: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    audioUrl: "#",
    description: "Discovering God's unique calling for our lives and learning to walk in His purpose."
  },
  {
    id: 3,
    title: "The Grace of Giving",
    preacher: "Pastor Jacob",
    date: "May 7, 2023",
    duration: "38 minutes",
    thumbnail: "https://images.unsplash.com/photo-1490127252417-7c393f973fdf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    audioUrl: "#",
    description: "Understanding the biblical principles of generosity and the blessings that come from giving."
  },
  {
    id: 4,
    title: "Finding Peace in Troubled Times",
    preacher: "Rev. Kithinji",
    date: "April 30, 2023",
    duration: "49 minutes",
    thumbnail: "https://images.unsplash.com/photo-1473773508845-188df298d2d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    audioUrl: "#",
    description: "How to experience God's peace even in the midst of life's storms and challenges."
  }
];

const SermonList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredSermons = sermons.filter(sermon => 
    sermon.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    sermon.preacher.toLowerCase().includes(searchTerm.toLowerCase()) ||
    sermon.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <div className="inline-block bg-church-gold/20 text-church-brown px-4 py-1 rounded-full text-sm font-medium mb-4">
            Learn & Grow
          </div>
          <h2 className="heading-lg mb-6">Recent Sermons</h2>
          <p className="text-muted-foreground">
            Listen to our recent sermons to deepen your understanding of God's Word and apply spiritual truths to your daily life.
          </p>
          
          {/* Search Bar */}
          <div className="mt-8 max-w-md mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="h-5 w-5 text-muted-foreground" />
              </div>
              <input
                type="text"
                className="w-full pl-10 py-3 bg-white border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors"
                placeholder="Search sermons..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredSermons.map((sermon) => (
            <div key={sermon.id} className="glass-card overflow-hidden flex flex-col md:flex-row h-full">
              <div className="md:w-2/5 aspect-video md:aspect-auto relative group">
                <img 
                  src={sermon.thumbnail} 
                  alt={sermon.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                  <div className="bg-white rounded-full p-3">
                    <Play className="h-8 w-8 text-primary fill-current" />
                  </div>
                </div>
              </div>
              
              <div className="p-6 md:w-3/5 flex flex-col">
                <h3 className="heading-sm mb-2">{sermon.title}</h3>
                <p className="text-church-gold mb-4">{sermon.preacher}</p>
                
                <div className="flex items-center text-sm text-muted-foreground mb-4">
                  <div className="flex items-center mr-4">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{sermon.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{sermon.duration}</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground flex-grow">{sermon.description}</p>
                
                <div className="mt-6 flex items-center space-x-4">
                  <button className="btn-primary py-2 px-4 h-auto inline-flex items-center">
                    <Play className="h-4 w-4 mr-2" /> Play
                  </button>
                  <button className="btn-outline py-2 px-4 h-auto inline-flex items-center">
                    <Download className="h-4 w-4 mr-2" /> Download
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="btn-secondary">
            Load More Sermons
          </button>
        </div>
      </div>
    </section>
  );
};

export default SermonList;
