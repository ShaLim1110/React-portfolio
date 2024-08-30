import React from 'react';

function About() {
  return (
    <section id="about" className="bg-gray-900 text-white h-screen flex flex-col justify-start items-center pt-5">
      <h1 className="font-bold text-5xl mb-1 text-white">RESUME</h1>
      <img src="/resume.png" alt="Resume" className="w-full max-w-xl object-cover rounded-lg shadow-lg mb-1" />
      <a
        href="/resume.pdf"
        download="Resume.pdf"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Download Resume
      </a>
    </section>
  );
}

export default About;
