import React from 'react';

function Portfolio() {
  return (
    <section id="portfolio" className="bg-gray-800 text-white min-h-screen flex flex-col justify-start items-center py-16 px-4">
      <h1 className="font-bold text-5xl mb-8 text-white">Portfolio</h1>
      
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 w-full max-w-8xl ">
        {/* Project 1 */}
        <div className="flex flex-col bg-gray-900 p-20 rounded-lg shadow-lg w-full md:w-1/2">
          <img src="/shop.jpg" alt="Project 1" className="w-full h-80 object-cover rounded-lg mb-4" /> {/* Adjusted height here */}
          <h3 className="text-2xl font-semibold mb-2">Auto Parts Shop</h3>
          <p className="text-base mb-4">
          This final capstone project, developed at the University of Mindanao, is an Android mobile application called "AutoParts." The primary functions of AutoParts include scanning motorcycle parts using TensorFlow for identification and locating registered motorcycle shops through geolocation services
          </p>
          <a href="https://github.com/ShaLim1110/AutoParts" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
        {/* Project 2 */}
        <div className="flex flex-col bg-gray-900 p-20 rounded-lg shadow-lg w-full md:w-1/2">
          <img src="/room.png" alt="Project 2" className="w-full h-80 object-cover rounded-lg mb-4" /> {/* Adjusted height here */}
          <h3 className="text-2xl font-semibold mb-2">Booking System</h3>
          <p className="text-base mb-4">
          This online reservation website allows users to easily book a room in Davao City. Developed as a major subject project, it utilizes Laravel as the framework and is built with PHP and JavaScript. The main goal of this project is to streamline the reservation process, making it quick and efficient for users, especially students from outside Davao, to find suitable accommodation.
          </p>
          <a href="https://github.com/ShaLim1110/booking-project" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
