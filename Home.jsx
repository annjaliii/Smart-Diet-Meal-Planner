import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-fullscreen">
        <div className="hero-content">
          <h1>Smart Disease & Diet Planner </h1>
          <p>
            Get AI-powered meal recommendations based on your medical conditions —
            diabetes, heart disease, obesity, and more. Eat smart, stay healthy!
          </p>
          <button className="hero-btn">Start Planning</button>
        </div>
      </section>

      {/* Features Section */}
      <div className="features-section">
        <h2>Personalized Nutrition for Better Health</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <img
              src="https://tse2.mm.bing.net/th/id/OIP.bQR3aMx0ipJw9zEuKAFNxwHaEK?pid=Api&P=0&h=180"
              alt="Diabetes diet"
            />
            <h3>Diabetes-Friendly Diets</h3>
            <p>Control your blood sugar with tailored low-glycemic meal plans.</p>
          </div>

          <div className="feature-card">
            <img
              src="https://img.freepik.com/premium-photo/healthy-vegetarian-diet-food-salad-with-grill-eggplants-tomatoes-feta-cheese_1048944-22798871.jpg"
              alt="Heart health"
            />
            <h3>Heart-Healthy Choices</h3>
            <p>Get balanced meals that support cholesterol and heart wellness.</p>
          </div>

          <div className="feature-card">
            <img
              src="https://rare-gallery.com/thumbnail/436456-food-spices-tomatoes-salad-vegetables.jpg"
              alt="Weight management"
            />
            <h3>Weight Management</h3>
            <p>Plan calorie-controlled meals to achieve your fitness goals.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
