import React, { useEffect, useState } from 'react';
import Header from './components/Header';  // Ensure correct path
import Hero from './components/Hero';      // Ensure correct path
import Home from './components/Home';      // Ensure correct path
import About from './components/About';    // Ensure correct path
import Roadmap from './components/Roadmap';// Ensure correct path
import './App.css';            // Your main CSS file
import Footer from './components/Footer';

function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <>
      <Header />
      {(currentHash === '#home' || currentHash === '') && <Hero />}
      <main>
        {(currentHash === '#home' || currentHash === '') && <Home />}
        {currentHash === '#about' && <About />}
        {currentHash === '#roadmap' && <Roadmap />}
      </main>
      <Footer />
    </>
  );
}

export default App;
