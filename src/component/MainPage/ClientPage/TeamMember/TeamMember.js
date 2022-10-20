import React from "react";
import Footer from "../../../initialPage/Footer/Footer";
import Navbar from "../../../initialPage/navbar/Navbar";
import { Link } from "react-router-dom";
import {
  AboutPic,
  square1,
  square2,
  square3,
  square4,
  adminLinkedin,
  adminFb,
  admintwitter,
  adminInstragram,
} from "../../../Entryfile/ImagePath";
import "./TeamMember.css";
const TeamMember = () => {
  return (
    <div id="teamPage">
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
                  Team
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
          backgroundImage: ` linear-gradient(221.64deg, rgba(0, 0, 0, 0.68) 100%, rgba(0, 0, 0, 0.68) 100%),url("${AboutPic}")`,
          //   backgroundImage: `url("${AboutPic}")`,
          opacity: "0.7",
        }}
        className="mb-5"
      >
        <div className="pt-5">
          <h4 className="text-white text-center pt-5">Meet with full team</h4>
          <h1 className="text-white text-center">Team of Professionals</h1>
          <div className="text-center pb-2">
            <hr style={{ margin: "auto" }} className=" lineStyle text-white " />
          </div>
        </div>
      </div>

      <div className="mt-5 pt-5">
        <div className="container px-4">
          <div className="row gx-5 gy-5">
            <div className="col-sm-3">
              <div className=" TeamboxBackgroud ">
                <div className="p-2 Teambox text-center ">
                  <h4 className="my-4">
                    <img src={square1} className="w-50 rounded-circle" alt="" />
                  </h4>
                  <h6>Jack Matthews</h6>
                  <p>Senior developer</p>
                  <div className="pb-5 pt-3">
                    <span>
                      <img
                        src={adminFb}
                        className="me-2"
                        style={{ width: "24px" }}
                        alt=""
                      />
                    </span>
                    <span>
                      <img
                        src={adminLinkedin}
                        className="me-2"
                        style={{ width: "20px" }}
                        alt=""
                      />
                    </span>
                    <span>
                      <img
                        src={admintwitter}
                        className="me-2"
                        style={{ width: "24px" }}
                        alt=""
                      />
                    </span>
                    <span>
                      <img
                        src={adminInstragram}
                        className="me-2"
                        style={{ width: "20px" }}
                        alt=""
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className=" TeamboxBackgroud ">
                <div className="p-2 Teambox text-center ">
                  <h4 className="my-4">
                    <img src={square2} className="w-50 rounded-circle" alt="" />
                  </h4>
                  <h6>Sofia Gallagher</h6>
                  <p>Graphic Designer</p>
                  <div className="pb-5 pt-3">
                    <span>
                      <img
                        src={adminFb}
                        className="me-2"
                        style={{ width: "24px" }}
                        alt=""
                      />
                    </span>
                    <span>
                      <img
                        src={adminLinkedin}
                        className="me-2"
                        style={{ width: "20px" }}
                        alt=""
                      />
                    </span>
                    <span>
                      <img
                        src={admintwitter}
                        className="me-2"
                        style={{ width: "24px" }}
                        alt=""
                      />
                    </span>
                    <span>
                      <img
                        src={adminInstragram}
                        className="me-2"
                        style={{ width: "20px" }}
                        alt=""
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className=" TeamboxBackgroud ">
                <div className="p-2 Teambox text-center ">
                  <h4 className="my-4">
                    <img src={square3} className="w-50 rounded-circle" alt="" />
                  </h4>
                  <h6>Alonso Nieves</h6>
                  <p>Web Designer</p>
                  <div className="pb-5 pt-3">
                    <span>
                      <img
                        src={adminFb}
                        className="me-2"
                        style={{ width: "24px" }}
                        alt=""
                      />
                    </span>
                    <span>
                      <img
                        src={adminLinkedin}
                        className="me-2"
                        style={{ width: "20px" }}
                        alt=""
                      />
                    </span>
                    <span>
                      <img
                        src={admintwitter}
                        className="me-2"
                        style={{ width: "24px" }}
                        alt=""
                      />
                    </span>
                    <span>
                      <img
                        src={adminInstragram}
                        className="me-2"
                        style={{ width: "20px" }}
                        alt=""
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className=" TeamboxBackgroud ">
                <div className="p-2 Teambox text-center ">
                  <h4 className="my-4">
                    <img src={square4} className="w-50 rounded-circle" alt="" />
                  </h4>
                  <h6>Martha John</h6>
                  <p>Web Designer</p>
                  <div className="pb-5 pt-3">
                    <span>
                      <img
                        src={adminFb}
                        className="me-2"
                        style={{ width: "24px" }}
                        alt=""
                      />
                    </span>
                    <span>
                      <img
                        src={adminLinkedin}
                        className="me-2"
                        style={{ width: "20px" }}
                        alt=""
                      />
                    </span>
                    <span>
                      <img
                        src={admintwitter}
                        className="me-2"
                        style={{ width: "24px" }}
                        alt=""
                      />
                    </span>
                    <span>
                      <img
                        src={adminInstragram}
                        className="me-2"
                        style={{ width: "20px" }}
                        alt=""
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className=" TeamboxBackgroud ">
                <div className="p-2 Teambox text-center ">
                  <h4 className="my-4">
                    <img src={square4} className="w-50 rounded-circle" alt="" />
                  </h4>
                  <h6>Martha John</h6>
                  <p>Web Designer</p>
                  <div className="pb-5 pt-3">
                    <span>
                      <img
                        src={adminFb}
                        className="me-2"
                        style={{ width: "24px" }}
                        alt=""
                      />
                    </span>
                    <span>
                      <img
                        src={adminLinkedin}
                        className="me-2"
                        style={{ width: "20px" }}
                        alt=""
                      />
                    </span>
                    <span>
                      <img
                        src={admintwitter}
                        className="me-2"
                        style={{ width: "24px" }}
                        alt=""
                      />
                    </span>
                    <span>
                      <img
                        src={adminInstragram}
                        className="me-2"
                        style={{ width: "20px" }}
                        alt=""
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className=" TeamboxBackgroud ">
                <div className="p-2 Teambox text-center ">
                  <h4 className="my-4">
                    <img src={square4} className="w-50 rounded-circle" alt="" />
                  </h4>
                  <h6>Martha John</h6>
                  <p>Web Designer</p>
                  <div className="pb-5 pt-3">
                    <span>
                      <img
                        src={adminFb}
                        className="me-2"
                        style={{ width: "24px" }}
                        alt=""
                      />
                    </span>
                    <span>
                      <img
                        src={adminLinkedin}
                        className="me-2"
                        style={{ width: "20px" }}
                        alt=""
                      />
                    </span>
                    <span>
                      <img
                        src={admintwitter}
                        className="me-2"
                        style={{ width: "24px" }}
                        alt=""
                      />
                    </span>
                    <span>
                      <img
                        src={adminInstragram}
                        className="me-2"
                        style={{ width: "20px" }}
                        alt=""
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className=" TeamboxBackgroud ">
                <div className="p-2 Teambox text-center ">
                  <h4 className="my-4">
                    <img src={square4} className="w-50 rounded-circle" alt="" />
                  </h4>
                  <h6>Martha John</h6>
                  <p>Web Designer</p>
                  <div className="pb-5 pt-3">
                    <span>
                      <img
                        src={adminFb}
                        className="me-2"
                        style={{ width: "24px" }}
                        alt=""
                      />
                    </span>
                    <span>
                      <img
                        src={adminLinkedin}
                        className="me-2"
                        style={{ width: "20px" }}
                        alt=""
                      />
                    </span>
                    <span>
                      <img
                        src={admintwitter}
                        className="me-2"
                        style={{ width: "24px" }}
                        alt=""
                      />
                    </span>
                    <span>
                      <img
                        src={adminInstragram}
                        className="me-2"
                        style={{ width: "20px" }}
                        alt=""
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className=" TeamboxBackgroud ">
                <div className="p-2 Teambox text-center ">
                  <h4 className="my-4">
                    <img src={square4} className="w-50 rounded-circle" alt="" />
                  </h4>
                  <h6>Martha John</h6>
                  <p>Web Designer</p>
                  <div className="pb-5 pt-3">
                    <span>
                      <img
                        src={adminFb}
                        className="me-2"
                        style={{ width: "24px" }}
                        alt=""
                      />
                    </span>
                    <span>
                      <img
                        src={adminLinkedin}
                        className="me-2"
                        style={{ width: "20px" }}
                        alt=""
                      />
                    </span>
                    <span>
                      <img
                        src={admintwitter}
                        className="me-2"
                        style={{ width: "24px" }}
                        alt=""
                      />
                    </span>
                    <span>
                      <img
                        src={adminInstragram}
                        className="me-2"
                        style={{ width: "20px" }}
                        alt=""
                      />
                    </span>
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

export default TeamMember;
