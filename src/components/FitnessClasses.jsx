import React from "react";
import "./FitnessClasses.scss";
import { Pagination, Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import image1 from "../data/data13.webp";
import image2 from "../data/data14.jpg";
import image3 from "../data/data15.webp";
import image4 from "../data/data16.webp";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";

/* ------------------------------------------------------ */

const FitnessClasses = () => {
  return (
    <div className="fitnessClasses">
      <div className="container">

        <div className="fitnessClasses_title" data-aos="fade-down">
          <h3>The fitness classes </h3>
          <h2>Personal workout</h2>
        </div>

        <Swiper
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            1024: {
              slidesPerView: 2,
            },
          }}
          // pagination={{
          //   clickable: true,
          // }}
          navigation={{
            clickable: true,
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
        >
          <div className="swiper-button-next" slot="button-next">
            <BsArrowRightShort />
          </div>
          <div className="swiper-button-prev" slot="button-prev">
            <BsArrowLeftShort />
          </div>

          <SwiperSlide>
            <div className="fitness_class" >
              <img src={image1} alt="image" />
              <div className="fitness_class_content">
                <h4>sculpturing</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button>join classes</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="fitness_class">
              <img src={image2} alt="image" />
              <div className="fitness_class_content">
                <h4>cycling </h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                <button>join classes</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="fitness_class">
              <img src={image3} alt="image" />
              <div className="fitness_class_content">
                <h4>cardio </h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button>join classes</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="fitness_class">
              <img src={image4} alt="image" />
              <div className="fitness_class_content">
                <h4>crossfit </h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <button>join classes</button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="fitnessClasses_details">
          <div data-aos="zoom-in">
            <span> 2530</span>
            <p>hours exercise</p>
          </div>
          <div data-aos="zoom-in" data-aos-delay="200">
            <span> 3220</span>
            <p>PHOTO CAPTURE</p>
          </div>
          <div data-aos="zoom-in" data-aos-delay="400">
            <span> 2800</span>
            <p>TELEPHONIC TALK</p>
          </div>
          <div data-aos="zoom-in" data-aos-delay="700">
            <span> 3420</span>
            <p>TRAINING PEOPLE</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FitnessClasses;
