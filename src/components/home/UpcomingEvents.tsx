
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';

const events = [
  {
    id: 1,
    title: "Sunday Worship Service",
    date: "Every Sunday",
    time: "9:00 AM - 12:00 PM",
    location: "Main Sanctuary",
    description: "Join us for praise and worship, prayer, and a powerful message from Pastor Jacob.",
  },
  {
    id: 2,
    title: "Youth Conference 2023",
    date: "June 15-17, 2023",
    time: "9:00 AM - 5:00 PM",
    location: "Church Grounds",
    description: "A three-day conference for young people to grow in faith and fellowship.",
  },
  {
    id: 3,
    title: "Bible Study & Prayer Meeting",
    date: "Every Wednesday",
    time: "5:30 PM - 7:00 PM",
    location: "Fellowship Hall",
    description: "Mid-week gathering for Bible study, prayer, and spiritual growth.",
  },
];

const EventCard = ({ event }: { event: typeof events[0] }) => {
  return (
    <div className="glass-card h-full flex flex-col">
      <div className="p-6 md:p-8 flex flex-col h-full">
        <div className="mb-4">
          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
            Upcoming
          </span>
        </div>
        <h3 className="heading-sm mb-3">{event.title}</h3>
        
        <div className="space-y-3 mb-6 text-muted-foreground">
          <div className="flex items-center">
            <Calendar className="h-5 w-5 mr-3 text-church-gold" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-5 w-5 mr-3 text-church-gold" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-5 w-5 mr-3 text-church-gold" />
            <span>{event.location}</span>
          </div>
        </div>
        
        <p className="text-muted-foreground mb-6 flex-grow">{event.description}</p>
        
        <Link to="/sermons" className="mt-auto inline-flex items-center text-primary font-medium hover:text-church-gold transition-colors">
          Learn More
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

const UpcomingEvents = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-church-cream/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <div className="inline-block bg-church-gold/20 text-church-brown px-4 py-1 rounded-full text-sm font-medium mb-4">
            Join Us
          </div>
          <h2 className="heading-lg mb-6">Upcoming Events & Services</h2>
          <p className="text-muted-foreground">
            We invite you to join us for worship and fellowship. Here are some upcoming events and regular services at Laciathuriu Full Gospel of Kenya.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/sermons" className="btn-primary">
            View All Events
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
