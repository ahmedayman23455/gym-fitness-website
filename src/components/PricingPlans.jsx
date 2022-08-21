import React from "react";
import "./PricingPlans.scss";

/* ------------------------------------------------------ */
const PricingPlans = () => {
  return (
    <div className="pricingPlans">
      <div className="container">
        {/* left */}
        <div className="pricingPlans_content">
          <h3>pricing plans</h3>
          <h2>flexible and predicttable pricing plans</h2>
          <p>
            Lorem ipsum dolor consectetur adipiscing do eiusmod tempor
            incididunt abore.
          </p>
          <button>pricing plans</button>
        </div> 

        {/* middle */}
        {/* <div>  

        </div> */}

        {/* right */}
        <div  className="pricingPlans_prices">
          {/* monthly plan  */}
          <div className="pricingPlans_monthlyPlan" >
            <h4>Monthly plan</h4>
            <p>
              <span> $29</span>
              <span> per year</span>
            </p>
            <ul>
              <li>no swimming pool</li>
              <li>canteen optional</li>
              <li> towels not included</li>
              <li> no personal trainer</li>
            </ul>
            <button> choose plan</button>
          </div>

          {/* yearly plan  */} 
          <div className="pricingPlans_yearlyPlan" data-aos="fade-left">
            <h4>Yearly plan</h4>
            <p>
              <span> $89</span>
              <span> per year</span>
            </p>
            <ul>
              <li>swimming pool</li>
              <li>canteen optional</li>
              <li> towels not included</li>
              <li> personal trainer</li>
            </ul>
            <button> choose plan</button>
          </div>


        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
