import React from "react";
import { square1, square2, square3 } from "../../../Entryfile/ImagePath";
import "./ClientReview.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/grid";
// import required modules
import { Autoplay, Pagination } from "swiper";

const ClientReview = () => {
  return (
    <div className="mt-5 py-5 container">
      <div className="text-center">
        <h1 className="fw-bold">Client testimonials says it all</h1>
      </div>
      <div className="text-center">
        <hr style={{ margin: "auto" }} className=" lineStyle " />
      </div>
      <p className="text-center my-5 pb-4 px-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure earum
        consequuntur unde consectetur, rem ex sint expedita tempora molestiae,
        laudantium quo corrupti cumque officiis vitae, repellat inventore.
      </p>

      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        spaceBetween={90}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper container text-center swiperStyle"
        style={{ width: "100%" }}
      >
        <SwiperSlide>
          {" "}
          <div className="container ">
            <div className="row ">
              <div
                className="col-lg-3   reviewImageBox"
                style={{ zIndex: "1" }}
              >
                <div className="reviewImage">
                  <img
                    src={square2}
                    alt=""
                    style={{ borderRadius: "20px" }}
                    className="w-100 "
                  />
                </div>
              </div>
              <div
                className="col-lg-9 text-start  px-lg-5 px-md-5 px-1 py-lg-5 py-md-5 py-1 bg-black text-white"
                style={{ borderRadius: "20px" }}
              >
                <div className="  text-white px-5 pt-5 ">
                  <h3 className="mb-5 pt-lg-1 pt-md-1 pt-5 text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </h3>
                  <p className="pb-lg-0 pb-md-0 pd-5">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          {" "}
          <div className="container ">
            <div className="row ">
              <div
                className="col-lg-3   reviewImageBox"
                style={{ zIndex: "1" }}
              >
                <div className="reviewImage">
                  <img
                    src={square2}
                    alt=""
                    style={{ borderRadius: "20px" }}
                    className="w-100 "
                  />
                </div>
              </div>
              <div
                className="col-lg-9 text-start  px-lg-5 px-md-5 px-1 py-lg-5 py-md-5 py-1 bg-black text-white"
                style={{ borderRadius: "20px" }}
              >
                <div className="  text-white px-5 pt-5 ">
                  <h3 className="mb-5 pt-lg-1 pt-md-1 pt-5 text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </h3>
                  <p className="pb-lg-0 pb-md-0 pd-5">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ClientReview;
