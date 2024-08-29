import React from 'react';

function Contact() {
  return (
    <section id="contact" className="bg-gray-800 text-white p-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2">Your Name</label>
            <input type="text" className="w-full p-2 rounded bg-gray-900 text-white" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2">Your Email</label>
            <input type="email" className="w-full p-2 rounded bg-gray-900 text-white" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2">Your Message</label>
            <textarea className="w-full p-2 rounded bg-gray-900 text-white"></textarea>
          </div>
          <button type="submit" className="bg-blue-500 px-6 py-3 rounded-full text-white hover:bg-blue-600">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
