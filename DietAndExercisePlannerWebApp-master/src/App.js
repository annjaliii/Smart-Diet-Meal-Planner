import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import CreatePlan from "./pages/createPlan";
import MealPlan from "./pages/MealPlan";
import NutritionInfo from "./pages/NutritionInfo";

import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";

import AuthProvider from "./context/AuthContext"; // 👈 IMPORT PROVIDER
import "./App.css";

function App() {
  return (
    <AuthProvider>
      {" "}
      {/* 👈 MUST WRAP EVERYTHING */}
      <Router>
        <Navbar /> {/* 👈 NOW IT HAS CONTEXT */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-plan" element={<CreatePlan />} />
          <Route path="/meal-plan" element={<MealPlan />} />
          <Route path="/nutrition-info" element={<NutritionInfo />} />

          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
