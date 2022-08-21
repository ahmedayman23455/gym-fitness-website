import React, { useState, useEffect } from "react";
import {
  Navigation,
  Header,
  Experience,
  Workout,
  HealthyDiet,
  FitnessClasses,
  PerfectBody,
  Subscribe,
  PricingPlans,
  Footer,
  ScrollBtn,
} from "../components";
import { useStateContext } from "../contexts/ContextProvider";
import { AnimatePresence } from "framer-motion";
import "./Home.scss";
import { motion } from "framer-motion";
/* ------------------------------------------------------ */

const Home = () => {
  const { navIsShow, setNavIsShow } = useStateContext();
  const [scrollBtn, setScrollBtn] = useState(false);
  const [scrollUp0, setScrollUp0] = useState(false);

  // useEffect
  useEffect(() => {
    // wheel eventListener
    function checkScrollDirection(event) {
      if (checkScrollDirectionIsUp(event)) {
        setNavIsShow(true);
        setScrollBtn(false);
      } else {
        // setTest(false);
        setNavIsShow(false);
        setScrollBtn(true);
      }
    }

    function checkScrollDirectionIsUp(event) {
      console.log(event);
      if (event.wheelDelta) {
        return event.wheelDelta > 0;
      }
      return event.deltaY < 0;
    }
    document.addEventListener("wheel", checkScrollDirection);

    window.addEventListener("scroll", () => {
      const scrollValue = window.scrollY || document.documentElement.scrollTop;
      if (scrollValue > 400) {
        setScrollUp0(true);
      } else {
        setScrollUp0(false);
      }
    });
  }, []);

  /* ------------------------------------------------------ */
  return (
    <motion.div
      className="home_page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}  
      transition={{ease: 'easeIn' , duration: .5}} 
    >
      <AnimatePresence>
        {navIsShow && (
          <Navigation scrollUp0={scrollUp0} navIsShow={navIsShow} />
        )}
      </AnimatePresence>
      <div className="flex">
        <Header /> 
        <Experience />
        <Workout />
        <HealthyDiet />
        <FitnessClasses />
        <PerfectBody />
        <Subscribe />
        <PricingPlans />
        <Footer />

        {scrollBtn && <ScrollBtn />}
      </div>
    </motion.div>
  );
};

export default Home;
