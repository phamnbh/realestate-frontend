import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="container flex items-center justify-between p-6 mx-auto">
        <h1 className="text-2xl font-bold text-gray-800">Real Estate</h1>
        <nav>
          <a href="/" className="ml-4 text-gray-600 hover:text-gray-800">
            Home
          </a>
          <a
            href="/listings"
            className="ml-4 text-gray-600 hover:text-gray-800"
          >
            Listings
          </a>
          <a href="/about" className="ml-4 text-gray-600 hover:text-gray-800">
            About
          </a>
          <a href="/contact" className="ml-4 text-gray-600 hover:text-gray-800">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
