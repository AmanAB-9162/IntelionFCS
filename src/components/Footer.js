// import React from 'react';

// const Footer = () => {
//   return (
//     <footer id="contact" className="bg-blue-900 text-white py-8">
//       <div className="container mx-auto px-6 text-center">
//         <p className="mb-4">Contact us at: <a href="mailto:info@intelion.com" className="underline">info@intelion.com</a></p>
//         <div className="flex justify-center space-x-6">
//           <a href="#" className="hover:text-blue-300">Facebook</a>
//           <a href="#" className="hover:text-blue-300">Twitter</a>
//           <a href="#" className="hover:text-blue-300">LinkedIn</a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from 'react';

function Footer() {
  return (
    <footer id="contact" className="bg-blue-900 dark:bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="mb-4">Contact us at: <a href="mailto:info@intelion.com" className="underline">info@intelion.com</a></p>
        <div className="flex justify-center space-x-6">
          <a href="https://facebook.com" className="hover:text-blue-300">Facebook</a>
          <a href="https://twitter.com" className="hover:text-blue-300">Twitter</a>
          <a href="https://linkedin.com" className="hover:text-blue-300">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;