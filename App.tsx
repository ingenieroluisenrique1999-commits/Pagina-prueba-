import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Portfolio from './components/Portfolio';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-tech-500 selection:text-white">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Portfolio />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default App;