import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "./Header.scss";
import { FiPlay } from "react-icons/fi";

/* ------------------------------------------------------ */
const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="header">
      <div className="header_wrapper">
        <div className="header_content">
          <ModalVideo
            channel="youtube"
            autoplay
            isOpen={isOpen}
            videoId="67PstLDYXGI"
            onClose={() => setOpen(false)}
          />
          <button
            className="header_video_btn btn-primary"
            onClick={() => setOpen(true)}
          >
            <FiPlay />
          </button>
          <h1>crossfit exercises</h1>
          <button className="header_start_btn"> Get started now</button>
        </div>
      </div>
    </div>
  );
};

export default Header;

<button>VIEW DEMO</button>;
