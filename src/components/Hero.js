import React from 'react';

function Hero() {
  return (
    <section className="bg-gray-800 text-white h-screen flex flex-col justify-center items-center">
      <h1 className="text-6xl font-bold mb-4">Welcome to Alexis' Portfolio</h1>
      <p className="text-xl mb-6">I'm a Developer & Designer</p>
      <a href="#portfolio" className="bg-blue-500 px-6 py-3 rounded-full text-white hover:bg-blue-600">View My Work</a>
    </section>
  );
}

export default Hero;
