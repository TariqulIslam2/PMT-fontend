import React from "react";
import { homeContactImage, blueTik } from "../../../Entryfile/ImagePath";

import { HashLink } from "react-router-hash-link";
const HomeContact = () => {
  return (
    <div className="mb-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 pt-5 text-center">
            <img
              src={homeContactImage}
              className="aboutImageSize rounded-3"
              alt="AboutPic"
            />
          </div>
          <div className="col-sm-6  py-5">
            <h2>
              Where creativity meets technology. Open up your business to new
              possibilities.
            </h2>
            <p className="py-2 ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodoconsequat.
            </p>
            <h6>
              <img
                src={blueTik}
                style={{ width: "3%" }}
                alt="blueTik"
                className="me-2"
              />
              Effective recruitment methodology, build successful teams
            </h6>
            <h6>
              <img
                src={blueTik}
                style={{ width: "3%" }}
                alt="blueTik"
                className="me-2"
              />
              Strategic workforce planning, Office & Administrative
            </h6>
            <h6>
              <img
                src={blueTik}
                style={{ width: "3%" }}
                alt="blueTik"
                className="me-2"
              />
              Relevant Business Knowledge, Remote Support
            </h6>

            <div className=" mt-4">
              <HashLink to={"/contact#contact_page"}>
                {" "}
                <button className="serviceButton">Contact us</button>
              </HashLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContact;
