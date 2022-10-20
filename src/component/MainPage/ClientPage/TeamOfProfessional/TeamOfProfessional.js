import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import {
  square1,
  square2,
  square3,
  square4,
} from "../../../Entryfile/ImagePath";
const TeamOfProfessional = () => {
  return (
    <div className="mt-5 py-5 container">
      <div className="text-center">
        <h6 className="text-primary">MEET OUR TEAM</h6>
        <h1 className="fw-bold">Team of Professionals</h1>
      </div>
      <div className="text-center">
        <hr style={{ margin: "auto" }} className=" lineStyle " />
      </div>
      <p className="text-center my-5 pb-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </p>
      <div className="container px-4">
        <div className="row gx-5 gy-5">
          <div className="col-sm-3">
            <div className=" ExpertboxBackgroud ">
              <div className="p-2 Expertbox text-center ">
                <h4 className="my-4">
                  <img src={square1} className="w-50 rounded-circle" alt="" />
                </h4>
                <h6>Jack Matthews</h6>
                <p>Senior developer</p>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className=" ExpertboxBackgroud ">
              <div className="p-2 Expertbox text-center ">
                <h4 className="my-4">
                  <img src={square2} className="w-50 rounded-circle" alt="" />
                </h4>
                <h6>Sofia Gallagher</h6>
                <p>Graphic Designer</p>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className=" ExpertboxBackgroud ">
              <div className="p-2 Expertbox text-center ">
                <h4 className="my-4">
                  <img src={square3} className="w-50 rounded-circle" alt="" />
                </h4>
                <h6>Alonso Nieves</h6>
                <p>Web Designer</p>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className=" ExpertboxBackgroud ">
              <div className="p-2 Expertbox text-center ">
                <h4 className="my-4">
                  <img src={square4} className="w-50 rounded-circle" alt="" />
                </h4>
                <h6>Martha John</h6>
                <p>Web Designer</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-3">
        <HashLink to={"/teamMember#teamPage"}>
          <button className="serviceButton">View Full Team</button>
        </HashLink>
      </div>
    </div>
  );
};

export default TeamOfProfessional;
