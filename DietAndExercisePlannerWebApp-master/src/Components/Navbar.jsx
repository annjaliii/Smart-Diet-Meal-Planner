import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { token, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4 py-3">
      <Link to="/" className="navbar-brand text-white">
        MealPlanner
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link text-white">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/create-plan" className="nav-link text-white">
              Create Plan
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/meal-plan" className="nav-link text-white">
              Meal Plan
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/nutrition-info" className="nav-link text-white">
              Nutrition Info
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/about" className="nav-link text-white">
              About
            </Link>
          </li>

          {token ? (
            <li className="nav-item">
              <button className="btn btn-warning ms-3" onClick={handleLogout}>
                Logout
              </button>
            </li>
          ) : (
            <>
              <li className="nav-item">
                <Link className="btn btn-success mx-2" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="btn btn-light mx-2" to="/register">
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
