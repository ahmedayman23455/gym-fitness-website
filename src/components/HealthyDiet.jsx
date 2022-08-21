import React from "react";
import "./HealthyDiet.scss";
import dietPhoto from "../data/data12.webp";

const HealthyDiet = () => {
  return (
    <div className="container">
      <div className="healthy_diet">
        <h2 data-aos="fade-right">
          WE BELIEVE THAT FITNESS IS NOT SIMPLY A DAILY ACTIVITY
        </h2>
        <img src={dietPhoto} alt="diet foot" data-aos="zoom-in" />

        <div className="health_diet_planning" data-aos="fade-left">
          <h4>HEALTHY DIET PLANNING</h4>
          <p>
            Lorem ipsum dolor amet consectetur adipiscing do eiusmod tempor
            incididunt abore dolore magna ut enim.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HealthyDiet;
