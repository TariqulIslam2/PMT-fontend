import React from "react";
import {
  mobileApp,
  planning,
  seo,
  softIcon,
  ui,
  webDev,
} from "../../../Entryfile/ImagePath";
import "./OurServices.css";
// import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
const OurServices = () => {
  return (
    <div className="mt-5 py-5 container">
      <div className="text-center">
        <h6>ON STOP SOLUTIONS</h6>
        <h2>Services we serve to all over the world</h2>
      </div>
      <div className="text-center">
        <hr style={{ margin: "auto" }} className=" lineStyle " />
      </div>
      <div className="mt-5 pt-4">
        <div className="container px-4">
          <div className="row gx-5 gy-5">
            <div className="col-sm-4">
              <div className="p-3 ">
                <div className="row">
                  <div className="col-sm-2">
                    <img src={planning} className=" serviceImage" alt="" />
                  </div>
                  <div className="col-sm-10">
                    <h4>Strategy & Planning</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore
                      magna.{" "}
                      <a href="more " className="text-decoration-none">
                        More...
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="p-3 ">
                <div className="row">
                  <div className="col-sm-2">
                    <img src={ui} className=" serviceImage" alt="" />
                  </div>
                  <div className="col-sm-10">
                    <h4>UI/UX Design</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore
                      magna.{" "}
                      <a href="more " className="text-decoration-none">
                        More...
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="p-3 ">
                <div className="row">
                  <div className="col-sm-2">
                    <img src={softIcon} className=" serviceImage" alt="" />
                  </div>
                  <div className="col-sm-10">
                    <h4>Software Solutions</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore
                      magna.{" "}
                      <a href="more " className="text-decoration-none">
                        More...
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row gx-5 gy-5">
            <div className="col-sm-4">
              <div className="p-3 ">
                <div className="row">
                  <div className="col-sm-2">
                    <img src={webDev} className=" serviceImage" alt="" />
                  </div>
                  <div className="col-sm-10">
                    <h4>Web Development</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore
                      magna.{" "}
                      <a href="more " className="text-decoration-none">
                        More...
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="p-3 ">
                <div className="row">
                  <div className="col-sm-2">
                    <img src={seo} className="serviceImage" alt="" />
                  </div>
                  <div className="col-sm-10">
                    <h4>SEO Optimization</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore
                      magna.{" "}
                      <a href="more " className="text-decoration-none">
                        More...
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="p-3 ">
                <div className="row">
                  <div className="col-sm-2">
                    <img src={mobileApp} className="serviceImage  " alt="" />
                  </div>
                  <div className="col-sm-10">
                    <h4>Mobile Apps</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore
                      magna.{" "}
                      <a href="more " className="text-decoration-none">
                        More...
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-3">
        <HashLink
          to="/services#services_page"
          className="text-decoration-none "
        >
          {" "}
          <button className="serviceButton">View All Services</button>
        </HashLink>
      </div>
    </div>
  );
};

export default OurServices;
