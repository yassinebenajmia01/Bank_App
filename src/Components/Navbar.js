import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const ModernNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex shrink-0 items-center">
            <Link to="/" className="text-xl font-bold text-black">
              BankApp
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-lg">
            <Link 
              to="/features" 
              className="text-gray-500 hover:text-black transition-colors"
            >
              Features
            </Link>
            <Link 
              to="/pricing" 
              className="text-gray-500 hover:text-black transition-colors"
            >
              Pricing
            </Link>
            <Link 
              to="/about" 
              className="text-gray-500 hover:text-black transition-colors"
            >
              About
            </Link>
          </nav>

          {/* Authentication Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              to="/login" 
              className="text-black hover:text-gray-700 transition-colors"
            >
              Sign In
            </Link>
            <Link 
              to="/signup"
              className="bg-black text-white hover:bg-gray-800 px-4 py-2 rounded-md"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-500 hover:text-black focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={toggleMenu}
            className="text-gray-500 hover:text-black focus:outline-none"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        <div className="flex flex-col items-center space-y-6 p-8">
          <Link
            to="/features"
            className="text-lg text-gray-700 hover:text-black"
            onClick={toggleMenu}
          >
            Features
          </Link>
          <Link
            to="/pricing"
            className="text-lg text-gray-700 hover:text-black"
            onClick={toggleMenu}
          >
            Pricing
          </Link>
          <Link
            to="/about"
            className="text-lg text-gray-700 hover:text-black"
            onClick={toggleMenu}
          >
            About
          </Link>
          <div className="w-full border-t border-gray-200 my-4"></div>
          <Link
            to="/signin"
            className="text-lg text-black hover:text-gray-700"
            onClick={toggleMenu}
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="w-full bg-black text-white hover:bg-gray-800 px-4 py-2 rounded-md text-center"
            onClick={toggleMenu}
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
};

export default ModernNavbar;
