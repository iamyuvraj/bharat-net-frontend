import React, { useState } from 'react';

const NewConnection = () => {
  const [form, setForm] = useState({
    fullName: "",
    address1: "",
    address2: "",
    state: "",
    district: "",
    locality: "",
    PINCode: "",
  });

  // handle input change
  const handleInputChange = (e) => {
    const { id, value } = e.target;

    // restrict PINCode to numeric input only
    if (id === "PINCode") {
      const numericValue = value.replace(/[^0-9]/g, ""); // remove non-numeric characters
      setForm((prevForm) => ({ ...prevForm, [id]: numericValue }));
    } else {
      setForm((prevForm) => ({ ...prevForm, [id]: value }));
    }
  };

  // handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent the default form submission

    // Check if PINCode is exactly 6 digits
    if (form.PINCode.length !== 6) {
      alert("Please 6-digits PIN Code"); // optional: show alert
      return; // prevent submission
    }

    // proceed with form submission logic (e.g., send data to API)
    console.log("Form submitted with:", form);
  };

  return (
    <div
      className="relative flex items-center justify-end h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/bg-assets/bg.jpg)` }}
    >
      {/* overlay to darken the background image */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* apply form container */}
      <div className="relative z-10 bg-white bg-opacity-10 backdrop-filter backdrop-blur-md rounded-lg shadow-lg p-8 w-full max-w-lg mr-20 h-[90vh] overflow-y-auto">
        <div className="flex justify-center mb-6">
          {/* logo */}
          <img
            src={`${process.env.PUBLIC_URL}/other-assets/bn-logo.png`}
            alt="Bharat Net Logo"
            className="h-20"
          />
        </div>

        <h2 className="text-center text-white text-3xl font-semibold mb-6">
          Apply for New Connection
        </h2>

        {/* apply form */}
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
          <div className="col-span-2">
            <label htmlFor="fullName" className="block text-white mb-2">
              Applicant's Full Name
            </label>
            <input
              type="text"
              id="fullName"
              placeholder="Enter Full Name"
              className="w-full p-3 rounded-md text-gray-900"
              required
              value={form.fullName}
              onChange={handleInputChange}
            />
          </div>

          <div className="col-span-2">
            <label htmlFor="address1" className="block text-white mb-2">
              Address Line 1
            </label>
            <input
              type="text"
              id="address1"
              placeholder="Enter Street Address"
              className="w-full p-3 rounded-md text-gray-900"
              required
              value={form.address1}
              onChange={handleInputChange}
            />
          </div>

          <div className="col-span-2">
            <label htmlFor="address2" className="block text-white mb-2">
              Address Line 2 (Optional)
            </label>
            <input
              type="text"
              id="address2"
              placeholder="Enter Landmark"
              className="w-full p-3 rounded-md text-gray-900"
              value={form.address2}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="state" className="block text-white mb-2">
              State
            </label>
            <input
              type="text"
              id="state"
              placeholder="Enter State"
              className="w-full p-3 rounded-md text-gray-900"
              value={form.state}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="district" className="block text-white mb-2">
              District
            </label>
            <input
              type="text"
              id="district"
              placeholder="Enter District"
              className="w-full p-3 rounded-md text-gray-900"
              value={form.district}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="locality" className="block text-white mb-2">
              Locality
            </label>
            <input
              type="text"
              id="locality"
              placeholder="Enter Locality"
              className="w-full p-3 rounded-md text-gray-900"
              required
              value={form.locality}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="PINCode" className="block text-white mb-2">
              PIN Code
            </label>
            <input
              type="text"
              id="PINCode"
              placeholder="Enter PIN Code"
              className="w-full p-3 rounded-md text-gray-900"
              required
              value={form.PINCode}
              onChange={handleInputChange}
              maxLength={6}
              pattern="\d{6}"
            />
          </div>

          <div className="col-span-2 mt-4">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md transition hover:bg-blue-700"
            >
              Apply Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewConnection;