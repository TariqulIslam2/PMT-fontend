import React from "react";

import { HashLink } from "react-router-hash-link";
import {
  pmtLogoWhite,
  linkedinIcon,
  instagramIcon,
  twitterIcon,
  fbIcon,
  locationIcon,
  whatsappIcon,
  mail,
  call,
} from "../../Entryfile/ImagePath";
const Footer = () => {
  return (
    <div>
      <div
        style={{ backgroundColor: "rgba(0, 0, 0, 0.93)", color: "white" }}
        className="py-5"
      >
        <div className="container">
          <div className="row  gy-5">
            <div className="col-sm-4">
              <div className="p-3 text-white">
                <h4>About Us</h4>
                <hr className="w-50" />
                <div className="mt-4">
                  <img src={pmtLogoWhite} style={{ width: "40%" }} alt="" />
                </div>
                <p className="mt-4">
                  ProjMan Technology is one of the Quality holder IT firm in
                  Bangladesh. ProjMan Technology is one of the Quality holder IT
                  firm in Bangladesh.
                </p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="p-3 text-white">
                <h4>Contact Info</h4>
                <hr className="w-50" />
                <div className="row">
                  <div className="col-sm-12">
                    <p>
                      {" "}
                      <img
                        src={call}
                        style={{ width: "6%", marginTop: "-6px" }}
                        alt=""
                      />{" "}
                      <span className="ms-2"> 01886903905</span>
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <p>
                      {" "}
                      <img
                        src={mail}
                        style={{ width: "6%", marginTop: "-6px" }}
                        alt=""
                      />{" "}
                      <span className="ms-2"> info@projmantech.com</span>
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <p>
                      {" "}
                      <img
                        src={locationIcon}
                        style={{ width: "6%", marginTop: "-6px" }}
                        alt=""
                      />{" "}
                      <span className="ms-2">
                        {" "}
                        Homested Gulshan Link Tower, Ta 99 Middle Badda, Dhaka
                        1212, Bangladesh
                      </span>
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <p>
                      {" "}
                      <img
                        src={whatsappIcon}
                        style={{ width: "10%", marginTop: "-6px" }}
                        alt=""
                      />{" "}
                      <span className="ms-2"> 01886903905</span>
                    </p>
                  </div>
                </div>
                <div className="mt-5">
                  <span className="m-2">
                    <img src={fbIcon} style={{ width: "10%" }} alt="" />
                  </span>
                  <span className="m-2">
                    <img src={twitterIcon} style={{ width: "10%" }} alt="" />
                  </span>
                  <span className="m-2">
                    <img src={linkedinIcon} style={{ width: "10%" }} alt="" />
                  </span>
                  <span className="m-2">
                    <img src={instagramIcon} style={{ width: "10%" }} alt="" />
                  </span>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="p-3 text-white">
                <h4>Quick Links</h4>
                <hr className="w-50" />
                <p>
                  <a href="" className="text-decoration-none text-white">
                    Privacy Policy
                  </a>
                </p>
                <p>
                  <HashLink
                    to={"/about#about_page"}
                    className="text-decoration-none text-white"
                  >
                    {" "}
                    About Us
                  </HashLink>
                </p>
                <p>
                  <HashLink
                    to={"/about#about_page"}
                    className="text-decoration-none text-white"
                  >
                    Company History
                  </HashLink>
                </p>
                <p>
                  <HashLink
                    to={"/career#career_page"}
                    className="text-decoration-none text-white"
                  >
                    Career
                  </HashLink>
                </p>
                <p>
                  <HashLink
                    to={"/services#services_page"}
                    className="text-decoration-none text-white"
                  >
                    Our Services
                  </HashLink>
                </p>
                <p>
                  <HashLink
                    to={"/contact#contact_page"}
                    className="text-decoration-none text-white"
                  >
                    Contact Us
                  </HashLink>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="py-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.88)", color: "white" }}
      >
        <div className="container">
          <div className="d-flex justify-content-between ">
            <div>Copyright © 2022 PMT. All Rights Reserved.</div>
            <div>
              <a href="Privacy" className="text-decoration-none text-white">
                Privacy Policy
              </a>{" "}
              |{" "}
              <a href="FAQ" className="text-decoration-none text-white">
                FAQ
              </a>{" "}
              |{" "}
              <a href="Contact" className="text-decoration-none text-white">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
