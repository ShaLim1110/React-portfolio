import React from 'react';
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa'; // Importing the icons

function Hero() {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-white">
      <div className="absolute inset-0">
        <img src="bg.gif" alt="Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay to improve text readability */}
      </div>
      <div className="relative z-10 text-center">
        <h1>
          <strong className="text-6xl font-bold mb-4">Hi, I am </strong>
          <strong className="text-6xl font-mono mb-4 text-yellow-300">Alexis Loma</strong>
        </h1>
        <p className="text-xl mb-2">Bachelor of Science in Information Technology</p>
        <p className="text-xl font-serif text-red-700 mb-6">University of Mindanao</p>

        <div className="flex space-x-6 mt-8 justify-center">
          <a href="https://web.facebook.com/AlexisShaLim1/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
            <FaFacebookF size={30} />
          </a>
          <a href="https://github.com/ShaLim1110" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-500">
            <FaGithub size={30} />
          </a>
          <a href="https://www.linkedin.com/in/alexis-loma-468a50279/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-700">
            <FaLinkedinIn size={30} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
