
import React from 'react';

const MissionVision = () => {
  return (
    <section className="section-padding bg-church-navy text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Mission Statement */}
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block bg-white/10 text-church-gold px-4 py-1 rounded-full text-sm font-medium">
              Our Mission
            </div>
            <h2 className="heading-lg">
              Sharing Christ's Love Through Word and Action
            </h2>
            <p className="text-white/80 leading-relaxed">
              At Laciathuriu Full Gospel Churches of Kenya, our mission is to share the Gospel of Jesus Christ, make disciples, and serve our community with compassion and love. We are dedicated to creating a welcoming environment where everyone can experience God's presence and grow in their faith journey.
            </p>
            <div className="pt-4">
              <blockquote className="border-l-4 border-church-gold pl-4 italic text-white/90">
                "Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit."
                <footer className="text-church-gold mt-2 text-sm">Matthew 28:19</footer>
              </blockquote>
            </div>
          </div>
          
          {/* Vision Statement */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="inline-block bg-white/10 text-church-gold px-4 py-1 rounded-full text-sm font-medium">
              Our Vision
            </div>
            <h2 className="heading-lg">
              Building a Community of Faith, Hope, and Love
            </h2>
            <p className="text-white/80 leading-relaxed">
              We envision a vibrant church that transforms lives through the power of the Holy Spirit. Our vision is to be a beacon of light in our community, fostering spiritual growth, meaningful relationships, and active service to others. We strive to be a church where:
            </p>
            <ul className="space-y-2 text-white/80">
              <li className="flex items-start">
                <span className="text-church-gold mr-2">•</span>
                <span>People experience God's love and grace</span>
              </li>
              <li className="flex items-start">
                <span className="text-church-gold mr-2">•</span>
                <span>Families are strengthened and supported</span>
              </li>
              <li className="flex items-start">
                <span className="text-church-gold mr-2">•</span>
                <span>Disciples are equipped for ministry and mission</span>
              </li>
              <li className="flex items-start">
                <span className="text-church-gold mr-2">•</span>
                <span>The community is served with compassion</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
