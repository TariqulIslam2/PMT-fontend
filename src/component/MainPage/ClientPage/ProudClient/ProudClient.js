import React from "react";
import {
  a2i,
  bba,
  cptu,
  fair,
  govt,
  shashtho,
} from "../../../Entryfile/ImagePath";
import "./ProudClient.css";
const ProudClient = () => {
  return (
    <div className="mt-5">
      <div>
        <h6 className="text-primary fw-bold text-center">Proud Clients</h6>
      </div>
      <div
        style={{ backgroundColor: "rgba(217, 217, 217, 0.27)" }}
        className="my-5"
      >
        <div className="container py-4">
          <div className="row gy-5 text-center">
            <div className="col-sm-2">
              <img src={cptu} alt="" className="clientImage" />
            </div>
            <div className="col-sm-2">
              <img src={bba} alt="" className="clientImage" />
            </div>
            <div className="col-sm-2">
              <img src={a2i} alt="" className="clientImage" />
            </div>
            <div className="col-sm-2">
              <img src={fair} alt="" className="clientImage" />
            </div>
            <div className="col-sm-2">
              <img src={govt} alt="" className="clientImage" />
            </div>
            <div className="col-sm-2">
              <img src={shashtho} alt="" className="clientImage" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProudClient;
