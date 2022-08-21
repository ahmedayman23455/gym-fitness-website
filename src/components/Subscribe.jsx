import React from "react";
import image from "../data/data18.jpg";
import "./Subscribe.scss";
import { CgMail } from "react-icons/cg";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { SubscribeAppointements } from ".";
/* ------------------------------------------------------ */

const Subscribe = () => {
  return (
    <div className="subscribe">
      <div className="container">
        <div className="subscribe_content">
          <div className="subscribe_image">
            {/* <img srsc={image} alt="" /> */}
          </div>
          {/* home */} 
          {/* about */} 

          <div className="subscribe_details">
            <h2> GET 7 DAYS FREE FULL ACCESS PASS</h2>
            <p>
              Our personal trainers are on hand to assist you with your training
              and inductions.
            </p>
            <form>
              <input type="text" placeholder="Enter your name..." required />
              <input
                type="text"
                placeholder="Enter your email address"
                required
              />
              <button type="submit">
                <CgMail />
                <span>Subscribe</span>
              </button>
            </form>
          </div>
        </div>

        <SubscribeAppointements />
      </div>
    </div>
  );
};

export default Subscribe;
