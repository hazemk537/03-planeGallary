import React from "react";

export default function Card() {
  return (
    <div className="cardGroup">
      <div className="card card1 section ">
        <img className="card--image" src="public/plane1.webp" alt="plane1" />
        <div className="card--stats">
          <span>⭐</span>
          <span>5.0</span>
          <span>(6) • </span>
          <span>USA</span>
        </div>
        <p>2020 CIRRUS SR22-G6 TURBO</p>
        <p>from USD $1,000 per flight </p>
      </div>
      <div className="card section ">
         <img className="card--image" src="public/plane2.jpeg" alt="plane1" />
         <div className="card--stats">
          <span>⭐</span>
          <span>5.0</span>
          <span>(3) • </span>
          <span>USA</span>
        </div>
        <p>1978 PIPER SENECA II</p>
        <p>from USD $104,531 per flight </p>
        </div>

        <div className="card3 section ">
          <img className="card--image" src="public/plane3.jpeg" alt="plane1" />
          <div className="card--stats">
            <span>⭐</span>
            <span>4.8</span>
            <span>(7) • </span>
            <span>EGY</span>
          </div>
          <p>1978 CESSNA 172N SKYHAWK</p>
          <p>from USD $274,799 per flight </p>
        </div>
      </div>
    
  );
}
