
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import MinistryCard from '../components/ministries/MinistryCard';
import { Music, Users, Heart, BookOpen, Baby, Globe } from 'lucide-react';

const ministries = [
  {
    title: "Worship Ministry",
    description: "Our worship team leads the congregation in praise and worship through music, creating an atmosphere for the presence of God.",
    icon: Music,
    imageUrl: "https://images.unsplash.com/photo-1472653525502-fc569e405a74?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "/ministries#worship"
  },
  {
    title: "Youth Ministry",
    description: "Dedicated to nurturing and guiding young people in their spiritual journey through Bible study, fellowship, and fun activities.",
    icon: Users,
    imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "/ministries#youth"
  },
  {
    title: "Women's Ministry",
    description: "Empowering women through prayer, Bible study, and fellowship, creating a supportive community for spiritual growth.",
    icon: Heart,
    imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "/ministries#women"
  },
  {
    title: "Bible Study",
    description: "In-depth exploration of God's Word, providing knowledge, understanding, and practical application for daily living.",
    icon: BookOpen,
    imageUrl: "https://images.unsplash.com/photo-1504052434669-c0c0c7594b83?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "/ministries#bible-study"
  },
  {
    title: "Children's Ministry",
    description: "Teaching children about God's love through age-appropriate lessons, activities, and songs in a safe and nurturing environment.",
    icon: Baby,
    imageUrl: "https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "/ministries#children"
  },
  {
    title: "Missions & Outreach",
    description: "Extending God's love beyond our church walls through community service, evangelism, and support for missionaries.",
    icon: Globe,
    imageUrl: "https://images.unsplash.com/photo-1469571486292-b53601bbfc73?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "/ministries#missions"
  }
];

const Ministries = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <section className="py-20 bg-church-navy text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="inline-block bg-white/10 text-church-gold px-4 py-1 rounded-full text-sm font-medium mb-4">
                Get Involved
              </div>
              <h1 className="heading-xl mb-6">Our Ministries</h1>
              <p className="text-white/80 text-lg leading-relaxed">
                Discover the various ministries at Laciathuriu Full Gospel of Kenya and find where you can serve, grow, and connect with others.
              </p>
            </div>
          </div>
        </section>
        
        <section className="section-padding">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ministries.map((ministry, index) => (
                <MinistryCard 
                  key={index}
                  title={ministry.title}
                  description={ministry.description}
                  icon={ministry.icon}
                  imageUrl={ministry.imageUrl}
                  link={ministry.link}
                />
              ))}
            </div>
            
            <div className="max-w-3xl mx-auto mt-16 text-center">
              <h2 className="heading-md mb-6">Find Your Place to Serve</h2>
              <p className="text-muted-foreground mb-8">
                We believe every member has gifts and talents that can be used to serve God and others. If you're interested in joining any of our ministries, please reach out to us.
              </p>
              <a href="/contact" className="btn-primary">
                Contact Us About Serving
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Ministries;
