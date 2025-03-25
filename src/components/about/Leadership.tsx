
import React from 'react';

type LeaderProps = {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
};

const LeaderCard = ({ name, role, bio, imageUrl }: LeaderProps) => {
  return (
    <div className="glass-card overflow-hidden h-full flex flex-col">
      <div className="aspect-[3/4] overflow-hidden">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col h-full">
        <h3 className="heading-sm mb-1">{name}</h3>
        <p className="text-church-gold font-medium mb-4">{role}</p>
        <p className="text-muted-foreground flex-grow">{bio}</p>
      </div>
    </div>
  );
};

const Leadership = () => {
  const leaders = [
    {
      name: "Rev. Kithinji",
      role: "Senior Reverend",
      bio: "Reverend Kithinji has been leading our church for over 15 years with wisdom and grace. His passion for scripture and community has guided our church's growth and outreach programs.",
      imageUrl: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=650&q=80"
    },
    {
      name: "Pastor Jacob",
      role: "Lead Pastor",
      bio: "Pastor Jacob oversees the daily operations of our church with a heart for discipleship and teaching. His engaging sermons and approachable leadership style have fostered a welcoming community.",
      imageUrl: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=650&q=80"
    },
    {
      name: "Joyce Mukiri",
      role: "Women's Ministry Leader",
      bio: "Joyce  leads our women's ministry with compassion and insight. Her dedication to women's spiritual growth and community support has created a nurturing environment for all women in our church.",
      imageUrl: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=650&q=80"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <div className="inline-block bg-church-gold/20 text-church-brown px-4 py-1 rounded-full text-sm font-medium mb-4">
            Our Leadership
          </div>
          <h2 className="heading-lg mb-6">Meet Our Church Leaders</h2>
          <p className="text-muted-foreground">
            Our church is blessed with dedicated leaders who serve with heart and wisdom, guiding our congregation in worship, fellowship, and community service.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <LeaderCard
              key={index}
              name={leader.name}
              role={leader.role}
              bio={leader.bio}
              imageUrl={leader.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
