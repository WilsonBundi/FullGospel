
import React, { useState } from 'react';
import { CreditCard, Smartphone, Building, Heart } from 'lucide-react';
import { toast } from "sonner";

const DonationOptions = () => {
  const [selectedAmount, setSelectedAmount] = useState<string | number>('');
  const [customAmount, setCustomAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  
  const predefinedAmounts = [500, 1000, 2000, 5000];
  
  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };
  
  const handleCustomAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setSelectedAmount('custom');
  };
  
  const handleDonationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const amount = selectedAmount === 'custom' ? customAmount : selectedAmount;
    
    if (!amount || !paymentMethod) {
      toast.error("Please select an amount and payment method");
      return;
    }
    
    setIsProcessing(true);
    
    // Simulate processing
    setTimeout(() => {
      setIsProcessing(false);
      toast.success("Thank you for your generous donation!");
      
      // Reset form
      setSelectedAmount('');
      setCustomAmount('');
      setPaymentMethod('');
    }, 1500);
  };

  return (
    <section className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Donation Info */}
            <div className="space-y-6">
              <div className="inline-block bg-church-gold/20 text-church-brown px-4 py-1 rounded-full text-sm font-medium mb-4">
                Support Our Church
              </div>
              <h2 className="heading-lg mb-6">Give Your Tithe & Offerings</h2>
              <p className="text-muted-foreground">
                Your generosity makes a difference in our church and community. All donations help support our ministries, outreach programs, and the maintenance of our church facilities.
              </p>
              
              <div className="space-y-4 mt-6">
                <div className="flex items-start">
                  <Heart className="h-5 w-5 text-church-gold mr-3 mt-1" />
                  <p className="text-muted-foreground">
                    <span className="font-medium text-foreground">General Fund:</span> Supports the overall operations and ministries of the church.
                  </p>
                </div>
                <div className="flex items-start">
                  <Heart className="h-5 w-5 text-church-gold mr-3 mt-1" />
                  <p className="text-muted-foreground">
                    <span className="font-medium text-foreground">Building Fund:</span> Supports maintenance and improvements to our church facilities.
                  </p>
                </div>
                <div className="flex items-start">
                  <Heart className="h-5 w-5 text-church-gold mr-3 mt-1" />
                  <p className="text-muted-foreground">
                    <span className="font-medium text-foreground">Missions Fund:</span> Supports our missionaries and outreach programs locally and abroad.
                  </p>
                </div>
              </div>
              
              <blockquote className="border-l-4 border-church-gold pl-4 italic text-muted-foreground">
                "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver."
                <footer className="text-church-gold mt-2 text-sm">2 Corinthians 9:7</footer>
              </blockquote>
            </div>
            
            {/* Donation Form */}
            <form onSubmit={handleDonationSubmit} className="glass-card p-6 md:p-8">
              <h3 className="heading-sm mb-6">Make a Donation</h3>
              
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">
                  Select Amount (KES)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-3">
                  {predefinedAmounts.map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      className={`p-3 rounded-md border ${
                        selectedAmount === amount
                          ? 'bg-church-gold/20 border-church-gold text-primary font-medium'
                          : 'border-border hover:border-church-gold/50'
                      } transition-colors`}
                      onClick={() => handleAmountSelect(amount)}
                    >
                      KES {amount.toLocaleString()}
                    </button>
                  ))}
                </div>
                
                <div className="mt-3">
                  <label htmlFor="customAmount" className="block text-sm font-medium mb-2">
                    Custom Amount
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                      KES
                    </span>
                    <input
                      type="number"
                      id="customAmount"
                      value={customAmount}
                      onChange={handleCustomAmount}
                      placeholder="Enter amount"
                      className="w-full pl-12 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <label className="block text-sm font-medium mb-2">
                  Payment Method
                </label>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="mpesa"
                      name="paymentMethod"
                      value="mpesa"
                      checked={paymentMethod === 'mpesa'}
                      onChange={() => setPaymentMethod('mpesa')}
                      className="h-4 w-4 text-church-gold focus:ring-church-gold"
                    />
                    <label htmlFor="mpesa" className="flex items-center ml-2">
                      <Smartphone className="h-5 w-5 text-green-600 mr-2" />
                      M-Pesa
                    </label>
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="bank"
                      name="paymentMethod"
                      value="bank"
                      checked={paymentMethod === 'bank'}
                      onChange={() => setPaymentMethod('bank')}
                      className="h-4 w-4 text-church-gold focus:ring-church-gold"
                    />
                    <label htmlFor="bank" className="flex items-center ml-2">
                      <Building className="h-5 w-5 text-blue-600 mr-2" />
                      Bank Transfer
                    </label>
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="card"
                      name="paymentMethod"
                      value="card"
                      checked={paymentMethod === 'card'}
                      onChange={() => setPaymentMethod('card')}
                      className="h-4 w-4 text-church-gold focus:ring-church-gold"
                    />
                    <label htmlFor="card" className="flex items-center ml-2">
                      <CreditCard className="h-5 w-5 text-purple-600 mr-2" />
                      Credit/Debit Card
                    </label>
                  </div>
                </div>
              </div>
              
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full btn-secondary flex items-center justify-center"
              >
                {isProcessing ? 'Processing...' : 'Complete Donation'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationOptions;
