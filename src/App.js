import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Certificate from './components/Certificate';
import LoadingScreen from './components/LoadingScreen'; // Import LoadingScreen

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading time with a timeout
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds for example

    // Clear the timeout if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? <LoadingScreen /> : (
        <>
          <Header />
          <Hero />
          <About />
          <Portfolio />
          <Certificate />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;

