import React from "react";
import "./About.css";

export default function About() {
  const heroImg =
    "https://static.vecteezy.com/system/resources/thumbnails/019/050/491/small/a-girl-sitting-and-writing-a-diet-plan-weight-loss-concept-eat-food-that-is-good-for-the-body-such-as-fruits-and-vegetables-free-photo.jpg";

  const items = [
    { title: "Healthy Planning", desc: "Organize your meals daily." },
    { title: "Balanced Diets", desc: "Science-backed nutrition." },
    { title: "Expert Support", desc: "Guidance from specialists." },
    { title: "Smart Tracking", desc: "Track your progress easily." },
  ];

  return (
    <div className="about-bg">

      {/* HERO CARD */}
      <div className="hero-card">
        <div className="hero-left">
          <p className="hero-tag">ABOUT US </p>

          <h1 className="hero-title">
            Build Healthier <br />
            Habits One Step <br />
            at a Time
          </h1>

          <p className="hero-text">
            We help individuals achieve better health using personalized diet
            plans, smart meal organization, and science-based nutrition — making
            healthy living simple, enjoyable, and sustainable.
          </p>

          <div className="hero-btns">
            <button className="btn-filled">Learn More</button>
            <button className="btn-outline">Why Choose Us?</button>
          </div>
        </div>

        <div className="hero-right">
          <img src={heroImg} alt="diet" />
        </div>
      </div>

      {/* BOTTOM MINI CARDS */}
      <div className="bottom-items">
        {items.map((it, index) => (
          <div className="item-card" key={index}>
            <h3>{it.title}</h3>
            <p>{it.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}



