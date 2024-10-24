import React from 'react';
import Carousel from './Carousel';

const LandingPage = () => {
  return (
    <div>
      {/* Main Navbar */}
      <nav className="bg-gray-800 border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="/other-assets/bn-logo.png"
              className="h-12"
              alt="Bharat Net Logo"
            />
            <span className="self-center text-2xl font-bold text-gray-300 whitespace-nowrap dark:text-gray-300">
              Bharat Net
            </span>
          </a>
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <a href="tel:5541251234">
              <button className="text-sm bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600">
                Contact Support
              </button>
            </a>
            <a href="#">
              <button className="text-sm bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">
                Log In
              </button>
            </a>
            <a href="#">
              <button className="text-sm bg-green-500 text-white px-4 py-2 rounded hover:bg-green-400">
                Register
              </button>
            </a>
          </div>
        </div>
      </nav>

      {/* Carousel */}
      <Carousel />

      {/* Plans Section */}
      <section className="py-12 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold mb-8">Choose Your Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Basic Plan</h3>
            <p className="text-gray-700">50 Mbps</p>
            <p className="text-gray-700">₹499/month</p>
            <a
              href="/plans"
              className="block bg-blue-600 text-white mt-6 py-2 rounded hover:bg-blue-700"
            >
              Get Started
            </a>
          </div>
          {/* Repeat for other plans */}
        </div>
      </section>

      {/* Why Bharat Net Section */}
      <section className="py-12 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-8">Why Bharat Net?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div>
            <img
              src="/other-assets/login-card-image.jpg"
              alt="Feature 1"
              className="w-12 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">Fast Internet</h3>
            <p className="text-gray-700">
              Experience blazing fast speeds up to 100 Mbps.
            </p>
          </div>
          {/* Repeat for other features */}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold mb-8">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div>
            <h3 className="text-xl font-semibold">Step 1</h3>
            <p className="text-gray-700">Sign up for a Bharat Net account.</p>
          </div>
          {/* Repeat for other steps */}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-6 bg-gray-800 text-white text-center">
        <p>© 2024 Bharat Net. All rights reserved.</p>
        <div className="mt-4">
          <a href="/login" className="text-gray-400 hover:text-white">
            Login
          </a>{" "}
          |
          <a href="/register" className="ml-2 text-gray-400 hover:text-white">
            Register
          </a>{" "}
          |
          <a href="/plans" className="ml-2 text-gray-400 hover:text-white">
            Plans
          </a>{" "}
          |
          <a href="/support" className="ml-2 text-gray-400 hover:text-white">
            Support
          </a>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
