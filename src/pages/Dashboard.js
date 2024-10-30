import React from 'react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Main Navbar */}
      <nav className="bg-gray-800 border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a
            href="#"
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
          </div>
        </div>
      </nav>

      {/* Secondary Navbar */}
      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl px-8 py-6 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <a
                  href="#"
                  className="text-xl text-gray-900 dark:text-white hover:underline"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xl text-gray-900 dark:text-white hover:underline"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xl text-gray-900 dark:text-white hover:underline"
                >
                  Plan Details
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xl text-gray-900 dark:text-white hover:underline"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar
        <aside className="w-64 bg-white shadow-lg h-screen hidden lg:block">
          <div className="p-6">
            <h2 className="text-lg font-semibold">Navigation</h2>
            <nav className="mt-6">
              <ul>
                <li className="mb-3">
                  <a href="#" className="text-gray-700 hover:text-blue-600">
                    Dashboard
                  </a>
                </li>
                <li className="mb-3">
                  <a href="#" className="text-gray-700 hover:text-blue-600">
                    Current Plan
                  </a>
                </li>
                <li className="mb-3">
                  <a href="#" className="text-gray-700 hover:text-blue-600">
                    Billing
                  </a>
                </li>
                <li className="mb-3">
                  <a href="#" className="text-gray-700 hover:text-blue-600">
                    Change Plan
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-blue-600">
                    Update Details
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </aside> */}

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Current Plan Section */}
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Current Plan</h2>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-semibold">
                    Plan: Superfast 100 Mbps
                  </h3>
                  <p className="text-gray-600">Validity: 28 Days</p>
                  <p className="text-gray-600">Amount: ₹799</p>
                </div>
                <div className="flex justify-end items-center">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                    Renew Plan
                  </button>
                </div>
              </div>
              {/* Usage Bar */}
              <div className="mt-4">
                <p className="text-sm text-gray-500">Data Usage: 150GB/200GB</p>
                <div className="w-full bg-gray-200 h-2 rounded-full mt-1">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>
            </div>
          </section>

          {/* Future Plan Section */}
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Future Plans</h2>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <p className="text-gray-600">
                Get faster speeds and more data. Choose a plan that fits your
                needs.
              </p>
              <button className="bg-green-500 text-white px-4 py-2 mt-4 rounded hover:bg-green-600">
                Explore Plans
              </button>
            </div>
          </section>

          {/* Update Details */}
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Update Details</h2>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                    placeholder="Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                    placeholder="john.doe@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                    placeholder="+91 1234567890"
                  />
                </div>
                <div className="sm:col-span-2">
                  <button className="bg-blue-600 text-white px-4 py-2 mt-4 rounded hover:bg-blue-700">
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
