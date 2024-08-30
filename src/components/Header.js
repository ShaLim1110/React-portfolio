import React, { useRef } from 'react';

function Header() {
  // Create a ref to the Hero section
  const heroRef = useRef(null);

  // Function to scroll to the Hero section
  const scrollToHero = () => {
    heroRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 text-white p-4 z-50 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img src="/alexis.jpg" alt="Logo" className="h-10 w-10 object-cover rounded-full" />
          <button onClick={scrollToHero} className="text-2xl font-bold bg-transparent border-none cursor-pointer">
            Alexis
          </button>
        </div>
        <ul className="flex space-x-6">
          <li><a href="#about" className="hover:text-gray-400">Resume</a></li>
          <li><a href="#portfolio" className="hover:text-gray-400">Portfolio</a></li>
          <li><a href="#certificate" className="hover:text-gray-400">Certificate</a></li>
          <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
