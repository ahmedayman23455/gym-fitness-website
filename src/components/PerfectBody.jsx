import React, { useState } from "react";
import "./PerfectBody.scss";
import ModalVideo from "react-modal-video";
import { FiPlay } from "react-icons/fi";

/* ------------------------------------------------------ */

const PerfectBody = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="perfectBody">
      <div className="perfectBody_header">
        <div className="perfectBody_header_wrapper">
          <div className="perfectBody_header_content">
            <ModalVideo
              channel="youtube"
              autoplay
              isOpen={isOpen}
              videoId="67PstLDYXGI"
              onClose={() => setOpen(false)}
            />
            <button
              className="perfectBody_header_video_btn btn-primary"
              onClick={() => setOpen(true)}
              data-aos="zoom-in"
            >
              <FiPlay />
            </button>
            <h1 data-aos="zoom-in">looking for a perfect body</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerfectBody;
