import React, { useEffect, useState } from "react";
import "./SubscribeAppointements.scss";
import { training_days } from "../data/data";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
/* ------------------------------------------------------ */

const getClasses = (day) => {
  const item = training_days.find((item) => item.day === day);
  return item.classes;
};

const SubscribeAppointements = () => {
  const appointementsInitialState = {
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
  };
  const [dayTrue, setDay] = useState("monday");

  const [appointementsSate, setAppointementsState] = useState({
    ...appointementsInitialState,
    monday: true,
  });

  const initialClasses = getClasses("monday");

  const [classes, setClasses] = useState(initialClasses);

  const initalAppointementsParagraphs = {
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
  };

  const [appParagraphs, setAppParagraphs] = useState(
    initalAppointementsParagraphs
  );

  /* ------------------------------------------------------ */
  return (
    <div className="subscribe_appointements" data-aos="fade-down">
      <ul className="subscribe_appointements_navigation">
        {training_days.map((item) => {
          return (
            <li
              className={appointementsSate[item.day] ? "active" : ""}
              onClick={() => {
                setAppointementsState({
                  ...appointementsInitialState,
                  [item.day]: true,
                });
                setClasses(getClasses(item.day));
              }}
            >
              {item.day}
            </li>
          );
        })}
      </ul>

      {/* class  */}
      <div className="subscribe_appointements_classes">
        {classes.map((classData, index) => {
          return (
            <div className="subscribe_appointements_class">
              <p className="subscribe_appointements_class_time">
                {classData.from} - {classData.to}
              </p>

              <div className="subscribe_appointements_class_details">
                <h4>{classData.className}</h4>

                <h4 className="subscribe_appointements_class_coach_mobile">
                  By {classData.coach}
                </h4>

                <AnimatePresence>
                  {appParagraphs[index] && (
                    <motion.p
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{
                        type: "Tween",
                        stiffness: 100,
                        duration: 0.3,
                      }}
                    >
                      Lorem ipsum is simply dummy text of the printing and
                      typesetting industry lorem ipsum.
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              <h4 className="subscribe_appointements_class_coach_desktop">
                By {classData.coach}
              </h4>

              {!appParagraphs[index] ? (
                <button
                  onClick={() => {
                    const keyOFIndex = index.toString();
                    setAppParagraphs({
                      ...initalAppointementsParagraphs,
                      [keyOFIndex]: true,
                    });
                  }}
                >
                  <AiOutlinePlus />
                </button>
              ) : (
                <button
                  onClick={() => {
                    const keyOFIndex = index.toString();
                    setAppParagraphs({
                      ...initalAppointementsParagraphs,
                    });
                  }}
                >
                  <AiOutlineMinus />
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SubscribeAppointements;
