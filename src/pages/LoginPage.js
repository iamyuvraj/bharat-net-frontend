import React, { useState } from 'react';

const Login = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [isValid, setIsValid] = useState(false);

  // handle input change
  const handleInputChange = (e) => {
    const value = e.target.value;

    // only allow numbers
    if (/^[0-9]*$/.test(value)) {
      setMobileNumber(value);
    }

    // check digits
    setIsValid(value.length === 10);
  };

  return (
    <div
      className="relative flex items-center justify-end h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/bg-assets/bg.jpg')" }}
    >
      {/* overlay to darken the background image */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* login form container */}
      <div className="relative z-10 bg-white bg-opacity-10 backdrop-filter backdrop-blur-md rounded-lg shadow-lg p-8 w-full max-w-md mr-20">
        <div className="flex justify-center mb-4">
          {/* logo */}
          <img
            src="/other-assets/bn-logo.png"
            alt="Bharat Net"
            className="h-20"
          />
        </div>

        <h2 className="text-center text-white text-3xl font-semibold mb-4">
          Log In
        </h2>

        {/* login form */}
        <form>
          <label htmlFor="mobileNumber" className="block text-white mb-2">
            Registered Mobile Number
          </label>
          <input
            type="text"
            id="mobileNumber"
            placeholder="Enter 10-digit Mobile No."
            className="w-full p-3 rounded-md mb-4 text-gray-900"
            value={mobileNumber}
            onChange={handleInputChange}
            maxLength={10} // restrict the input to 10 characters
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

export default Login;
