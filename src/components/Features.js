import React from 'react';

function Features() {
  return (
    <section id="features" className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-4 dark:text-white">Feature One</h3>
            <p className="dark:text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-4 dark:text-white">Feature Two</h3>
            <p className="dark:text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-4 dark:text-white">Feature Three</h3>
            <p className="dark:text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          {/* Add more feature boxes */}
        </div>
      </div>
    </section>
  );
}

export default Features;