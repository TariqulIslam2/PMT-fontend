import React from "react";
import { emailIcon, location } from "../../../Entryfile/ImagePath";
import "./MessageSend.css";
import { useForm } from "react-hook-form";
import { axios } from "axios";
const MessageSend = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    axios
      .post("http://192.168.3.232:8000/api/users/createMessage", data)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="py-5">
      <div className="py-3">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="container ">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div
                    className="border rounded-3 shadow p-5 text-center"
                    style={{ borderRedius: "20px" }}
                  >
                    <h3 className="mb-5">Let's talk about your Project.</h3>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control bg-light"
                        id="exampleFormControlInput1"
                        placeholder="your name"
                        {...register("m_name")}
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control bg-light"
                        id="exampleFormControlInput1"
                        placeholder="your email"
                        {...register("m_mail")}
                      />
                    </div>
                    <div className="mb-3">
                      <textarea
                        className="form-control bg-light"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        placeholder="Your Message"
                        {...register("m_message")}
                      ></textarea>
                    </div>
                    <div className="text-center mt-3">
                      <button
                        type="submit"
                        className="serviceButton w-100 fw-normal"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-sm-6 pe-5 pt-5">
              <h3 className="mb-4">
                Where expectations meet excellence! Professional software
                development experts.
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam,quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in
                reprehenderit in voluptate velit essecillum dolore eu fugiat
                nulla pariatur.
              </p>
              <div className="row pt-4 gy-3">
                <div className="col-sm-5">
                  <div className="row">
                    <div className="col-3 ">
                      <img src={emailIcon} className="messageSendIcon" alt="" />
                    </div>
                    <div className="col-9">
                      <h6>E-mail Adress</h6>
                      <p style={{ fontSize: "10px" }}>info@projmantech.com</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-7">
                  <div className="row">
                    <div className="col-3">
                      <img src={location} className="messageSendIcon" alt="" />
                    </div>
                    <div className="col-9 ">
                      <h6>Our Location</h6>
                      <p style={{ fontSize: "10px" }}>
                        Homested Gulshan Link Tower, Ta 99 Middle Badda, Dhaka
                        1212, Bangladesh
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageSend;
