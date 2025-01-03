import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="lg:flex lg:justify-between lg:space-x-12">
          <div className="mb-8 lg:mb-0">
            <h2 className="text-3xl font-bold">Creative Blogs            </h2>
            <p className="text-gray-400 mt-2">Empowering creativity and technology through innovative solutions.</p>
          </div>

          <div className="flex flex-col lg:flex-row lg:space-x-12">
            <div className="mb-8 lg:mb-0">
              <h3 className="text-xl font-semibold">Quick Links</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="/about" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
                <li><a href="/blog" className="text-gray-400 hover:text-white">Blog</a></li>
                <li><a href="/blogsubmit" className="text-gray-400 hover:text-white">Sbmit</a></li>
              </ul>
            </div>

            <div className="mb-8 lg:mb-0">
              <h3 className="text-xl font-semibold">Connect With Us</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="https://www.linkedin.com/in/muhammad-abdullah-608284302/" className="text-gray-400 hover:text-white">LinkedIn</a></li>
                <li><a href="https://github.com/Abdullah-Shafaquat" className="text-gray-400 hover:text-white">GitHub</a></li>
                <li><a href="https://www.instagram.com/muhammadabdullah6156/" className="text-gray-400 hover:text-white">Instagram</a></li>
                <li><a href="mailto:alishafaqat4473@gmail.com"
                 className="text-gray-400 hover:text-white">Email</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Creative Blogs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
