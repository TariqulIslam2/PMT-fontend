import React from "react";
import Navbar from "./../../../initialPage/navbar/Navbar";
import {
  dataStore,
  websiteDevelopment,
  traning,
  uiUx,
  softwareDevelopment,
  ecommmerce,
  consultancy,
  Advertising,
  startProject,
  apps,
} from "../../../Entryfile/ImagePath";
import Footer from "../../../initialPage/Footer/Footer";
import { Link } from "react-router-dom";

const SingleService = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <div
          className="col-sm-12 m-0 p-0"
          style={{ backgroundColor: "rgba(217, 217, 217, 0.38)" }}
        >
          <div className="container py-1">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to={"/home"}>Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  <Link to={"/services"}>Services</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Web Development
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <div className="container mt-5">
          <div className="text-center">
            <h6 className="pb-2">ON STOP SOLUTIONS</h6>
            <h2 className="pb-2">Web Development</h2>
          </div>
          <div className="text-center pb-2">
            <hr style={{ margin: "auto" }} className=" lineStyle " />
          </div>
          <p className="text-center pb-5 pt-5">
            Web development is the work involved in developing a website for the
            Internet or an intranet. Web development can range from developing a
            simple single static page of plain text to complex web applications,
            electronic businesses, and social network services.
          </p>
        </div>
        <div className="container">
          <div className="mt-5 pt-4">
            <div className="container px-4">
              <h3 className="text-center">
                Services we provide for web development{" "}
              </h3>
              <div className="mt-5">
                <div className="row">
                  <div className="col-sm-6">
                    <ul>
                      <li className="mb-3">Static Website Design</li>
                      <li className="mb-3">Dynamic Website Development</li>
                      <li className="mb-3">Web Application Development</li>
                      <li className="mb-3">Online News Portal Solution</li>
                      <li className="mb-3">E-Commerce Development</li>
                      <li className="mb-3">Online Job Portal Solution</li>
                      <li className="mb-3 text-primary">
                        Others Custom Creations you want
                      </li>
                    </ul>
                  </div>
                  <div className="col-sm-6 text-center">
                    <img
                      src={startProject}
                      className="w-100 rounded-3"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container py-5">
          <div className="mt-5 pt-5 border rounded-3 shadow px-3">
            <div className="container">
              <div className="row">
                <div className="col-sm-6">
                  <div
                    className=" p-3 text-center"
                    style={{ borderRedius: "20px" }}
                  >
                    <h4 className="mb-3 fw-bold">
                      Let's talk about your Project.
                    </h4>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control bg-light"
                        id="exampleFormControlInput1"
                        placeholder="your name"
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control bg-light"
                        id="exampleFormControlInput1"
                        placeholder="your email"
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="number"
                        className="form-control bg-light"
                        id="exampleFormControlInput1"
                        placeholder="phone no."
                      />
                    </div>
                    <div className="mb-3">
                      <textarea
                        className="form-control bg-light"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        placeholder="Your Message"
                      ></textarea>
                    </div>
                    <div className="text-center mt-3">
                      <button className="serviceButton w-100 fw-normal">
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 text-center pb-3">
                  <img src={startProject} className="w-100 rounded-3" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default SingleService;
