import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container flex justify-between p-6 mx-auto">
        <p className="text-gray-600">
          &copy; 2024 Real Estate. All rights reserved.
        </p>
        <div>
          <a href="#" className="ml-4 text-gray-600 hover:text-gray-800">
            Privacy Policy
          </a>
          <a href="#" className="ml-4 text-gray-600 hover:text-gray-800">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
