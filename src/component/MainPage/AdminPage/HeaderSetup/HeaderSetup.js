import React from "react";
import "./HeaderSetup.css";
import { useForm } from "react-hook-form";
import {
  linkedinIcon,
  twitterIcon,
  fbIcon,
} from "../../../Entryfile/ImagePath";
const HeaderSetup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="page-wrapper py-5">
      <div className="container ">
        <h3 className="fw-bold header-text-style  mt-5">Website Header</h3>
        <h4 className="fw-bold header-text-style  mt-5 ms-5">Header Setting</h4>
        <hr />
        <form className="mb-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3 row">
            <label for="headerLogo" className="col-sm-2 col-form-label">
              Header Logo
            </label>
            <div className="col-sm-10">
              <input
                type="file"
                className="form-control"
                id="headerLogo"
                {...register("First name")}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label for="headerLogo" className="col-sm-2 col-form-label">
              Favicon
            </label>
            <div className="col-sm-10">
              <input
                type="file"
                className="form-control"
                id="headerLogo"
                {...register("First name")}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label for="headerLogo" className="col-sm-2 col-form-label">
              Enable stikcy header?
            </label>
            <div className="col-sm-10 ">
              <div className="ms-2 form-check form-switch">
                <input
                  className="form-check-input mt-2"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  style={{ transform: "scale(1.5)" }}
                />
              </div>
            </div>
          </div>
          <hr />

          <div className="mb-3 row">
            <label for="phoneNo" className="col-sm-2 col-form-label">
              {" "}
              Navbar Phone No.
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="phoneNo" />
            </div>
          </div>
          <div className="mb-3 row">
            <label for="phoneNo" className="col-sm-2 col-form-label">
              {" "}
              Navbar Email
            </label>
            <div className="col-sm-10">
              <input type="email" className="form-control" id="phoneNo" />
            </div>
          </div>
          <hr />
          <h4 className="fw-bold header-text-style  mt-5 ms-5">
            Social Link Widget
          </h4>
          <hr />
          <div className="mb-3 row">
            <label for="headerLogo" className="col-sm-2 col-form-label">
              Show Social Links?
            </label>
            <div className="col-sm-10 ">
              <div className="ms-2 form-check form-switch">
                <input
                  className="form-check-input mt-2"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  style={{ transform: "scale(1.5)" }}
                />
              </div>
            </div>
          </div>
          <div className="">
            <div className="input-group mb-3">
              <span className="input-group-text">
                {" "}
                <img
                  src={fbIcon}
                  className=""
                  style={{ width: "27px" }}
                  alt=""
                />
              </span>

              <input type="text" className="form-control" />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">
                {" "}
                <img
                  src={twitterIcon}
                  className=""
                  style={{ width: "27px" }}
                  alt=""
                />
              </span>

              <input type="text" className="form-control" />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">
                {" "}
                <img
                  src={linkedinIcon}
                  className=""
                  style={{ width: "27px" }}
                  alt=""
                />
              </span>

              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="text-end mt-5 ">
            {" "}
            <button
              style={{
                background:
                  "linear-gradient(256.23deg, rgba(3, 83, 237, 0.94) 40.16%, rgba(64, 3, 237, 0.5922) 100%)",
                borderRadius: "3px",
                color: "white",
                padding: "4px 25px",
                border: "none",
              }}
              type="submit"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HeaderSetup;
