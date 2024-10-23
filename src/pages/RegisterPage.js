import React, { useState } from "react";

const Register = () => {
  const [showOtp, setShowOtp] = useState(false);
  const [otpValues, setOtpValues] = useState(Array(6).fill(""));

  const handleRegister = (e) => {
    e.preventDefault();
    // add logic to send OTP here
    setShowOtp(true); // show OTP input after registration
  };

  const handleOtpChange = (index, value) => {
    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;

    // focus next input automatically if current input is filled
    if (value.length === 1 && index < 5) {
      const nextInput = document.getElementById(`code-${index + 2}`);
      nextInput?.focus();
    }

    // update state
    setOtpValues(newOtpValues);
  };

  return (
    <div
      className="relative flex items-center justify-end h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('/bg-assets/login-bg.jpg')`,
      }}
    >
      {/* overlay to darken the background image */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Register Form Container */}
      <div className="relative z-10 bg-white bg-opacity-10 backdrop-filter backdrop-blur-md rounded-lg shadow-lg p-8 w-full max-w-md mr-20">
        <div className="flex justify-center mb-4">
          {/* Logo */}
          <img
            src="/other-assets/login-logo.png"
            alt="Bharat Net"
            className="h-20"
          />
        </div>

        <h2 className="text-center text-white text-3xl font-semibold mb-4">
          {showOtp ? "Enter OTP" : "Register"}
        </h2>

        {/* Conditional Rendering of Registration Form for OTP Input */}
        {!showOtp ? (
          <form onSubmit={handleRegister}>
            <div className="flex mb-4">
              <div className="mr-2 w-full">
                <label className="block text-white mb-2">First Name</label>
                <input
                  type="text"
                  placeholder="Enter First Name"
                  className="w-full p-3 rounded-md text-gray-900"
                  required
                />
              </div>
              <div className="ml-2 w-full">
                <label className="block text-white mb-2">Last Name</label>
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  className="w-full p-3 rounded-md text-gray-900"
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-white mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter Email Address"
                className="w-full p-3 rounded-md mb-4 text-gray-900"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-white mb-2">Mobile Number</label>
              <input
                type="tel"
                placeholder="Enter 10-digit Mobile No."
                className="w-full p-3 rounded-md mb-4 text-gray-900"
                required
                maxLength={10} // restrict the input to 10 characters
              />
              <p className="mt-2 mb-4 text-sm text-gray-400">
                We will send you an SMS with a verification code.
              </p>
            </div>
            <div className="flex items-center mb-4">
              <input type="checkbox" id="terms" className="mr-2" required />
              <label htmlFor="terms" className="text-white">
                Agree to Terms and Conditions
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md transition hover:bg-blue-700"
            >
              Register
            </button>
          </form>
        ) : (
          <div className="mt-6">
            <h3 className="text-center text-white text-xl mb-2">Enter OTP</h3>
            <div className="flex mb-2 space-x-2 rtl:space-x-reverse justify-center">
              {otpValues.map((value, index) => (
                <div key={index}>
                  <label className="sr-only">OTP Code {index + 1}</label>
                  <input
                    type="text"
                    id={`code-${index + 1}`}
                    maxLength={1}
                    value={value}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    className="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                    required
                  />
                </div>
              ))}
            </div>
            <p className="mt-2 text-sm text-gray-400 text-center">
              Please Enter the 6-digit OTP.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;
