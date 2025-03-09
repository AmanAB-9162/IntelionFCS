// import React from 'react';

// const Header = () => {
//   return (
//     <header className="bg-blue-900 text-white py-6">
//       <div className="container mx-auto px-6">
//         <nav className="flex justify-between items-center">
//           <div className="text-2xl font-bold">Intelion</div>
//           <ul className="flex space-x-6">
//             <li><a href="#features" className="hover:text-blue-300">Features</a></li>
//             <li><a href="#contact" className="hover:text-blue-300">Contact</a></li>
//           </ul>
//         </nav>
//         <div className="mt-20 text-center">
//           <h1 className="text-5xl font-bold mb-4">Welcome to Intelion</h1>
//           <p className="text-xl mb-8">Your gateway to innovative financial solutions.</p>
//           <a href="#features" className="bg-white text-blue-900 px-6 py-3 rounded-full font-semibold hover:bg-blue-300 transition duration-300">Learn More</a>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
import React, { useState, useEffect } from 'react';

function Header() {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode and save preference to localStorage
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Check localStorage for saved theme preference on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
    }
  }, []);

  return (
    <header className="bg-blue-900 dark:bg-gray-900 text-white py-6">
      <div className="container mx-auto px-6">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold">Intelion</div>
          <ul className="flex space-x-6">
                       <li><a href="#features" className="hover:text-blue-300">Features</a></li>
                       <li><a href="#contact" className="hover:text-blue-300">Contact</a></li>
                    </ul>
          <button
         
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 bg-white dark:bg-gray-800 text-blue-900 dark:text-white rounded-full">
          
            {darkMode ? '🌞' : '🌙'} {/* Toggle between sun and moon icons */}
          </button>
          
        </nav>
        <div className="mt-20 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to Intelion</h1>
          <p className="text-xl mb-8">Your gateway to innovative financial solutions.</p>
          <a href="#features" className="bg-white dark:bg-gray-800 text-blue-900 dark:text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-300 dark:hover:bg-gray-700 transition duration-300">
            Learn More
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;