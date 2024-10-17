import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Home from './pages/Home';       // Create these components
// import About from './About';     // Create these components
// import Services from './Services'; // Create these components
// import Contact from './Contact';   // Create these components

function App() {
  return (
    <ChakraProvider>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
