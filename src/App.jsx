import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Main Pages
import Index from './Components/Index';

// Layouts (if needed globally)
import ModernNavbar from './Components/Navbar';
import Footer from './Components/Footer';
import SignIn from './Components/Login';
import Signup from './Components/signup';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home page with full layout */}
        <Route
          path="/"
          element={
            <>
              <Index />
            </>
          }
        />

        {/* Login page with optional navbar/footer if you want */}
        <Route
          path="/login"
          element={
            <>
              <ModernNavbar />
              <SignIn />
              <Footer />
            </>
          }
        />
        <Route
          path="/signup"
          element={
            <>
              <ModernNavbar />
              <Signup />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
