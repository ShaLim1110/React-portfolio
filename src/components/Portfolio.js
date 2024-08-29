import React from 'react';

function Portfolio() {
  return (
    <section id="portfolio" className="bg-gray-100 text-black p-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-4">My Work</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Add project cards here */}
          <div className="bg-white shadow-lg rounded-lg p-4">
            <img src="project1.jpg" alt="Project 1" className="rounded-md mb-4" />
            <h3 className="text-2xl font-semibold">Project 1</h3>
            <p className="text-gray-600">Description of project 1...</p>
          </div>
          {/* Repeat for other projects */}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
