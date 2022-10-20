import React from "react";
import Navbar from "./../../../initialPage/navbar/Navbar";
import {
  whyChooseUs,
  aboutFirstImg,
  startProject,
} from "../../../Entryfile/ImagePath";
import Footer from "../../../initialPage/Footer/Footer";
import { Link } from "react-router-dom";
const AboutPage = () => {
  return (
    <div id="about_page">
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
                  About
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-sm-6 mt-5 ">
              <h3 className="fw-bold">About us</h3>
              <hr style={{ width: "20%" }} />
              <p className="pt-3">
                {" "}
                ProjMan Technology is one of the Quality holder IT firm in
                Bangladesh. ProjMan Technology is one of the Quality holder IT
                firm in Bangladesh. ProjMan Technology was founded in 2017. We
                are a software solution provider and IT consulting company.Our
                team consists of professionally-managed web designers, web
                developers, mobile app developers,network engineers and QA
                testers.
              </p>
            </div>
            <div className="col-sm-6">
              <img src={aboutFirstImg} className="w-100" alt="" />
            </div>
          </div>
          <div className="mt-5">
            <h3 className="fw-bold">Mission</h3>
            <hr style={{ width: "10%" }} />
            <p>
              First of all, we are here to make things easy for you which are
              based on technology. To contribute in overall development of our
              country by providing available IT services for the people we have
              gathered many qualified fields in our site. Our company develops
              distinctive web solutions which makes your work more effective and
              effectiveness for your business and thus to your end users. Our
              Company Provide cost effect high quality innovative solution &
              services, powered by state of art technologies, anchored on our
              basic principles of: a. Explore b. Innovate c. Improve
            </p>
          </div>
          <div className="mt-5">
            <h3 className="fw-bold">Vision</h3>
            <hr style={{ width: "10%" }} />
            <p>
              Our vision is to fulfill all the demands of our clients by our
              experts on time. We have a dream which never gives us a space to
              escape from it and the dream is- To Make Bangladesh a world-class
              IT developed country. In near future we can see a better systemic
              IT related scopes next to our door. That’s why we are here for
              you. We know that dedication is one of the keys of success in
              every single work. We dream of driving foreign investment in IT
              industries in our country which will help grow our GDP.
            </p>
          </div>
          <div className="row mt-5 pt-5">
            <div className="col-sm-6 mt-5  ">
              <h3 className="fw-bold">Why choose us ?</h3>
              <hr style={{ width: "20%" }} />
              <p className="pt-3">
                {" "}
                ProjMan Technology works in several IT sectors with skilled
                expert workforce. We possess the experience and expertise to
                help web entrepreneurs reach their customers across the digital
                space. We believe that hard work and honesty can do many
                effective things and with a great team member we have started
                working on it and prepared a perfect workforce for you. Our
                young and experienced professionals are here to provide utmost
                return on your investment in shortest possible time with their
                talent and proficiency. You are welcome.
              </p>
            </div>
            <div className="col-sm-6 mt-5 text-center">
              <img
                src={whyChooseUs}
                style={{ borderRadius: "20px" }}
                className="w-75"
                alt=""
              />
            </div>
          </div>

          <div className="py-5">
            <div className="mt-5 pt-5 border rounded-3 shadow px-3">
              <div className="container">
                <div className="row">
                  <div className="col-sm-6 text-center pb-3">
                    <h4 className="mb-3 fw-bold text-start">
                      Want to start a project ?
                    </h4>
                    <img src={startProject} className="w-100" alt="" />
                  </div>
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

export default AboutPage;
