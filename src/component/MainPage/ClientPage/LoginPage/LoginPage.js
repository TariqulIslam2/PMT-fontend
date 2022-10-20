import React from "react";
import { Link } from "react-router-dom";
import {
  LoginImage,
  loginBackground,
  pmtLogoWhite,
  linkedinIcon,
  instagramIcon,
  twitterIcon,
  fbIcon,
} from "../../../Entryfile/ImagePath";
import "./LoginPage.css";
const LoginPage = () => {
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "100vh",
          backgroundSize: "cover",
          backgroundImage: ` linear-gradient(221.64deg, rgba(0, 0, 0, 0.9) 48.87%, rgba(0, 71, 255, 0.684) 100.78%),url("${loginBackground}")`,
        }}
      >
        <div className="pt-4 mb-4">
          <h3 className="text-white text-center">
            Welcome to <br /> Project Management Technology
          </h3>
        </div>
        <div className="container ">
          <div className="row">
            <div className="col-sm-2"></div>
            <div className="col-sm-4 p-0">
              <div className="position-relative">
                <img src={LoginImage} style={{ width: "100%" }} alt="" />
                <div className="position-absolute top-0 start-0">
                  {" "}
                  <div className="mt-3 ms-3">
                    <img src={pmtLogoWhite} style={{ width: "25%" }} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4 bg-white py-5">
              <h5 className="text-black text-center">Login to your account</h5>
              <div className="text-center pb-2 mt-4">
                <hr style={{ margin: "auto" }} className=" lineStyle " />
              </div>
              <div className="container mt-5">
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    className="text-black form-control bg-light"
                    id="exampleFormControlInput1"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    className="text-black form-control bg-light"
                    id="exampleFormControlInput1"
                  />
                </div>
                <div>
                  <button
                    className="py-2 px-5 mt-3 w-100"
                    style={{
                      backgroundImage:
                        "linear-gradient(226.1deg, rgba(7, 96, 203, 0.94) 20.03%, rgba(7, 38, 203, 0.5076) 96.59%)",
                      color: "white",
                      border: "none",

                      borderRadius: "20px",
                    }}
                  >
                    Login
                  </button>
                </div>
                <div className="text-center mt-4">
                  <Link to="/forgetPassword" className="text-decoration-none">
                    {" "}
                    Forgot Password ?
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-2"></div>
          </div>
        </div>
        <div className="container mt-3  loginfooter">
          <div className="d-flex justify-content-between">
            {" "}
            <div className="text-white">
              <p> © 2022 ProjmanTech. All rights reserved</p>
            </div>
            <div>
              <span className="me-2">
                <img
                  src={fbIcon}
                  style={{ width: "30px", height: "30px" }}
                  alt=""
                />
              </span>
              <span className="me-2">
                <img
                  src={twitterIcon}
                  style={{ width: "30px", height: "30px" }}
                  alt=""
                />
              </span>
              <span className="me-2">
                <img
                  src={linkedinIcon}
                  style={{ width: "30px", height: "30px" }}
                  alt=""
                />
              </span>
              <span className="me-2">
                <img
                  src={instagramIcon}
                  style={{ width: "30px", height: "30px" }}
                  alt=""
                />
              </span>
            </div>
            <div>
              <a href="" className="me-3 text-decoration-none text-white">
                Terms and Conditions
              </a>
              <a href="" className="text-decoration-none text-white">
                {" "}
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
