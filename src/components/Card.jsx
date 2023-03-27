import React from "react";

export default function Card() {
  return (
    <div className="cardGroup">
      <div className="card card1 section ">
        <img className="card--image" src="https://media.sandhills.com/img.axd?id=7290758489&wid=4326165471&rwl=False&p=&ext=&w=614&h=460&t=&lp=&c=True&wt=False&sz=Max&rt=0&checksum=22t34TCd65gitDaLNXNGurOjxJSLdxmAYzo7UZsOtDQ%3d" alt="plane1" />
        <div className="card--stats">
          <span>⭐</span>
          <span>5.0</span>
          <span>(6) • </span>
          <span>USA</span>
        </div>
        <p>2020 CIRRUS SR22-G6 TURBO</p>
        <p>from USD $1,000 per flight </p>
      </div>
      <div className="card card2 section ">
         <img className="card--image" src="https://media.sandhills.com/img.axd?id=7277247403&wid=4326165471&rwl=False&p=&ext=&w=614&h=460&t=&lp=&c=True&wt=False&sz=Max&rt=0&checksum=dWHm46hupdivrUq3NNV2yqjCAq1mgk55RVMXxfjmiVY%3d" alt="plane2" />
         <div className="card--stats">
          <span>⭐</span>
          <span>5.0</span>
          <span>(3) • </span>
          <span>USA</span>
        </div>
        <p>1978 PIPER SENECA II</p>
        <p>from USD $104,531 per flight </p>
        </div>

        <div className="card card3 section ">
          <img className="card--image" src="https://media.sandhills.com/img.axd?id=8000101285&wid=4326165471&rwl=False&p=&ext=&w=350&h=220&t=&lp=&c=True&wt=False&sz=Max&rt=0&checksum=8m33BgSD32YWZr4oiRbcyPn4%2fNeNM97OXfmLaL%2fJLH8%3d" alt="plane1" />
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
