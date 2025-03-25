
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import DonationOptions from '../components/donation/DonationOptions';

const Donate = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <section className="py-20 bg-church-navy text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="inline-block bg-white/10 text-church-gold px-4 py-1 rounded-full text-sm font-medium mb-4">
                Support Our Mission
              </div>
              <h1 className="heading-xl mb-6">Give Your Tithe & Offerings</h1>
              <p className="text-white/80 text-lg leading-relaxed">
                Your generosity enables us to continue our work in spreading the Gospel and serving our community. Thank you for your faithful support.
              </p>
            </div>
          </div>
        </section>
        
        <DonationOptions />
        
        <section className="section-padding bg-gradient-to-b from-white to-church-cream/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="heading-md mb-6">Other Ways to Give</h2>
              <p className="text-muted-foreground mb-8">
                If you prefer to give in person, you can bring your tithes and offerings to any of our church services. For any questions about giving, please contact our church office.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                <div className="glass-card p-6">
                  <h3 className="heading-sm mb-4">Bank Transfer</h3>
                  <p className="text-muted-foreground mb-4">
                    You can make a direct deposit to our church account:
                  </p>
                  <div className="text-left space-y-2">
                    <p><span className="font-medium">Bank Name:</span> Kenya Commercial Bank</p>
                    <p><span className="font-medium">Account Name:</span> Laciathuriu Full Gospel Church</p>
                    <p><span className="font-medium">Account Number:</span> 1234567890</p>
                    <p><span className="font-medium">Branch:</span> Meru</p>
                  </div>
                </div>
                
                <div className="glass-card p-6">
                  <h3 className="heading-sm mb-4">M-Pesa Paybill</h3>
                  <p className="text-muted-foreground mb-4">
                    You can send your contributions via M-Pesa:
                  </p>
                  <div className="text-left space-y-2">
                    <p><span className="font-medium">Paybill Number:</span> 123456</p>
                    <p><span className="font-medium">Account Name:</span> Your Name</p>
                    <p><span className="font-medium">Reference:</span> Tithe/Offering/Building Fund</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Donate;
