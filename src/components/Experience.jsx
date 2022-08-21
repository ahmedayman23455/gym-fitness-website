import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import photo01 from "../data/data06.jpg";
import photo02 from "../data/data07.webp";
import "./Experience.scss";
/* ------------------------------------------------------ */
const Experience = () => {
  return (
    <div className="container">
      <div className="experience">
        <div className="experience_images">
          <img src={photo01} alt="photo" className="one" />
          <img src={photo02} alt="photo" className="two" />
        </div>

        <div className="experience_content">
          <div className="experience_content_elements">
            <h4>20 year experience</h4>
            <h2>we have center of fitness more than 20 years</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Aspernatur, fugit odio ipsum velit incidunt magnam dignissimos
              impedit veritatis natus, minus optio minima corporis iste
              quibusdam.
            </p>
            <button>
              <span>discover litho</span>
              <BsArrowRightShort />
            </button>
          </div>
        </div>
      </div>

      <div className="achievements">
        <div data-aos="zoom-in">
          <span> 01</span>
          <p>LARGEST NETWORK OF GYMS AND FITNESS </p>
        </div>

        <div data-aos="zoom-in" data-aos-delay="200">
          <span> 02</span>
          <p>FRIENDLY EXPERT HIGH LEVEL PERSONAL TRAINERS </p>
        </div>

        <div data-aos="zoom-in" data-aos-delay="400">
          <span>03</span>
          <p>2020 GYM OF THE YEAR AWARD WINING GYM</p>
        </div>

        <div data-aos="zoom-in" data-aos-delay="600">
          <span> 04</span>
          <p> FLEXIBILITY TO GYM ACCESS PRIME CONTROL </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
