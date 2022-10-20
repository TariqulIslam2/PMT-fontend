import React from "react";
import Navbar from "./../../../initialPage/navbar/Navbar";
import { Link } from "react-router-dom";
import Footer from "./../../../initialPage/Footer/Footer";
import { AboutPic, blog1, blog2, blog3 } from "../../../Entryfile/ImagePath";
import Pagination from "../../../initialPage/Pagination/Pagination";
import { useForm } from "react-hook-form";
import { axios } from "axios";
let PageSize = 10;
const OurBlogs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    data.m_phone = parseInt(data.m_phone);
    console.log(data);

    axios
      .post("http://192.168.3.232:8000/api/users/createMessage", data)
      .then(function (response) {
        console.log(response.data.message);
        reset();
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
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
                  Blogs
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
          opacity: "0.7",
        }}
        className="mb-5"
      >
        <div className="pt-5">
          <h4 className="text-white text-center pt-5">View our Blog</h4>
          <h1 className="text-white text-center">Our Latest Blog</h1>
          <div className="text-center pb-2">
            <hr style={{ margin: "auto" }} className=" lineStyle text-white " />
          </div>
        </div>
      </div>

      <div className="container px-4 mt-5 mb-5">
        <div className="container px-4">
          <div className="row gx-5 gy-5">
            <div className="col-sm-4">
              <div className="p-3 border bg-white shadow rounded-3">
                <div>
                  <span className="bg-primary text-white px-3 py-1 rounded-3">
                    May 25, 2022
                  </span>
                </div>
                <h5 className="mt-3">
                  The goal isn’t to build a website. The goal is to build your
                  business.
                </h5>
                <h6 className="text-black fw-normal mt-2">By Admin</h6>
                <div className="mt-3">
                  <img src={blog1} className="w-100" alt="" />
                </div>
                <p className="mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  sed diam sapien. Sed semper urna ......
                </p>
                <div>
                  <a href="" className="text-decoration-none">
                    Read Article &#10095;
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="p-3 border bg-white shadow rounded-3">
                <div>
                  <span className="bg-primary text-white px-3 py-1 rounded-3">
                    May 25, 2022
                  </span>
                </div>
                <h5 className="mt-3">
                  Digital thinking. We build intelligent and beautiful websites.
                </h5>
                <h6 className="text-black fw-normal mt-2">By Admin</h6>
                <div className="mt-3">
                  <img src={blog2} className="w-100" alt="" />
                </div>
                <p className="mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  sed diam sapien. Sed semper urna ......
                </p>
                <div>
                  <a href="" className="text-decoration-none">
                    Read Article &#10095;
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="p-3 border bg-white shadow rounded-3">
                <div>
                  <span className="bg-primary text-white px-3 py-1 rounded-3">
                    May 25, 2022
                  </span>
                </div>
                <h5 className="mt-3">
                  We make up the news, so you don’t have to!
                </h5>
                <h6 className="text-black fw-normal mt-2">By Admin</h6>
                <div className="mt-3">
                  <img src={blog3} className="w-100" alt="" />
                </div>
                <p className="mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  sed diam sapien. Sed semper urna ......
                </p>
                <div>
                  <a href="" className="text-decoration-none">
                    Read Article &#10095;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-4 mt-5 mb-5">
        <div className="container px-4">
          <div className="row gx-5 gy-5">
            <div className="col-sm-4">
              <div className="p-3 border bg-white shadow rounded-3">
                <div>
                  <span className="bg-primary text-white px-3 py-1 rounded-3">
                    May 25, 2022
                  </span>
                </div>
                <h5 className="mt-3">
                  The goal isn’t to build a website. The goal is to build your
                  business.
                </h5>
                <h6 className="text-black fw-normal mt-2">By Admin</h6>
                <div className="mt-3">
                  <img src={blog1} className="w-100" alt="" />
                </div>
                <p className="mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  sed diam sapien. Sed semper urna ......
                </p>
                <div>
                  <a href="" className="text-decoration-none">
                    Read Article &#10095;
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="p-3 border bg-white shadow rounded-3">
                <div>
                  <span className="bg-primary text-white px-3 py-1 rounded-3">
                    May 25, 2022
                  </span>
                </div>
                <h5 className="mt-3">
                  Digital thinking. We build intelligent and beautiful websites.
                </h5>
                <h6 className="text-black fw-normal mt-2">By Admin</h6>
                <div className="mt-3">
                  <img src={blog2} className="w-100" alt="" />
                </div>
                <p className="mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  sed diam sapien. Sed semper urna ......
                </p>
                <div>
                  <a href="" className="text-decoration-none">
                    Read Article &#10095;
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="p-3 border bg-white shadow rounded-3">
                <div>
                  <span className="bg-primary text-white px-3 py-1 rounded-3">
                    May 25, 2022
                  </span>
                </div>
                <h5 className="mt-3">
                  We make up the news, so you don’t have to!
                </h5>
                <h6 className="text-black fw-normal mt-2">By Admin</h6>
                <div className="mt-3">
                  <img src={blog3} className="w-100" alt="" />
                </div>
                <p className="mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  sed diam sapien. Sed semper urna ......
                </p>
                <div>
                  <a href="" className="text-decoration-none">
                    Read Article &#10095;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Pagination
        className="pagination-bar mt-4 "
        // currentPage={currentPage}
        // totalCount={displayProjectDatas.length}
        pageSize={PageSize}
        // onPageChange={(page) => setCurrentPage(page)}
      /> */}

      <div className="my-5">
        <div
          style={{ backgroundColor: "rgba(217, 217, 217, 0.32)" }}
          className="py-3 container"
        >
          <div className="row">
            <div className="col-sm-1"></div>
            <div className="col-sm-6">
              <h2 className="text-start">Create awesome projects with us!</h2>
              <p className="text-start">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
            <div className="col-sm-1"></div>
            <div className="col-sm-3 mt-4">
              <button
                type="button"
                className="serviceButton "
                data-bs-toggle="modal"
                data-bs-target="#startMyProjectModal"
              >
                Start my Project
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="startMyProjectModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg rounded-3 shadow">
          <div className="modal-content">
            <div
              className="modal-header text-center  text-white"
              style={{
                backgroundImage:
                  "linear-gradient(226.1deg, rgba(7, 96, 203, 0.94) 20.03%, rgba(7, 38, 203, 0.5076) 96.59%)",
                color: "white",
                border: "none",
                width: "100%",
              }}
            >
              <h5 className="modal-title  " id="exampleModalLabel">
                Start Your Project
              </h5>
              <button
                type="button"
                className="btn-close "
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body ">
              <form onSubmit={handleSubmit(onSubmit)} className="p-4">
                <h4 className="text-center mb-4">
                  Let's talk about your Project.
                </h4>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control bg-light text-black "
                    style={{ height: "50px" }}
                    id="recipient-name"
                    placeholder="Your Name *"
                    {...register("m_name")}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control bg-light text-black"
                    style={{ height: "50px" }}
                    id="recipient-name"
                    placeholder="Your  Email *"
                    {...register("m_mail")}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="number"
                    className="form-control bg-light text-black"
                    style={{ height: "50px" }}
                    id="recipient-name"
                    placeholder="Phone No. *"
                    {...register("m_phone")}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control bg-light text-black"
                    style={{ height: "50px" }}
                    id="recipient-name"
                    placeholder="Company Name"
                    {...register("m_com_name")}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control bg-light text-black"
                    style={{ height: "50px" }}
                    id="recipient-name"
                    placeholder="Subject"
                    {...register("m_subject")}
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control bg-light text-black"
                    id="message-text"
                    placeholder="Your  Message"
                    style={{ height: "100px" }}
                    {...register("m_message")}
                  ></textarea>
                </div>
                <button type="submit" className="serviceButton w-100">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default OurBlogs;
