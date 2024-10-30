import React, { useState, useEffect } from "react";
import { createPopper } from "@popperjs/core";

const Register = () => {
  const [showOtp, setShowOtp] = useState(false);
  const [otpValues, setOtpValues] = useState(Array(6).fill(""));
  const [popoverVisible, setPopoverVisible] = useState(false); // track popover visibility

  const isValid = otpValues.every((otp) => otp.length === 1);

  useEffect(() => {
    const button = document.querySelector(
      '[data-popover-target="popover-click"]'
    );
    const popover = document.getElementById("popover-click");
    const arrow = popover.querySelector("[data-popper-arrow]");

    if (button && popover && arrow) {
      createPopper(button, popover, {
        placement: "top",
        modifiers: [{ name: "arrow", options: { element: arrow } }],
      });
    }
  }, []);

  // function to toggle popover visibility
  const togglePopover = (e) => {
    e.stopPropagation(); // prevent checkbox toggle
    setPopoverVisible((prev) => !prev);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setShowOtp(true); // show OTP input after registration
  };

  const handleOtpChange = (index, value) => {
    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;

    if (value.length === 1 && index < 5) {
      const nextInput = document.getElementById(`code-${index + 2}`);
      nextInput?.focus();
    }

    setOtpValues(newOtpValues);
  };

  return (
    <div
      className="relative flex items-center justify-end h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/bg-assets/bg.jpg)`,
      }}
    >
      {/* overlay to darken the background image */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* register form container */}
      <div className="relative z-10 bg-white bg-opacity-10 backdrop-filter backdrop-blur-md rounded-lg shadow-lg p-8 w-full max-w-md mr-20">
        <div className="flex justify-center mb-4">
          {/* logo */}
          <img
            src={`${process.env.PUBLIC_URL}/other-assets/bn-logo.png`}
            alt="Bharat Net Logo"
            className="h-20"
          />
        </div>

        <h2 className="text-center text-white text-3xl font-semibold mb-4">
          {showOtp ? "Verify Mobile Number" : "User Registration"}
        </h2>

        {/* conditional rendering of registration form or OTP input */}
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
                type="text"
                id="mobileNumber"
                placeholder="Enter 10-digit Mobile No."
                className="w-full p-3 rounded-md mb-4 text-gray-900"
                required
                inputMode="numeric"
                maxLength={10}
                pattern="^[0-9]{10}$"
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/[^0-9]/g, "");
                }}
              />
              <p className="mt-2 mb-4 text-sm text-gray-400">
                We will send you an SMS with a verification code.
              </p>
            </div>

            <div className="flex flex-col mb-4">
              <div className="flex items-center mb-2">
                {/* terms and conditions popover link */}
                <label htmlFor="terms" className="text-white">
                  Read{" "}
                  <span
                    data-popover-target="popover-click"
                    className="font-bold underline cursor-pointer"
                    onClick={togglePopover} // toggle popover on click
                  >
                    Terms and Conditions
                  </span>
                </label>
              </div>

              {/* checkbox after the terms and conditions */}
              <div className="flex items-center">
                <input type="checkbox" id="terms" className="mr-2" required />
                <label htmlFor="terms" className="text-white">
                  I have read the Terms and Conditions
                </label>
              </div>
            </div>

            {/* popover content */}
            <div
              data-popover
              id="popover-click"
              role="tooltip"
              className={`absolute z-10 inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm ${
                popoverVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{ visibility: popoverVisible ? "visible" : "hidden" }}
            >
              <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Terms and Conditions
                </h3>
              </div>
              <div className="px-3 py-2">
                <p>
                  By using our services, you agree to comply with and be bound
                  by these terms and conditions. If you do not agree with any
                  part of these terms, please refrain from using our services.
                  You are responsible for using our services in a lawful manner
                  and in accordance with these terms.
                </p>
              </div>
              <div data-popper-arrow></div>
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

            {/* verify OTP button */}
            <div className="mt-4 text-center">
              <button
                type="submit"
                className={`w-full bg-blue-600 text-white py-3 rounded-md transition ${
                  isValid
                    ? "hover:bg-blue-700"
                    : "opacity-50 cursor-not-allowed"
                } flex justify-center items-center`}
                disabled={!isValid}
              >
                Verify OTP
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
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;
