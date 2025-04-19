import {BrowserRouter  as Router , Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import LoginPage from "./components/LoginPage";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import Stock from "./components/Stock";
import AboutUs from "./components/AboutUs";
import PricingPage from "./components/PricingPage";
import Offers from './components/Offers';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/landing" element={<LandingPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/stock" element={<Stock />} />
      <Route path="/Offers" element={<Offers />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/pricing" element={<PricingPage />} />
    </Routes> </Router>
  );
}

export default App;
