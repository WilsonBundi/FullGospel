
import React from 'react';

const History = () => {
  return (
    <section className="section-padding bg-church-cream/30 bg-texture-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <div className="inline-block bg-church-gold/20 text-church-brown px-4 py-1 rounded-full text-sm font-medium mb-4">
            Our Journey
          </div>
          <h2 className="heading-lg mb-6">The History of Our Church</h2>
          <p className="text-muted-foreground">
            Tracing our roots from humble beginnings to the vibrant community we are today.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="glass-card p-6 md:p-8">
              <h3 className="heading-sm mb-4">Our Founding (1990-1995)</h3>
              <p className="text-muted-foreground">
                Laciathuriu Full Gospel of Kenya began as a small prayer group in 1997, meeting in the home of our founder, Bishop Kanyithia. With only 15 members initially, the group grew steadily as more people from the community joined in worship and prayer.
              </p>
              <p className="text-muted-foreground mt-4">
                By 2003, the congregation had grown to 50 members, and we moved to our first official church building - a modest structure that became the foundation of our ministry in the region.
              </p>
            </div>
            
            <div className="glass-card p-6 md:p-8">
              <h3 className="heading-sm mb-4">Growth and Development (1996-2010)</h3>
              <p className="text-muted-foreground">
                Under the leadership of Pastor Kinga, who joined the church in 1999, we expanded our ministries to include youth programs, women's fellowship, and community outreach. These years marked significant spiritual growth and community impact.
              </p>
              <p className="text-muted-foreground mt-4">
                In 2005, we began construction on our current sanctuary, which was completed in 2010 through the generous contributions and volunteer work of our members. This beautiful space has allowed us to worship together and serve our community more effectively.
              </p>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="glass-card p-6 md:p-8">
              <h3 className="heading-sm mb-4">Recent Years (2011-Present)</h3>
              <p className="text-muted-foreground">
                Pastor Jacob joined our leadership team in 2024, bringing fresh vision and energy to our congregation. Under his guidance, we've expanded our digital ministry, established new outreach programs, and strengthened our youth and children's ministries.
              </p>
              <p className="text-muted-foreground mt-4">
                Today, with over 100 members, Laciathuriu Full Gospel Church continues to be a beacon of hope and faith in our community. We remain committed to spreading the Gospel message and serving others with compassion and love.
              </p>
            </div>
            
            <div className="glass-card p-6 md:p-8">
              <h3 className="heading-sm mb-4">Our Vision for the Future</h3>
              <p className="text-muted-foreground">
                As we look ahead, we envision expanding our impact in the community through increased outreach efforts, establishing a community center to serve local needs, and developing a robust discipleship program to equip members for ministry and mission.
              </p>
              <p className="text-muted-foreground mt-4">
                We are excited about what God has in store for Laciathuriu Full Gospel Churches of Kenya and invite you to join us on this journey of faith and service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
