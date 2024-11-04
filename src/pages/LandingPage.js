import React, { useState } from "react";
import Carousel from "../components/Carousel";
import WhyBharatNet from "../components/WhyBharatNet";
import RouterIcon from "@mui/icons-material/Router";
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import Modal from "../components/Modal";
import { Link } from "react-router-dom";

const Landing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    address1: "",
    address2: "",
    state: "",
    district: "",
    locality: "",
    PINCode: "",
  });

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", form);
    // Optionally close the modal after submission
    toggleModal();
  };

  return (
    <div>
      {/* main Navbar */}
      <nav className="bg-gray-800 border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a
            href=" "
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src={`${process.env.PUBLIC_URL}/other-assets/bn-logo.png`}
              className="h-12"
              alt="Bharat Net Logo"
            />
            <span className="self-center text-2xl font-bold text-gray-300 whitespace-nowrap dark:text-gray-300">
              Bharat Net
            </span>
          </a>

          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <button
              type="button"
              className="px-3 py-2 text-sm font-medium text-white bg-teal-600 hover:bg-green-500 focus:ring-1 focus:outline-none focus:ring-green-300 rounded-lg transition duration-300 ml-4 flex items-center space-x-2"
              onClick={toggleModal} // Open the modal
            >
              <RouterIcon className="w-5 h-5 text-white" />
              <span>Apply for New Connection</span>
            </button>

            <Link to="/login">
              <button className="flex items-center space-x-2 text-sm bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-500 transition duration-300">
                <LoginIcon className="w-5 h-5 text-white" />
                <span>Log In</span>
              </button>
            </Link>
            <Link to="/register">
              <button className="flex items-center space-x-2 text-sm bg-green-500 text-white px-3 py-2 rounded-lg hover:bg-green-400">
                <AppRegistrationIcon className="w-5 h-5 text-white" />
                <span>Register</span>
              </button>
            </Link>

            <a href="#">
              <button className="flex items-center space-x-2 text-sm bg-gray-700 text-white px-3 py-2 rounded-lg hover:bg-gray-600">
                <SupportAgentIcon className="w-5 h-5 text-white" />
                <span>Contact Support</span>
              </button>
            </a>
          </div>
        </div>
      </nav>

      {/* Modal for New Connection Form */}
      <Modal isOpen={isModalOpen} onClose={toggleModal}>
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
          {" "}
          {/* edit the background and blur effect later - cover whole page blur */}
          <div className="flex justify-center mb-6">
            <img
              src={`${process.env.PUBLIC_URL}/other-assets/bn-logo.png`}
              alt="Bharat Net"
              className="h-20"
            />
          </div>
          <h2 className="text-center text-white text-3xl font-semibold mb-6">
            Apply for New Connection
          </h2>
          {/* Apply Form */}
          <form
            className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4"
            onSubmit={handleSubmit}
          >
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
      </Modal>

      {/* carousel */}
      <Carousel />

      <WhyBharatNet />

      {/* plans section */}
      <section className="py-10 bg-gray-100 text-center">
        <div className="px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Choose Your Plan
            </h2>
            <p className="font-light text-gray-800 dark:text-gray-800 mb-5 sm:text-lg">
              Find the perfect Internet Plan that fits your needs.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3 sm:gap-6 xl:gap-10">
            {/* pricing card 1 */}
            <div
              className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow transition-transform duration-200 ease-in-out transform 
hover:scale-105 hover:shadow-lg dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white"
            >
              <h3 className="mb-4 text-2xl font-semibold">Silver</h3>
              <p className="font-light text-gray-800 dark:text-gray-200">
                ₹499 /month
              </p>
              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold">100 Mbps</span>
                {/* <span className="text-gray-500 dark:text-gray-400"></span> */}
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
                  <span>Upto 100 Mbps Upload/Download</span>
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
                  <span>Unlimited Data + Calling</span>
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
                  <span>Free Installation</span>
                </li>
              </ul>
              <a
                href=" "
                className="mt-auto text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-blue-900"
              >
                Get Started
              </a>
            </div>
            {/* pricing card 2 */}
            <div
              className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow transition-transform duration-200 ease-in-out transform 
hover:scale-105 hover:shadow-lg dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white"
            >
              <h3 className="mb-4 text-2xl font-semibold dark:text-yellow-500">
                Gold
              </h3>
              <p className="font-light text-gray-800 dark:text-gray-200">
                ₹699 /month
              </p>
              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold">200 Mbps</span>
                <span className="text-gray-500 dark:text-gray-400"></span>
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
                  <span>Upto 200 Mbps Upload/Download</span>
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
                  <span>Unlimited Data + Calling</span>
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
                  <span>Free Installation</span>
                </li>
              </ul>

              <a
                href=" "
                className="mt-auto text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-blue-900"
              >
                Get Started
              </a>
            </div>
            {/* pricing card 3 */}
            <div
              className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow transition-transform duration-200 ease-in-out transform 
hover:scale-105 hover:shadow-lg dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white"
            >
              <h3 className="mb-4 text-2xl font-semibold dark:text-pink-500">
                Diamond
              </h3>
              <p className="font-light text-gray-800 dark:text-gray-200">
                ₹999 /month
              </p>
              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold">400 Mbps</span>
                <span className="text-gray-500 dark:text-gray-400"></span>
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
                  <span>Upto 400 Mbps Upload/Download</span>
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
                  <span>Unlimited Data + Calling</span>
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
                  <span>Free Installation</span>
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
                  <span>Priority Customer Support</span>
                </li>
              </ul>
              <a
                href=" "
                className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-blue-900"
              >
                Get Started
              </a>
            </div>

            {/* add similar cards for other plans */}
          </div>
        </div>
      </section>

      {/* how It Works Section */}
      <section className="py-12 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold mb-8">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                src={`${process.env.PUBLIC_URL}/other-assets/test-assets/step-two.jpg`}
                alt="Step - 1"
              />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href="#"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Step 2: Log In</h3>
            <p className="text-gray-700">
              Access your account by logging in with your credentials.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">
              Step 3: Fill Application Form
            </h3>
            <p className="text-gray-700">
              Complete the new connection application form with your details.
            </p>
          </div>
        </div>
      </section>

      {/* footer Section */}

      <footer class="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div class="sm:flex sm:items-center sm:justify-between">
            <a
              href=" "
              class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img
                src={`${process.env.PUBLIC_URL}/other-assets/bn-logo.png`}
                class="h-8"
                alt="Bharat Net Logo"
              />
              <span class="self-center text-2xl font-bold text-gray-600 whitespace-nowrap dark:text-gray-300">
                Bharat Net
              </span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="#" class="hover:underline me-4 md:me-6">
                  About
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline me-4 md:me-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline me-4 md:me-6">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href=" " class="hover:underline">
              Bharat Net™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
