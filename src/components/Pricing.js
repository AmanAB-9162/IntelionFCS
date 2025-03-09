import React from 'react';
function Pricing() {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-4">Basic</h3>
            <p className="text-4xl font-bold mb-4">$10/month</p>
            <ul className="mb-6">
              <li>Feature One</li>
              <li>Feature Two</li>
            </ul>
            <button className="bg-blue-900 text-white px-6 py-2 rounded">Get Started</button>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-4">Intermediate</h3>
            <p className="text-4xl font-bold mb-4">$20/month</p>
            <ul className="mb-6">
              <li>Feature One</li>
              <li>Feature Two</li>
            </ul>
            <button className="bg-blue-900 text-white px-6 py-2 rounded">Get Started</button>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-4">Advanced</h3>
            <p className="text-4xl font-bold mb-4">$30/month</p>
            <ul className="mb-6">
              <li>Feature One</li>
              <li>Feature Two</li>
            </ul>
            <button className="bg-blue-900 text-white px-6 py-2 rounded">Get Started</button>
          </div>
          {/* Add more pricing plans */}
        </div>
      </div>
    </section>
  );
}

export default Pricing;