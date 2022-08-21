import React, { Children, useEffect } from "react";
import "./Navigation.scss";
import logowhite from "../data/data01.png";
import logoOrange from "../data/data03.png";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { useStateContext } from "../contexts/ContextProvider";
import { VscListSelection } from "react-icons/vsc";
import { motion, AnimatePresence } from "framer-motion";
import { navigation } from "../data/data";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { Twirl as Hamburger } from "hamburger-react";
import { useMediaQuery, useMediaQueries } from "@react-hook/media-query";

/* ------------------------------------------------------ */
const Navigation = ({ scrollUp0, navIsShow }) => {
  const { activeMenu, setActiveMenu, navState, handleNavState } =
    useStateContext();

  const nav_sc_size = useMediaQuery(" (max-width: 1024px)");

  // return
  return (
    <motion.div
      className="navigation"
      style={
        navIsShow && scrollUp0
          ? { backgroundColor: "black", color: "white" }
          : {}
      }
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        backgroundColor: "black",
        color: "white",
        transition: { duration: 0.2 },
      }}
      transition={{ duration: 0.5 }}
    >
      {/* logo */}
      <div className="navigation_logo">
        <img src={!nav_sc_size ? logowhite : logoOrange} alt="Logo" />
      </div>

      {/* desktop links */}
      {!nav_sc_size && (
        <div className="navigation_links_ds">
          {navigation.map((navItem) => {
            return (
              <div
                key={navItem.id}
                onMouseEnter={() => {
                  handleNavState(navItem.title);
                }}
                onMouseLeave={() => {
                  handleNavState(navItem.title);
                }}
              >
                <p>{navItem.title}</p>

                {navState[navItem.title] && (
                  <ul className="nav_sublinks_ds">
                    {navItem.children.map((child, index) => {
                      return (
                        <li key={index}>
                          <a href="#">{child}</a>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* social media links */}

      <div
        className="navigation_links_sm"
        style={navIsShow && scrollUp0 ? { color: "white" } : null}
      >
        <a href="#">
          <FaFacebookF />
        </a>
        <a href="#">
          <FiInstagram />
        </a>
        <a href="#">
          <BsTwitter />
        </a>

        {nav_sc_size && (
          <Hamburger
            toggled={activeMenu}
            toggle={setActiveMenu}
            size={18}
            rounded
            style={{ width: "30px" }}
          />
        )}
      </div>

      {/* mobile links */}
      <AnimatePresence>
        {nav_sc_size && activeMenu && (
          <motion.div
            className={`navigation_links_mb`}
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ type: "Tween", stiffness: 100, duration: 0.5 }}
          >
            {navigation.map((navItem) => {
              return (
                <div key={navItem.id} className="nav_mb">
                  <div
                    className="nav_mb_link"
                    onClick={() => {
                      handleNavState(navItem.title);
                    }}
                  >
                    <p>{navItem.title}</p>
                    {navState[navItem.title] ? (
                      <AiOutlineUp />
                    ) : (
                      <AiOutlineDown />
                    )}
                  </div>
                  {navState[navItem.title] && (
                    <ul className="nav_sublinks_mb">
                      {navItem.children.map((child, index) => {
                        return <li key={index}> {child}</li>;
                      })}
                    </ul>
                  )}
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navigation;
