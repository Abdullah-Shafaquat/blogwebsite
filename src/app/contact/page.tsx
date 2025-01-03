'use client';

import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<string | null>(null);  // State for status message

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
     
    // Make sure to replace this with your actual access key.
    formData.append("access_key", "c68c7db3-7a67-49f1-996f-69140065103f");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      if (result.success) {
        setStatus('Your message has been submitted successfully!');  // Set success message
        event.target.reset(); // Reset form fields
      } else {
        setStatus('Something went wrong. Please try again.');  // Set failure message
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
      setStatus('Error submitting the form. Please try again later.');  // Set error message
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>
        <p className="text-lg text-gray-600 mt-4">We’d love to hear from you. Get in touch with us using the form below or through our contact information.</p>
      </div>

      <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-700">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Full Name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email Address"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Message"
              required
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Send Message
          </button>
        </form>

        {/* Display status message after form submission */}
        {status && (
          <div className="mt-6 text-center">
            <p className={`text-lg ${status.includes('success') ? 'text-green-500' : 'text-red-500'}`}>{status}</p>
          </div>
        )}
      </div>

      <div className="mt-12 text-center">
        <h3 className="text-2xl font-semibold text-gray-800">Other Ways to Reach Us</h3>
        <p className="text-lg text-gray-600 mt-4">Feel free to contact us via email or phone:</p>
        <p className="text-lg text-gray-600 mt-4"><strong>Email:</strong> alishafaqat4473@gmail.com</p>
        <p className="text-lg text-gray-600"><strong>Phone:</strong> 03012229525</p>
      </div>
    </div>
  );
};

export default Contact;
