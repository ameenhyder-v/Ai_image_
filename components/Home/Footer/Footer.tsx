import React from 'react';

const Footer = () => {
  return (
    <div className="pt-16 pb-16 bg-black">
      {/* Top Section */}
      <div className="w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 items-start pb-8 border-b-2 border-gray-900">
        {/* Vision Statement */}
        <div className="col-span-2">
          <p className="text-2xl sm:text-3xl md:text-4xl text-white font-bold leading-tight">
            Empowering Your Vision with Innovative Digital Solutions
          </p>
        </div>

        {/* Address Section */}
        <div>
          <h1 className="text-xl font-bold text-white">Our Address</h1>
          <p className="text-white opacity-75 mt-4">Suite 15, Tech Park</p>
          <p className="text-white opacity-60">Calicut, Kerala, India</p>
        </div>

        {/* Contact Section */}
        <div>
          <h1 className="text-xl font-bold text-white">Get in Touch</h1>
          <p className="text-white opacity-75 mt-4">Phone: +91 12345 67890</p>
          <p className="text-white opacity-75">Email: support@company.com</p>
          <p className="text-white opacity-75 mt-4">Hours: Mon - Fri, 9AM - 6PM</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-[80%] mx-auto flex flex-col sm:flex-row justify-between items-center mt-8">
        {/* Social Links */}
        <div className="flex space-x-6">
          <a href="#" className="text-white text-opacity-75 hover:text-opacity-100 transition">
            Facebook
          </a>
          <a href="#" className="text-white text-opacity-75 hover:text-opacity-100 transition">
            Twitter
          </a>
          <a href="#" className="text-white text-opacity-75 hover:text-opacity-100 transition">
            LinkedIn
          </a>
        </div>

        {/* Copyright */}
        <p className="text-white text-opacity-50 mt-4 sm:mt-0">
          &copy; {new Date().getFullYear()} Your Company. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
