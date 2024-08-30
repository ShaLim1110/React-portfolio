import React from 'react';

function Certificate() {
  return (
    <section id="certificate" className="bg-gray-900 text-white min-h-screen flex flex-col justify-start items-center py-16 px-4">
      <h1 className="text-4xl font-bold mb-4">Certifications</h1>
      <p className="text-lg mb-12">Certiport IT Specialist Certificates</p>
      
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 w-full md:w-2/3">
        {/* HTML and CSS Specialist Card */}
        <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg w-full md:w-1/3 max-w-md mx-auto">
          <img src="/csshtml.png" alt="HTML and CSS Logo" className="w-28 h-28 mb-4 object-cover rounded-full border-2 border-gray-600" />
          <h3 className="text-xl font-semibold mb-2">HTML and CSS Specialist</h3>
          <p className="text-center text-sm md:text-base">
            This certification demonstrates expertise in HTML and CSS, essential for creating well-structured and visually appealing websites. It validates skills in web design and development, ensuring proficiency in building responsive and user-friendly web pages.
          </p>
        </div>
        {/* Database Specialist Card */}
        <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg w-full md:w-1/3 max-w-md mx-auto">
          <img src="/database.png" alt="Database Logo" className="w-28 h-28 mb-4 object-cover rounded-full border-2 border-gray-600" />
          <h3 className="text-xl font-semibold mb-2">Database Specialist</h3>
          <p className="text-center text-sm md:text-base">
            This certification verifies a strong understanding of database management systems. It highlights the ability to design, implement, and manage databases, ensuring efficient data storage, retrieval, and manipulation. It is crucial for roles involving data analysis and database administration.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Certificate;
