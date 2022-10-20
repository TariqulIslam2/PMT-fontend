import React from "react";
import "./Banner.css";
import { slider1 } from "../../../Entryfile/ImagePath";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper";
const Banner = () => {
  return (
    <div className=" pb-5">
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <img src={slider1} className=" w-100" alt="..." />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={slider1} className=" w-100" alt="..." />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={slider1} className=" w-100" alt="..." />
        </SwiperSlide>
      </Swiper>
      {/* <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={slider1} className="d-block w-100" alt="..." />
            {/* <div className="carousel-caption d-none d-md-block text-end">
              <button type="button" className="btn btn-primary fw-bold">
                Services Here &#8594;
              </button>
            </div> 
          </div>
          <div className="carousel-item">
            <img src={slider1} className="d-block w-100" alt="..." />
            {/* <div className="carousel-caption d-none d-md-block text-end">
              <button type="button" className="btn btn-primary fw-bold">
                Services Here &#8594;
              </button>
            </div> 
          </div>
          <div className="carousel-item">
            <img
              src="https://img.freepik.com/free-photo/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture-wide-angle-rough-colored-background_1258-28311.jpg?size=626&ext=jpg"
              className="d-block w-100"
              alt="..."
            />
            {/* <div className="carousel-caption d-none d-md-block text-end">
              <button type="button" className="btn btn-primary fw-bold">
                Services Here &#8594;
              </button>
            </div> 
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            style={{
              backgroundImage: `url("${sliderArrowLeft}")`,
              border: "1px solid rgb(246, 246, 246)",
              borderRadius: "50%",
            }}
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            style={{
              backgroundImage: `url("${sliderArrowRight}")`,
              border: "1px solid rgb(246, 246, 246)",
              borderRadius: "50%",
            }}
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div> */}
    </div>
  );
};

export default Banner;
