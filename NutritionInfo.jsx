import React from "react";
import "./NutritionInfo.css";

export default function NutritionInfo() {
  const sections = [
    {
      title: "Healthy Diet & Everyday Nutrition",
      desc: "A healthy diet provides essential nutrients that support long-term wellness, improve digestion, and enhance the body's natural immunity.",
      img: "https://thumbs.dreamstime.com/b/diet-nutrition-26610524.jpg",
      reverse: false,
    },
    {
      title: "Weight Management & Healthy Eating",
      desc: "Smart food choices help manage weight naturally. Including fruits, salads, and fiber-rich meals keeps you full longer and prevents overeating.",
      img: "https://img.freepik.com/premium-photo/healthy-eating-dieting-slimming-weigh-loss-concept-close-up-green-apple-measuring-tape-salad_380164-94192.jpg?semt=ais_hybrid&w=740&q=80",
      reverse: true,
    },
    {
      title: "Balanced Meal Planning",
      desc: "A balanced plate contains all key food groups — proteins, carbs, healthy fats, and colorful vegetables — ensuring steady energy throughout the day.",
      img: "https://t3.ftcdn.net/jpg/01/94/71/74/360_F_194717411_d4Jbt7WKeSUCJvX15rYrKRNso7wiQiTu.jpg",
      reverse: false,
    },
    {
      title: "Nutrient-Rich Food Choices",
      desc: "Choosing nutrient-dense foods like whole grains, lean proteins, fruits, and leafy greens helps support metabolism and overall body strength.",
      img: "https://static.vecteezy.com/system/resources/thumbnails/017/231/636/small/food-nutrition-concept-photo.jpg",
      reverse: true,
    },
  ];

  return (
    <div className="nutrition-wrapper">
      <h1 className="nutrition-title">Nutrition Information</h1>

      {sections.map((sec, index) => (
        <div
          key={index}
          className={`nutrition-section ${sec.reverse ? "reverse" : ""}`}
        >
          {/* TEXT */}
          <div className="nutrition-text">
            <h2>{sec.title}</h2>
            <p>{sec.desc}</p>
          </div>

          {/* IMAGE */}
          <div className="nutrition-image-box">
            <img src={sec.img} alt={sec.title} />
          </div>
        </div>
      ))}
    </div>
  );
}

