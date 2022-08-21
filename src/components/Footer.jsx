import React from "react";
import "./Footer.scss";
import { AiOutlineMail } from "react-icons/ai";
import data01 from "../data/data01.png";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
/* ------------------------------------------------------ */

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-content">
          {/* one */}
          <div>
            <h3>About Company</h3>
            <p>
              Lorem ipsum is simply dummy text of the printing and industry.
              Lorem ipsum has been the industry industry standard dummy text.
            </p>
          </div>
          {/* two */}

          <div>
            <h3>Company</h3>
            <ul>
              <li>About comany</li>
              <li>Our services </li>
              <li> job apportuities</li>
              <li>Contact us</li>
            </ul>
          </div>

          {/* three */}

          <div>
            <h3>Customer</h3>
            <uL>
              <li>Client support</li>
              <li>Pricing packages </li>
              <li> company story </li>
              <li>latest news </li>
            </uL>
          </div>
          {/* four  */}
          <div>
            <h3>subscribe to newsletter</h3>
            <p>
              Lorem ipsum is simply dummy text of the printing and typesetting.
            </p>
            <div className="footer-emailInput">
              <input
                type="email"
                required
                placeholder="Enter your email address"
              />
              <button>
                {/* text */}
                <AiOutlineMail />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-socialLinks">
        <div className="container">
          <div>
            <img src={data01} alt="" />
          </div>
          <p>© 2022 Litho is Proudly Powered by ThemeZaa</p>
          <ul>
            <li>
              <a href="#">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="#">
                <BsTwitter />
              </a>
            </li>
            <li>
              <a href="#">
                <FiInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
