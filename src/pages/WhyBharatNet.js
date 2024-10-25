import * as React from 'react';

function WhyBharatNet() {
    return (
      <section className="py-12 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-8">Why Bharat Net?</h2>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Image on the left */}
          <div className="flex-1">
            <img
              src="/other-assets/test-assets/(1).jpg" // Replace with your image path
              alt="Why Bharat Net"
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Text on the right */}
          <div className="flex-1 text-left">
            <h3 className="text-2xl font-semibold mb-4">
              Bharat Net - Transforming India's Online Presence
            </h3>
            <p className="text-justify text-gray-700">
              Bharat Net, one of the biggest rural telecom projects in the world,
              implemented in a phased manner to all Gram Panchayats
              (approximately 2.5 Lakh) in the country for providing
              non-discriminatory access to broadband connectivity to all the
              telecom service providers. Objective is to enable access providers
              like mobile operators, Internet Service Providers (ISPs), Cable TV
              operators, content providers to launch various services such as
              applications like e-health, e-education and e-governance in rural
              and remote India.
            </p>
          </div>
        </div>
      </section>
    );
}

export default WhyBharatNet;
