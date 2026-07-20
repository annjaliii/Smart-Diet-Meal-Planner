import React from "react";
import "./About.css";

export default function About() {
  const heroImg =
    "https://static.vecteezy.com/system/resources/thumbnails/019/050/491/small/a-girl-sitting-and-writing-a-diet-plan-weight-loss-concept-eat-food-that-is-good-for-the-body-such-as-fruits-and-vegetables-free-photo.jpg";

  const items = [
    {
      title: "Personalized Meal Plans",
      desc: "AI-powered recommendations tailored to your health goals.",
    },
    {
      title: "Balanced Nutrition",
      desc: "Scientifically designed meal suggestions for a healthy lifestyle.",
    },
    {
      title: "Easy Access",
      desc: "Download your customized meal plans in PDF format anytime.",
    },
    {
      title: "Smart Planning",
      desc: "Plan your daily meals effortlessly with AI assistance.",
    },
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
