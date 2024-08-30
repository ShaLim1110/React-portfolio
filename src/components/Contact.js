import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // If using Font Awesome via npm

function Contact() {
  return (
    <section id="contact" className="bg-gray-800 text-white py-16 px-4 md:px-8">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
        <div className="flex justify-center gap-8">
          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com/in/alexis-loma-468a50279/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-600 transition-colors"
          >
            <i className="fab fa-linkedin-in text-4xl"></i>
          </a>
          {/* Facebook Icon */}
          <a
            href="https://web.facebook.com/AlexisShaLim1/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-600 transition-colors"
          >
            <i className="fab fa-facebook-f text-4xl"></i>
          </a>
          {/* Instagram Icon */}
          <a
            href="https://github.com/ShaLim1110"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-600 transition-colors"
          >
            <i className="fab fa-github text-4xl"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;