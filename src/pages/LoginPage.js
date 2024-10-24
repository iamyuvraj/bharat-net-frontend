import React, { useState } from 'react';

const LoginPage = () => {
  const [mobile, setMobile] = useState('');
  const [isValid, setIsValid] = useState(false);

  // Handle input change
  const handleInputChange = (e) => {
    const value = e.target.value;

    // Only allow numbers
    if (/^[0-9]*$/.test(value)) {
      setMobile(value);
    }

    // Check digits
    if (value.length >= 10) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  return (
    <div
      className="relative flex items-center justify-between h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('/bg-assets/bg.jpg')` }}
    >
      {/* Left Side Content as Card */}
      <div className="hidden lg:flex flex-1 justify-center items-center p-8">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg"
              src="/other-assets/login-card-image.jpg"
              alt="Welcome"
            />
          </a>
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Welcome to Bharat Net
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Please log in to your Bharat Net Account to view or pay your bill,
              see order status, manage appointments, and get help or run
              troubleshooting tests.
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Get Started
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Overlay to darken the background image */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Login Form Container */}
      <div className="relative z-10 bg-white bg-opacity-10 backdrop-filter backdrop-blur-md rounded-lg shadow-lg p-8 w-full max-w-md mr-20">
        <div className="flex justify-center mb-4">
          {/* Logo */}
          <img
            src="/other-assets/bn-logo.png"
            alt="Bharat Net"
            className="h-20"
          />
        </div>

        <h2 className="text-center text-white text-3xl font-semibold mb-4">
          Log In
        </h2>

        {/* Login Form */}
        <form>
          <label htmlFor="mobile" className="block text-white mb-2">
            Registered Mobile Number
          </label>
          <input
            type="text"
            id="mobile"
            placeholder="Enter 10-digit Mobile No."
            className="w-full p-3 rounded-md mb-4 text-gray-900"
            value={mobile}
            onChange={handleInputChange}
            maxLength={10} // Restrict the input to 10 characters
          />
          <p
            id="helper-text-explanation"
            className="mt-2 mb-4 text-sm text-gray-400"
          >
            We will send you an SMS with a verification code.
          </p>

          <button
            type="submit"
            className={`w-full bg-blue-600 text-white py-3 rounded-md transition ${
              isValid ? "hover:bg-blue-700" : "opacity-50 cursor-not-allowed"
            }`}
            disabled={!isValid}
          >
            Send OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
