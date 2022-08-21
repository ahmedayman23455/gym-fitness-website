import React from "react";
import "./ScrollBtn.scss";
import { AiOutlineArrowUp } from "react-icons/ai";
/* ------------------------------------------------------ */

const ScrollBtn = () => {
  return (
    <button
      className="scrollBtn"
      onClick={() => {
        window.scroll({ top: 0, behavior: "smooth" });
      }}
    >
      <AiOutlineArrowUp />
    </button>
  );
};

export default ScrollBtn;
