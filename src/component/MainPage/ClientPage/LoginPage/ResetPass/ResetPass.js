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
} from "../../../../Entryfile/ImagePath";
const ResetPass = () => {
  return (
    <div
      style={{ backgroundColor: "rgba(33, 14, 252, 0.03)", height: "100vh" }}
    >
      <div>
        <div className="container py-5 ">
          <div className="row  ">
            <div className="col-sm-3"></div>

            <div
              className="col-sm-6  py-5"
              style={{
                background: "#FFFFFF",
                boxShadow: " 0px 4px 35px 6px rgba(0, 0, 0, 0.25)",
                borderRadius: "8px",
              }}
            >
              <div className="container">
                {" "}
                <h3 className=" ">Reset Password</h3>
                <p>
                  Enter your phone, code and new password and confirm password.
                </p>
                <div className=" mt-5">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="text-black ps-3 form-control bg-light"
                      id="exampleFormControlInput1"
                      placeholder="Phone No."
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="text-black ps-3 form-control bg-light"
                      id="exampleFormControlInput1"
                      placeholder="Code."
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="text-black ps-3 form-control bg-light"
                      id="exampleFormControlInput1"
                      placeholder="New Password"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="text-black ps-3 form-control bg-light"
                      id="exampleFormControlInput1"
                      placeholder="Confirm Password"
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
                      Send Password Reset Link
                    </button>
                  </div>
                  <div className="text-center mt-4">
                    <Link to="/login" className="text-decoration-none">
                      {" "}
                      Back to Login
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3"></div>
          </div>
        </div>
        <div className="container  pt-5 loginfooter">
          <div className="d-flex justify-content-between">
            {" "}
            <div className="text-black">
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
              <a href="" className="me-3 text-decoration-none text-black">
                Terms and Conditions
              </a>
              <a href="" className="text-decoration-none text-black">
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

export default ResetPass;
