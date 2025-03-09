// import React from 'react';
// import Header from './components/Header';
// import Features from './components/Features';
// import Footer from './components/Footer';

// function App() {
//   return (
//     <div className="bg-blue-500 text-white text-center p-8">
//       <h1 className="text-4xl font-bold">Welcome to Intelion</h1>
//       <p className="text-xl mt-4">Your gateway to innovative financial solutions.</p>
//       <button className="mt-6 bg-white text-blue-500 px-6 py-2 rounded-lg hover:bg-blue-100 transition duration-300">
//         Learn More
//       </button>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import Header from './components/Header';
import Features from './components/Features';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
function App() {
  return (
    <div>
      <Header />
      <Features />
      <Pricing/>
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;