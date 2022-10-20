import React from "react";
import "./Navbar.css";
import { useForm } from "react-hook-form";
import {
  call,
  fb,
  linkedin,
  mail,
  twitter,
  logo,
} from "../../Entryfile/ImagePath";
import { Link } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
const Navbar = () => {
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
        if (response.data.error === 200) {
          swal({
            title: "Good!",
            text: "Successfully Added",
            icon: "success",
            button: "Ok",
          });
          window.$("#startMyProjectModal").modal("hide");
          reset();
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="sticky-top">
      <div>
        <div className="bg-black text-light">
          <div className="container">
            <div className="  d-flex bg-black text-light  justify-content-between py-3">
              <div className=" ">
                <div className=" ">
                  <span className="me-3 email-section">
                    <img className="iconSize" src={mail} alt="" />
                    <span className="ms-2">Email : info@projmantech.com</span>
                  </span>
                  <span>
                    <img className="iconSize" src={call} alt="" />
                    <span className="ms-2">Phone : 01886903905</span>
                  </span>
                </div>
              </div>
              <div>
                <span className="me-3">
                  <img className="iconSize" src={fb} alt="" />
                </span>
                <span className="me-3">
                  <img className="iconSize" src={twitter} alt="" />
                </span>
                <span>
                  <img className="iconSize" src={linkedin} alt="" />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-light ">
            <nav className="navbar container navbar-expand-lg  navbar-light ">
              <div className="container-fluid">
                <Link to="/home" className="navbar-brand ">
                  {" "}
                  <img className="navlogoSize" src={logo} alt="" />
                </Link>

                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon "></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav navLinkstyle  mx-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link
                        to="/about"
                        className="nav-link fw-normal text-black "
                      >
                        About
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/services"
                        className="nav-link text-black fw-normal"
                      >
                        Services
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/projects"
                        className="nav-link text-black fw-normal"
                      >
                        Projects
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/ourGallery"
                        className="nav-link text-black fw-normal"
                      >
                        Gallery
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/ourBlog"
                        className="nav-link  text-black fw-normal"
                      >
                        Blog
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/contact"
                        className="nav-link text-black fw-normal"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                  <form className="d-flex">
                    <button
                      type="button"
                      className="serviceButton "
                      data-bs-toggle="modal"
                      data-bs-target="#startMyProjectModal"
                    >
                      Start my Project
                    </button>
                  </form>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div
        className="modal fade "
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
              <h4 className="modal-title text-white " id="exampleModalLabel">
                Start Your Project
              </h4>
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
    </div>
  );
};

export default Navbar;
