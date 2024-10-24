import React from 'react';
import Carousel from './Carousel';

const LandingPage = () => {
  return (
    <div>
      {/* main Navbar */}
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

      {/* carousel */}
      <Carousel />

      {/* plans section */}
      <section className="py-10 bg-gray-100 text-center">
        <div className="px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="font-light text-gray-500 dark:text-gray-400 mb-5 sm:text-lg">
              Find the perfect internet plan that fits your needs.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3 sm:gap-6 xl:gap-10">
            {/* pricing card 1 */}
            <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 className="mb-4 text-2xl font-semibold">Basic Plan</h3>
              <p className="font-light text-gray-500 dark:text-gray-400">
                Best for basic use with moderate speed.
              </p>
              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold">₹499</span>
                <span className="text-gray-500 dark:text-gray-400">/month</span>
              </div>
              <ul role="list" className="mb-8 space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 011.414 0l-8 8a1 1 0 01-1.414 0L4.707 9.414a1 1 0 111.414-1.414L8 11.586l6.707-6.707a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>50 Mbps Speed</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 011.414 0l-8 8a1 1 0 01-1.414 0L4.707 9.414a1 1 0 111.414-1.414L8 11.586l6.707-6.707a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Unlimited Data</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 011.414 0l-8 8a1 1 0 01-1.414 0L4.707 9.414a1 1 0 111.414-1.414L8 11.586l6.707-6.707a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>No setup fees</span>
                </li>
              </ul>
              <a
                href="/plans"
                className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-blue-900"
              >
                Get Started
              </a>
            </div>
            {/* pricing card 2 */}
            <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 className="mb-4 text-2xl font-semibold">Basic Plan</h3>
              <p className="font-light text-gray-500 dark:text-gray-400">
                Best for basic use with moderate speed.
              </p>
              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold">₹699</span>
                <span className="text-gray-500 dark:text-gray-400">/month</span>
              </div>
              <ul role="list" className="mb-8 space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 011.414 0l-8 8a1 1 0 01-1.414 0L4.707 9.414a1 1 0 111.414-1.414L8 11.586l6.707-6.707a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>200 Mbps Speed</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 011.414 0l-8 8a1 1 0 01-1.414 0L4.707 9.414a1 1 0 111.414-1.414L8 11.586l6.707-6.707a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Unlimited Data</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 011.414 0l-8 8a1 1 0 01-1.414 0L4.707 9.414a1 1 0 111.414-1.414L8 11.586l6.707-6.707a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>No setup fees</span>
                </li>
              </ul>
              <a
                href="/plans"
                className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-blue-900"
              >
                Get Started
              </a>
            </div>
            {/* add similar cards for other plans */}
          </div>
        </div>
      </section>

      {/* why Bharat Net section */}
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
          {/* repeat for other features */}
        </div>
      </section>

      {/* how It Works Section */}
      <section className="py-12 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold mb-8">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div>
            <h3 className="text-xl font-semibold">Step 1</h3>
            <p className="text-gray-700">Sign up for a Bharat Net account.</p>
          </div>
          {/* repeat for other steps */}
        </div>
      </section>

      {/* footer Section */}
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
