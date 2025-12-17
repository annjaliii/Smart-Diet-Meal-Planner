import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

// pages
import Home from "./pages/Home";
import CreatePlan from "./pages/createPlan";
import MealPlan from "./pages/MealPlan";
import NutritionInfo from "./pages/NutritionInfo";
import FAQs from "./pages/FAQs";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";

// context
import AuthProvider from "./context/AuthContext";  // 👈 must be without .jsx

import "./App.css";

function App() {
  return (
    <AuthProvider>       {/* 👈 Wrap ENTIRE APP */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-plan" element={<CreatePlan />} />
          <Route path="/meal-plan" element={<MealPlan />} />
          <Route path="/nutrition-info" element={<NutritionInfo />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />        {/* 👈 ADD */}
          <Route path="/register" element={<Register />} />  {/* 👈 ADD */}
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
