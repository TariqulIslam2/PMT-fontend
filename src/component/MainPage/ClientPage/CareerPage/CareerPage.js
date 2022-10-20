import React from "react";
import Navbar from "./../../../initialPage/navbar/Navbar";
import {
  careerBanner,
  Jot,
  recruitmentCv,
  recruitmentPhone,
  recruitmentSkill,
  recruitmentInterview,
  facility1,
  facility2,
  facility3,
  facility4,
  facility5,
  facility6,
} from "../../../Entryfile/ImagePath";
import Footer from "../../../initialPage/Footer/Footer";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
const CareerPage = () => {
  return (
    <div id="career_page">
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
                  Career
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <div className="">
          <div>
            <img
              src={careerBanner}
              className="w-100"
              style={{ height: "100vh" }}
              alt=""
            />
          </div>
          <div style={{ backgroundColor: "rgba(217, 217, 217, 0.38)" }}>
            <h1 className="text-center pt-5 fw-bold">
              Join us for a secure future
            </h1>
            <div className="text-center pb-2 mt-4">
              <hr style={{ margin: "auto" }} className=" lineStyle " />
            </div>
            <p className="container my-5 p-5 ">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
            <div className="container">
              <div className="container">
                {" "}
                <div className="row gx-5">
                  <div className="col-sm-6">
                    <div>
                      <div className="row g-5">
                        <div className="col-sm-6">
                          <div
                            className="p-4 mb-5  bg-white  py-5"
                            style={{
                              backgroundColor: "#FFFFFF",
                              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                              borderRadius: "13px",
                            }}
                          >
                            <div>
                              <img
                                src={facility1}
                                style={{ width: "15%" }}
                                alt=""
                              />
                            </div>
                            <h5 className="mt-4">Large Beautiful Office </h5>
                            <p className="mt-4">
                              Enjoy a comforable office envirnment with the most
                              modern and stylish funishing.
                            </p>
                          </div>
                          <div
                            className="p-4 mb-5  bg-white  py-5"
                            style={{
                              backgroundColor: "#FFFFFF",
                              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.25)",
                              borderRadius: "13px",
                            }}
                          >
                            <div>
                              <img
                                src={facility3}
                                style={{ width: "15%" }}
                                alt=""
                              />
                            </div>
                            <h4 className="mt-4">Easy Location </h4>
                            <p>
                              Commute easily to work at your compensation for
                              transport costs.
                            </p>
                          </div>
                          <div
                            className="p-4 mb-5  bg-white  py-5"
                            style={{
                              backgroundColor: "#FFFFFF",
                              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.25)",
                              borderRadius: "13px",
                            }}
                          >
                            <div>
                              <img
                                src={facility5}
                                style={{ width: "15%" }}
                                alt=""
                              />
                            </div>
                            <h4 className="mt-4">Training Facilities </h4>
                            <p>
                              We have training facilities where our employee can
                              gain more knowledge.
                            </p>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div
                            className="mt-5 p-4 mb-5  bg-white  py-5"
                            style={{
                              backgroundColor: "#FFFFFF",
                              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.25)",
                              borderRadius: "13px",
                            }}
                          >
                            <div>
                              <img
                                src={facility2}
                                style={{ width: "15%" }}
                                alt=""
                              />
                            </div>
                            <h4 className="mt-4">Great Co-Workers </h4>
                            <p>
                              Work with some of the best talent in the indrustry
                              and build strong network with them.
                            </p>
                          </div>
                          <div
                            className="p-4 mb-5  bg-white  py-5"
                            style={{
                              backgroundColor: "#FFFFFF",
                              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.25)",
                              borderRadius: "13px",
                            }}
                          >
                            <div>
                              <img
                                src={facility4}
                                style={{ width: "15%" }}
                                alt=""
                              />
                            </div>
                            <h4 className="mt-4">Education Oportunity</h4>
                            <p>
                              Get resources for developing your skills and
                              knowledge to kickstart your career.
                            </p>
                          </div>
                          <div
                            className="p-4 mb-5  bg-white  py-5"
                            style={{
                              backgroundColor: "#FFFFFF",
                              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.25)",
                              borderRadius: "13px",
                            }}
                          >
                            <div>
                              <img
                                src={facility6}
                                style={{ width: "15%" }}
                                alt=""
                              />
                            </div>
                            <h4 className="mt-4">Performance Award </h4>
                            <p>
                              Get awarded for better performance every 6 months
                              and be recognized for your work.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <h1 className="text-end pt-5 fw-bold">Your Life At PMT</h1>
                    <div className="text-end pb-2 mt-4">
                      <hr
                        style={{ marginLeft: "auto" }}
                        className=" lineStyle "
                      />
                    </div>
                    <p className="mt-3">
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                      Richard McClintock, a Latin professor at Hampden-Sydney
                      College in Virginia, looked up one of the more obscure
                      Latin words, consectetur, from a Lorem Ipsum passage, and
                      going through the cites of the word in classical
                      literature, discovered the undoubtable source. Lorem Ipsum
                      comes from sections 1.10.32 and 1.10.33 of "de Finibus
                      Bonorum et Malorum" (The Extremes of Good and Evil) by
                      Cicero, written in 45 BC. This book is a treatise on the
                      theory of ethics, very popular during the Renaissance. The
                      first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                      comes from a line in section 1.10.32.
                    </p>
                    <div>
                      <button
                        className="py-2 px-5 mt-3 "
                        style={{
                          backgroundImage:
                            "linear-gradient(226.1deg, rgba(7, 96, 203, 0.94) 20.03%, rgba(7, 38, 203, 0.5076) 96.59%)",
                          color: "white",
                          border: "none",

                          borderRadius: "20px",
                        }}
                      >
                        Learn More
                      </button>
                    </div>
                    <div className="text-center my-5">
                      <img
                        src={Jot}
                        className="w-75"
                        style={{ borderRadius: "20px" }}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container py-5 mt-5">
              <div
                className="container py-5  bg-white"
                style={{
                  boxShadow: "0px 4px 4px 2px rgba(0, 0, 0, 0.25)",
                  borderRadius: "13px",
                }}
              >
                <div className="container  px-lg-5 px-lg-5 px-1">
                  <div>
                    <div className="d-flex justify-content-between">
                      <div>
                        <h4>Job Openings</h4>
                      </div>
                      <div>
                        <p>15 Available Jobs</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    {" "}
                    <div className="my-3 row">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control ps-4  "
                          placeholder="Search job here..."
                          style={{
                            backgroundColor: "rgba(217, 217, 217, 0.46)",
                            height: "130%",
                          }}
                        />
                      </div>
                    </div>
                    <div className="mt-5">
                      <div className="container px-4">
                        <div className="row gx-5">
                          <div className="col-sm-4">
                            <select
                              className="form-select form-select-lg mb-3 "
                              aria-label=".form-select-lg example"
                              style={{
                                backgroundColor: "rgba(217, 217, 217, 0.46)",
                                height: "80%",
                                textAlign: "center",
                              }}
                            >
                              <option selected>Job Location</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>
                          <div className="col-sm-4">
                            <select
                              className="form-select form-select-lg mb-3 "
                              aria-label=".form-select-lg example"
                              style={{
                                backgroundColor: "rgba(217, 217, 217, 0.46)",
                                height: "80%",
                                textAlign: "center",
                              }}
                            >
                              <option selected>Position</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>
                          <div className="col-sm-4">
                            <select
                              className="form-select form-select-lg mb-3 "
                              aria-label=".form-select-lg example"
                              style={{
                                backgroundColor: "rgba(217, 217, 217, 0.46)",
                                height: "80%",
                                textAlign: "center",
                              }}
                            >
                              <option selected>Work Type</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container mt-5">
              <div className="container py-5">
                <div className="row g-5 ">
                  <div className="col-sm-4 ">
                    <div
                      className="p-3  bg-white ps-5 py-5"
                      style={{
                        backgroundColor: "#FFFFFF",
                        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.25)",
                        borderRadius: "8px",
                      }}
                    >
                      <h3>Web Developer</h3>
                      <p className="mt-2">Full Time or Contract </p>
                      <HashLink to="/applyNow#apply_page">
                        <div className=" mt-5">
                          <button
                            className=" w-50 fw-normal text-white border-0 py-2"
                            style={{
                              background:
                                "linear-gradient(266.9deg, #0038FF -2.87%, rgba(0, 102, 255, 0.67) 104.21%)",
                              borderRadius: "22px",
                            }}
                          >
                            Apply Now
                          </button>
                        </div>
                      </HashLink>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div
                      className="p-3  bg-white ps-5 py-5"
                      style={{
                        backgroundColor: "#FFFFFF",
                        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.25)",
                        borderRadius: "8px",
                      }}
                    >
                      <h3>Graphic Designer</h3>
                      <p className="mt-2">Full Time or Contract </p>
                      <div className=" mt-5">
                        <button
                          className=" w-50 fw-normal text-white border-0 py-2"
                          style={{
                            background:
                              "linear-gradient(266.9deg, #0038FF -2.87%, rgba(0, 102, 255, 0.67) 104.21%)",
                            borderRadius: "22px",
                          }}
                        >
                          Apply Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div
                      className="p-3  bg-white ps-5 py-5"
                      style={{
                        backgroundColor: "#FFFFFF",
                        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.25)",
                        borderRadius: "8px",
                      }}
                    >
                      <h3>Network Admin</h3>
                      <p className="mt-2">Full Time or Contract </p>
                      <div className=" mt-5">
                        <button
                          className=" w-50 fw-normal text-white border-0 py-2"
                          style={{
                            background:
                              "linear-gradient(266.9deg, #0038FF -2.87%, rgba(0, 102, 255, 0.67) 104.21%)",
                            borderRadius: "22px",
                          }}
                        >
                          Apply Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div
                      className="p-3  bg-white ps-5 py-5"
                      style={{
                        backgroundColor: "#FFFFFF",
                        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.25)",
                        borderRadius: "8px",
                      }}
                    >
                      <h3>UI/UX Designer</h3>
                      <p className="mt-2">Full Time or Contract </p>
                      <div className=" mt-5">
                        <button
                          className=" w-50 fw-normal text-white border-0 py-2"
                          style={{
                            background:
                              "linear-gradient(266.9deg, #0038FF -2.87%, rgba(0, 102, 255, 0.67) 104.21%)",
                            borderRadius: "22px",
                          }}
                        >
                          Apply Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div
                      className="p-3  bg-white ps-5 py-5"
                      style={{
                        backgroundColor: "#FFFFFF",
                        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.25)",
                        borderRadius: "8px",
                      }}
                    >
                      <h3>Graphic Designer</h3>
                      <p className="mt-2">Full Time or Contract </p>
                      <div className=" mt-5">
                        <button
                          className=" w-50 fw-normal text-white border-0 py-2"
                          style={{
                            background:
                              "linear-gradient(266.9deg, #0038FF -2.87%, rgba(0, 102, 255, 0.67) 104.21%)",
                            borderRadius: "22px",
                          }}
                        >
                          Apply Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div
                      className="p-3  bg-white ps-5 py-5"
                      style={{
                        backgroundColor: "#FFFFFF",
                        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.25)",
                        borderRadius: "8px",
                      }}
                    >
                      <h3>Network Admin</h3>
                      <p className="mt-2">Full Time or Contract </p>
                      <div className=" mt-5">
                        <button
                          className=" w-50 fw-normal text-white border-0 py-2"
                          style={{
                            background:
                              "linear-gradient(266.9deg, #0038FF -2.87%, rgba(0, 102, 255, 0.67) 104.21%)",
                            borderRadius: "22px",
                          }}
                        >
                          Apply Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-5 pb-5">
              <button className="serviceButton">View All Jobs</button>
            </div>
            <div className="py-5">
              <h1 className="text-center pt-5 fw-bold">
                Learn Our Recruitment{" "}
                <span className="text-primary">Process</span>
              </h1>
              <div className="text-center pb-2 mt-4">
                <hr style={{ margin: "auto" }} className=" lineStyle " />
              </div>

              <div className="container py-5 mt-5">
                <div className="container ">
                  <div className="row g-5">
                    <div className="col-sm-3">
                      <div
                        className="p-3  bg-white ps-3 py-5"
                        style={{
                          backgroundColor: "#FFFFFF",
                          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.25)",
                          borderRadius: "8px",
                        }}
                      >
                        <div>
                          <img src={recruitmentCv} className="w-25" alt="" />
                        </div>
                        <h4 className="mt-4">CV Submission </h4>
                        <p>
                          Submit your CV or resume through our online portal if
                          you meet our recquirements.
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div
                        className="p-3  bg-white ps-3 py-5"
                        style={{
                          backgroundColor: "#FFFFFF",
                          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.25)",
                          borderRadius: "8px",
                        }}
                      >
                        <div>
                          <img src={recruitmentPhone} className="w-25" alt="" />
                        </div>
                        <h4 className="mt-4">Phone Screening </h4>
                        <p>
                          After Looking at your CV you will be invited for a
                          telephone interview at a time of your choosing
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div
                        className="p-3  bg-white ps-3 py-5"
                        style={{
                          backgroundColor: "#FFFFFF",
                          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.25)",
                          borderRadius: "8px",
                        }}
                      >
                        <div>
                          <img src={recruitmentSkill} className="w-25" alt="" />
                        </div>
                        <h4 className="mt-4">Skill Assessment </h4>
                        <p>
                          You will be invited at our head office to take a skill
                          and knowledge assessment.
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div
                        className="p-3  bg-white ps-3 py-5"
                        style={{
                          backgroundColor: "#FFFFFF",
                          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.25)",
                          borderRadius: "8px",
                        }}
                      >
                        <div>
                          <img
                            src={recruitmentInterview}
                            className="w-25"
                            alt=""
                          />
                        </div>
                        <h4 className="mt-4">Final Interview </h4>
                        <p>
                          If you can pass all the stages we will invite you for
                          a final interview with our CEO and HR executive.
                        </p>
                      </div>
                    </div>
                  </div>
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

export default CareerPage;
