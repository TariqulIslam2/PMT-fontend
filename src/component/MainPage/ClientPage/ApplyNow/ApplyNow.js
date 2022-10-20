import React from "react";
import Navbar from "./../../../initialPage/navbar/Navbar";
import { Link } from "react-router-dom";
import Footer from "./../../../initialPage/Footer/Footer";
import { AboutPic } from "../../../Entryfile/ImagePath";
const ApplyNow = () => {
  return (
    <div id="apply_page">
      <Navbar></Navbar>
      <div>
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
                    Apply Now
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            height: "40vh",
            backgroundSize: "cover",
            backgroundImage: `url("${AboutPic}")`,
            opacity: "0.7",
          }}
          className=""
        >
          <div className="pt-5">
            <h4 className="text-white text-center pt-5">Apply to PMT</h4>
            <h1 className="text-white text-center">
              Apply as{" "}
              <span style={{ color: "rgba(255, 122, 0, 1)" }}>
                Web Developer
              </span>
            </h1>
            <div className="text-center pb-2">
              <hr
                style={{ margin: "auto" }}
                className=" lineStyle text-white "
              />
            </div>
          </div>
        </div>
        <div
          className="py-5"
          style={{ backgroundColor: "rgba(239, 239, 239, 0.62)" }}
        >
          <div className="container">
            <div className="row">
              <div
                className="col-sm-5  bg-white rounded"
                style={{
                  background: "#FFFDFD",
                  boxShadow: "0px 7px 18px -4px rgba(0, 0, 0, 0.25)",
                }}
              >
                <div className="p-3">
                  <h3
                    className="my-4 py-3 text-center text-white"
                    style={{
                      background:
                        "linear-gradient(265.1deg, #336AF5 31.08%, rgba(105, 89, 208, 0.83) 101.51%)",
                      borderRadius: "18px",
                    }}
                  >
                    Check Before Apply
                  </h3>
                  <div className="mt-5">
                    <h5 className="text-primary fw-bold ">Job Nature :</h5>
                    <h5 className="fw-bold">Full Time (9am - 5pm)</h5>
                  </div>
                  <div className="mt-5">
                    <h5 className="text-primary fw-bold ">Work Time :</h5>
                    <h5 className="fw-bold">5 days a week</h5>
                  </div>
                  <div className="mt-5">
                    <h5 className="text-primary fw-bold ">Position :</h5>
                    <h5 className="fw-bold">Web Developer (Node.js)</h5>
                  </div>
                  <div className="mt-5">
                    <h5 className="text-primary fw-bold ">Vacancy :</h5>
                    <h5 className="fw-bold">02</h5>
                  </div>
                  <div className="mt-5">
                    <h5 className="text-primary fw-bold ">Experience :</h5>
                    <h5 className="fw-bold">2-3 Years</h5>
                  </div>
                  <div className="mt-5">
                    <h5 className="text-primary fw-bold ">Job Location :</h5>
                    <h5 className="fw-bold">Mohakhali,Amtoli,Dhaka</h5>
                  </div>
                  <div className="mt-5">
                    <h5 className="text-primary fw-bold ">Salary Range :</h5>
                    <h5 className="fw-bold">Negotiable</h5>
                  </div>
                </div>
              </div>
              <div className="col-sm-7 ps-5">
                <h3 className="fw-bold">Requirements For This Position</h3>
                <div className="text-center pb-4">
                  <hr style={{}} className=" lineStyle text-white " />
                </div>
                <h5 className="fw-bold">Skills & Requirements :</h5>
                <div>
                  <p>
                    <span>-</span> Experience with Node.js, HTML5, and CSS3
                  </p>
                  <p>
                    <span>-</span> Experience with other backend languages such
                    as Go or Python is preferred
                  </p>
                  <p>
                    <span>-</span> Experience with Mongo, Redis, or any document
                    database is preferred
                  </p>
                  <p>
                    <span>-</span> Experience with Shopify would be an advantage
                  </p>
                  <p>
                    <span>-</span> Good command of written and spoken English
                    and demonstrate effective communication skills.
                  </p>
                </div>
                <h5 className="fw-bold mt-5">Life at PMT :</h5>
                <div>
                  <p>
                    <span>-</span> You will experience a steep learning curve
                    from working with the brightest minds in the chatbot
                    industry
                  </p>
                  <p>
                    <span>-</span> You will engage in the most advanced chatbot
                    solution design with the most ambitious brands and customers
                  </p>
                  <p>
                    <span>-</span> You will learn how to become an effective
                    team member in an ever-changing and fast-moving team
                    dynamics
                  </p>
                </div>
                <h5 className="fw-bold mt-5">Skills :</h5>
                <div>
                  <p>
                    <span>-</span> Node.js, Solution Design, Chatbot Backend,
                    HTML5, Design, Documentation, Shopify, Communication Skills
                  </p>
                </div>
                <h5 className="fw-bold mt-5">Educational Requirement :</h5>
                <div>
                  <p>
                    <span>-</span> BSC in Computer Science & Engineering
                  </p>
                </div>
                <h5 className="fw-bold mt-5">Others benefits :</h5>
                <div>
                  <p>
                    <span>-</span> Competitive benefits and bonuses
                  </p>
                  <p>
                    <span>-</span> Weekly two holidays
                  </p>
                  <p>
                    <span>-</span> Salary Review: Yearly
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="py-5 mt-5">
            <div
              className="py-4 text-center"
              style={{ background: "rgba(217, 217, 217, 0.47)" }}
            >
              <h4 className=" text-primary">Apply Instructions :</h4>
              <div className=" pb-4 mt-3">
                <hr
                  style={{ margin: "auto" }}
                  className=" lineStyle text-white "
                />
              </div>
              <p>
                Send your resume to:{" "}
                <span className="fw-bold">career@projmantech.com</span>
              </p>
              <p>
                Please add your salery expectation and details about skills in
                Node js and css3 in the email description
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ApplyNow;
