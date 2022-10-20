import React, { useEffect, useState } from "react";
import Navbar from "./../../../initialPage/navbar/Navbar";
import {
  dataStore,
  websiteDevelopment,
  traning,
  uiUx,
  softwareDevelopment,
  ecommmerce,
  consultancy,
  Advertising,
  startProject,
  apps,
} from "../../../Entryfile/ImagePath";
import Footer from "../../../initialPage/Footer/Footer";
import { Link } from "react-router-dom";
import "./ServicesPage.css";

const ServicesPage = () => {
  // const [services, setServices] = useState([]);
  // const [hasError, setHasError] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const getUsers = () => {
  //     setIsLoading(true);
  //     fetch(`http://localhost:4000/api/pmt/services/view`)
  //       .then((res) => {
  //         // You have to send it, as I have done below
  //         if (res.status >= 400) {
  //           throw new Error("Server responds with error!");
  //         }
  //         return res.json();
  //       })
  //       .then(
  //         (users) => {
  //           console.log(users.data);
  //           setServices(users.data);
  //           setIsLoading(false);
  //         },

  //         (err) => {
  //           const mute = err;
  //           setHasError(true);
  //           setIsLoading(true);
  //         }
  //       );
  //   };
  //   getUsers();
  // }, []);

  return (
    <div id="services_page">
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
                  Services
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <div className="container mt-5">
          <div className="text-center">
            <h6 className="pb-2">ON STOP SOLUTIONS</h6>
            <h2 className="pb-2">Services we serve to all over the world</h2>
          </div>
          <div className="text-center pb-2">
            <hr style={{ margin: "auto" }} className=" lineStyle " />
          </div>
          <p className="text-center pb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="container">
          <div className="mt-5 pt-4">
            <div className="container px-4">
              <div className="row gx-5 gy-5">
                <div className="col-sm-4">
                  <Link
                    to="/singleService"
                    className="text-decoration-none text-black"
                  >
                    <div className=" ServicePageBackgroud ">
                      <div className=" ServicePagebox text-center py-2">
                        <h5 className="py-3 ">Web Development</h5>
                        <p>Click for more</p>
                        <h4 className="my-4">
                          <img
                            src={websiteDevelopment}
                            className="servicePageImg w-75 rounded-3"
                            alt=""
                          />
                        </h4>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-sm-4">
                  <Link
                    to="/singleService"
                    className="text-decoration-none text-black"
                  >
                    <div className=" ServicePageBackgroud ">
                      <div className=" ServicePagebox text-center py-2">
                        <h5 className="py-3 ">Software Development</h5>
                        <p>Click for more</p>
                        <h4 className="my-4">
                          <img
                            src={softwareDevelopment}
                            className="servicePageImg w-75 rounded-3"
                            alt=""
                          />
                        </h4>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-sm-4">
                  <Link
                    to="/singleService"
                    className="text-decoration-none text-black"
                  >
                    <div className=" ServicePageBackgroud ">
                      <div className=" ServicePagebox text-center py-2">
                        <h5 className="py-3 ">Digital Marketing</h5>
                        <p>Click for more</p>
                        <h4 className="my-4">
                          <img
                            src="https://res.cloudinary.com/tariqtvsl/image/upload/v1654665623/ServiceImages/Digital_Advertising_dpzkkz.jpg"
                            className="servicePageImg w-75 rounded-3"
                            alt=""
                          />
                        </h4>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-sm-4">
                  <Link
                    to="/singleService"
                    className="text-decoration-none text-black"
                  >
                    <div className=" ServicePageBackgroud ">
                      <div className=" ServicePagebox text-center py-2">
                        <h5 className="py-3 ">E-COMMERCE</h5>
                        <p>Click for more</p>
                        <h4 className="my-4">
                          <img
                            src={ecommmerce}
                            className="servicePageImg w-75 rounded-3"
                            alt=""
                          />
                        </h4>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-sm-4">
                  <Link
                    to="/singleService"
                    className="text-decoration-none text-black"
                  >
                    <div className=" ServicePageBackgroud ">
                      <div className=" ServicePagebox text-center py-2">
                        <h5 className="py-3 ">Apps Development</h5>
                        <p>Click for more</p>
                        <h4 className="my-4">
                          <img
                            src={apps}
                            className="servicePageImg w-75 rounded-3"
                            alt=""
                          />
                        </h4>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-sm-4">
                  <Link
                    to="/singleService"
                    className="text-decoration-none text-black"
                  >
                    <div className=" ServicePageBackgroud ">
                      <div className=" ServicePagebox text-center py-2">
                        <h5 className="py-3 ">Data Center</h5>
                        <p>Click for more</p>
                        <h4 className="my-4">
                          <img
                            src={dataStore}
                            className="servicePageImg w-75 rounded-3"
                            alt=""
                          />
                        </h4>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-sm-4">
                  <Link
                    to="/singleService"
                    className="text-decoration-none text-black"
                  >
                    <div className=" ServicePageBackgroud ">
                      <div className=" ServicePagebox text-center py-2">
                        <h5 className="py-3 ">Consultancy</h5>
                        <p>Click for more</p>
                        <h4 className="my-4">
                          <img
                            src={consultancy}
                            className="servicePageImg w-75 rounded-3"
                            alt=""
                          />
                        </h4>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-sm-4">
                  <Link
                    to="/singleService"
                    className="text-decoration-none text-black"
                  >
                    <div className=" ServicePageBackgroud ">
                      <div className=" ServicePagebox text-center py-2">
                        <h5 className="py-3 ">Training</h5>
                        <p>Click for more</p>
                        <h4 className="my-4">
                          <img
                            src={traning}
                            className="servicePageImg w-75 rounded-3"
                            alt=""
                          />
                        </h4>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-sm-4">
                  <Link
                    to="/singleService"
                    className="text-decoration-none text-black"
                  >
                    <div className=" ServicePageBackgroud ">
                      <div className=" ServicePagebox text-center py-2">
                        <h5 className="py-3 ">UI/UX Design</h5>
                        <p>Click for more</p>
                        <h4 className="my-4">
                          <img
                            src={uiUx}
                            className="servicePageImg w-75 rounded-3"
                            alt=""
                          />
                        </h4>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container py-5">
          <div className="mt-5 pt-5 border rounded-3 shadow px-3">
            <div className="container">
              <div className="row">
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
                      <input
                        type="number"
                        className="form-control bg-light"
                        id="exampleFormControlInput1"
                        placeholder="phone no."
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
                <div className="col-sm-6 text-center pb-3">
                  <img src={startProject} className="w-100 rounded-3" alt="" />
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

export default ServicesPage;
