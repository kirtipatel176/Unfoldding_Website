import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Commandments from './components/Commandments';
import PortfolioGrid from './components/PortfolioGrid';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen w-full flex flex-col font-sans">
      <Navbar />
      <main>
        <Hero />
        <Commandments />
        <PortfolioGrid />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}