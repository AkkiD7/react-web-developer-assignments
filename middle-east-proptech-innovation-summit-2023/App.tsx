import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarketAnalysis from './components/MarketAnalysis';
import Highlights from './components/Highlights';
import Attendees from './components/Attendees';
import WhyAttend from './components/WhyAttend';
import Sponsorship from './components/Sponsorship';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <MarketAnalysis />
        <Attendees />
        <Highlights />
        <WhyAttend />
        <Sponsorship />
      </main>
      <Footer />
    </div>
  );
};

export default App;