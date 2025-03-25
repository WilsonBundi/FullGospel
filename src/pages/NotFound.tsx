
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-md mx-auto glass-card p-8 md:p-12">
            <h1 className="text-8xl font-bold text-church-gold mb-4">404</h1>
            <h2 className="heading-md mb-6">Page Not Found</h2>
            <p className="text-muted-foreground mb-8">
              We couldn't find the page you're looking for. It might have been moved, deleted, or never existed.
            </p>
            <Link to="/" className="btn-primary">
              Return to Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
