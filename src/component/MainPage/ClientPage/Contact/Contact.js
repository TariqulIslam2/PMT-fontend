import React from "react";
import Navbar from "./../../../initialPage/navbar/Navbar";
import { Link } from "react-router-dom";
import Footer from "./../../../initialPage/Footer/Footer";
import "./Contact.css";
import {
  contactImage,
  call,
  fb,
  linkedin,
  mail,
  twitter,
  locationIcon,
} from "../../../Entryfile/ImagePath";
const Contact = () => {
  return (
    <div id="contact_page">
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
                  Contact us
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <div>
        <img
          src={contactImage}
          className="w-100"
          style={{ height: "60vh" }}
          alt=""
        />
      </div>
      <div
        style={{ marginTop: "-300px" }}
        className="container  shadow rounded mb-5"
      >
        <div className="container mb-5 pb-5 ">
          <h1 className="fw-bold">Get In Touch</h1>
          <p>
            ProjMan Technology is one of the Quality holder IT firm in
            Bangladesh.
          </p>
        </div>
        <div className="row">
          <div className="col-sm-8 bg-white px-5 py-5">
            <div className="container">
              <h4 className="fw-bold mt-3">Send us a Message</h4>
              <div>
                <div className="row mt-4">
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <label
                        for="exampleFormControlInput1"
                        className="form-label"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        className="form-control bg-light text-black"
                        id="exampleFormControlInput1"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    {" "}
                    <div className="mb-3">
                      <label
                        for="exampleFormControlInput1"
                        className="form-label "
                      >
                        Your E-mail
                      </label>
                      <input
                        type="email"
                        className="form-control bg-light text-black"
                        id="exampleFormControlInput1"
                      />
                    </div>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <label
                        for="exampleFormControlInput1"
                        className="form-label"
                      >
                        Phone no
                      </label>
                      <input
                        type="text"
                        className="form-control bg-light text-black"
                        id="exampleFormControlInput1"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    {" "}
                    <div className="mb-3">
                      <label
                        for="exampleFormControlInput1"
                        className="form-label "
                      >
                        Company
                      </label>
                      <input
                        type="email"
                        className="form-control bg-light text-black"
                        id="exampleFormControlInput1"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mb-3">
                    <label
                      for="exampleFormControlTextarea1"
                      className="form-label"
                    >
                      Message
                    </label>
                    <textarea
                      className="form-control bg-light text-black"
                      id="exampleFormControlTextarea1"
                      rows="4"
                    ></textarea>
                  </div>
                </div>
                <div>
                  <button
                    className="py-2 "
                    style={{
                      backgroundImage:
                        "linear-gradient(226.1deg, rgba(7, 96, 203, 0.94) 20.03%, rgba(7, 38, 203, 0.5076) 96.59%)",
                      color: "white",
                      border: "none",
                      width: "100%",
                      borderRadius: "20px",
                    }}
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-sm-4 px-5 py-5"
            style={{
              backgroundImage:
                "linear-gradient(226.1deg, rgba(7, 96, 203, 0.94) 20.03%, rgba(7, 38, 203, 0.5076) 96.59%)",
              color: "white",
            }}
          >
            <h4 className="mt-5">Contact Information</h4>
            <p className="fw-light">Get the best solution from PMT</p>
            <div className="mt-5">
              <div className="row">
                <div className="col-sm-2 mt-2 ">
                  <img src={locationIcon} className="contactIcon" alt="" />
                </div>
                <div className="col-sm-10">
                  <p className="fw-light">
                    Homested Gulshan Link Tower, Ta 99 Middle Badda,Dhaka 1212,
                    Bangladesh
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-2 ">
                  <img src={call} className="contactIcon" alt="" />
                </div>
                <div className="col-sm-10">
                  <p className="fw-light">01886903905</p>
                </div>
              </div>
              <div className="row mt-1">
                <div className="col-sm-2 ">
                  <img src={mail} className="contactIcon" alt="" />
                </div>
                <div className="col-sm-10">
                  <p className="fw-light">info@projmantech.com</p>
                </div>
              </div>
            </div>
            <div className="mt-5 pt-3 mb-5 text-center">
              <span className="m-2">
                <img src={fb} className="contactSocialIcon" alt="" />
              </span>
              <span className="m-2">
                <img src={linkedin} className="contactSocialIcon" alt="" />
              </span>
              <span className="m-2">
                <img src={twitter} className="contactSocialIcon" alt="" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Contact;
