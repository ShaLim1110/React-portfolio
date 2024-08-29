import React from 'react';

function Header() {
  return (
    <header className="bg-black text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Alexis</div>
        <ul className="flex space-x-6">
          <li><a href="#about" className="hover:text-gray-400">About</a></li>
          <li><a href="#portfolio" className="hover:text-gray-400">Portfolio</a></li>
          <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
