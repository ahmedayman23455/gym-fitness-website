import React from "react";
import "./Workout.scss";


/* ------------------------------------------------------ */
const Workout = () => {

  return (
    <div className="workout">
      <div className="container">
        <div className="workout_title" data-aos="fade-down">
          <h3>The fitness classes </h3>
          <h2>Personal workout</h2>
        </div>

        <div className="workout_types">
          <div className="workout_type" data-aos="fade-up">
            <div className="workout_type_image"></div>

            <div className="workout_types_content">
              <h3>Running happiness</h3>
              <h4>Created to support</h4>
              <button>explore more </button>
            </div>
          </div>

          <div className="workout_type" data-aos="fade-up"  data-aos-delay="200">
            <div className="workout_type_image"></div>
            <div className="workout_types_content">
              <h3>Fitness journay </h3>
              <h4>Feminist over power</h4>
              <button>explore more </button>
            </div>
          </div>

          <div className="workout_type" data-aos="fade-up"  data-aos-delay="400">
            <div className="workout_type_image"></div>
            <div className="workout_types_content">
              <h3>sport happiness fantasy</h3>
              <h4>sport happiness fantasy</h4>
              <button>explore more </button>
            </div>
          </div>

          <div className="workout_type" data-aos="fade-up"  data-aos-delay="600">
            <div className="workout_type_image"></div>
            <div className="workout_types_content">
              <h3>possilbe exercise</h3>
              <h4>power overwhelming</h4>
              <button>explore more </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workout;
