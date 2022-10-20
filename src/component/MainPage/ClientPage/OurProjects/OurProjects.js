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
// import "./ServicesPage.css";
import "./OurProjects.css";
const OurProjects = () => {
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
                  Projects
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <div className="container mt-5">
          <div className="text-center">
            <h6 className="pb-2">ON STOP SOLUTIONS</h6>
            <h2 className="pb-2">Projects developed by us</h2>
          </div>
          <div className="text-center pb-2">
            <hr style={{ margin: "auto" }} className=" lineStyle " />
          </div>
          <p className="text-center pb-5">
            A Software, that make your work fast & save your time & money. If
            you are looking for a best software development company in dhaka
            bangladesh, then you are the right place. Being a trusted custom
            software development company in Bangladesh, we employ industry best
            practices to deliver robust, secure & scalable custom software
            development services.
          </p>
        </div>
        <div className="container">
          <div className="mt-5 pt-4">
            <div className="container px-4">
              <div className="row gx-5 gy-5">
                <div className="col-sm-4">
                  <div className="position-relative w-100  h-100">
                    <img
                      src={startProject}
                      className="w-100 h-100 rounded-3 "
                      alt=""
                    />
                    <div className="position-absolute bg-primary bottom-0 start-50 w-100  translate-middle-x">
                      <h6 className="bg-primary w-100 py-2 text-center text-white">
                        Accounting Management System
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="position-relative w-100  h-100">
                    <img
                      src={startProject}
                      className="w-100 h-100 rounded-3"
                      alt=""
                    />
                    <div className="position-absolute bg-primary bottom-0 start-50 w-100  translate-middle-x">
                      <h6 className="bg-primary w-100 py-2 text-center text-white">
                        Inventory Management System
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="position-relative w-100  h-100">
                    <img
                      src={startProject}
                      className="w-100 h-100  rounded-3"
                      alt=""
                    />
                    <div className="position-absolute bg-primary bottom-0 start-50 w-100  translate-middle-x">
                      <h6 className="bg-primary w-100 py-2 text-center text-white">
                        Payroll Management System
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-5 gx-5 gy-5">
                <div className="col-sm-4">
                  <div className="position-relative w-100  h-100">
                    <img
                      src={startProject}
                      className="w-100 h-100 rounded-3"
                      alt=""
                    />
                    <div className="position-absolute bg-primary bottom-0 start-50 w-100  translate-middle-x">
                      <h6 className="bg-primary w-100 py-2 text-center text-white">
                        Transport Management System
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="position-relative w-100  h-100">
                    <img
                      src={startProject}
                      className="w-100 h-100 rounded-3"
                      alt=""
                    />
                    <div className="position-absolute bg-primary bottom-0 start-50 w-100  translate-middle-x">
                      <h6 className="bg-primary w-100 py-2 text-center text-white">
                        Sales Management System [POS]
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="position-relative w-100  h-100">
                    <img
                      src={startProject}
                      className="w-100 h-100 rounded-3"
                      alt=""
                    />
                    <div className="position-absolute bg-primary bottom-0 start-50 w-100  translate-middle-x">
                      <h6 className="bg-primary w-100 py-2 text-center text-white">
                        Proprty Management System
                      </h6>
                    </div>
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

export default OurProjects;
