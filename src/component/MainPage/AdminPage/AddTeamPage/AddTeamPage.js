import React from "react";
import { useForm } from "react-hook-form";
import "./AddTeamPage.css";
import {
  adminLinkedin,
  adminFb,
  admintwitter,
  adminInstragram,
} from "../../../Entryfile/ImagePath";
const AddTeamPage = () => {
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
        <h3 className="fw-bold header-text-style  mt-5 ms-5">
          Add New Team Member
        </h3>
        <hr />
        <form className="mb-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3 row">
            <div className="col-sm-3 text-center container">
              <div
                style={{
                  backgroundColor: "rgba(217, 217, 217, 1)",
                  height: "40vh",
                }}
              >
                <h5
                  className="d-flex justify-content-center align-items-center"
                  style={{
                    backgroundColor: "rgba(217, 217, 217, 1)",
                    height: "40vh",
                  }}
                >
                  Select a file
                </h5>
              </div>
              <div class="upload-btn-wrapper mt-3 w-100 ">
                <button class="upload-btn w-100">Upload Profile Picture</button>
                <input type="file" name="myfile" />
              </div>
            </div>
            <div className="col-sm-9 ps-lg-5 ps-md-5 ps-1">
              <div className="mb-3 row">
                <label for="name" className="col-sm-2 col-form-label">
                  {" "}
                  Name
                </label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" id="name" />
                </div>
              </div>
              <div className="mb-3 row">
                <label for="Postion" className="col-sm-2 col-form-label">
                  {" "}
                  Postion
                </label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" id="Postion" />
                </div>
              </div>
              <div className="mb-3 row">
                <label for="Social" className="col-sm-2 col-form-label">
                  {" "}
                  Social Profile
                </label>
                <div className="col-sm-10">
                  <div className="input-group mb-3">
                    <span className="input-group-text">
                      {" "}
                      <img
                        src={adminFb}
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
                        src={admintwitter}
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
                        src={adminInstragram}
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
                        src={adminLinkedin}
                        className=""
                        style={{ width: "27px" }}
                        alt=""
                      />
                    </span>

                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />

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

export default AddTeamPage;
