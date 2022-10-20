import React from "react";
import { HashLink } from "react-router-hash-link";
import { AboutPic } from "../../../Entryfile/ImagePath";
import "./WhoWeAre.css";
const WhoWeAre = () => {
  return (
    <div className="mb-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 pt-5 text-center">
            <img src={AboutPic} className="aboutImageSize" alt="AboutPic" />
          </div>
          <div className="col-sm-6  py-5">
            <h2>Where our solutions become your internet reality</h2>
            <hr className="lineStyle" />
            <p className="py-2 ">
              ProjMan Technology is one of the Quality holder IT firm in
              Bangladesh. ProjMan Technology is one of the Quality holder IT
              firm in Bangladesh. ProjMan Technology was founded in 2017. We are
              a software solution provider and IT consulting company. Our team
              consists of professionally-managed web designers, web developers,
              mobile app developers, network engineers and QA testers.
            </p>
            <HashLink
              to={"/about#about_page"}
              className="text-decoration-none fw-bold"
            >
              Read More &#62;
            </HashLink>
          </div>
        </div>
      </div>

      {/* <div>
        <div className="container primaryBgClr shadow rounded-3 py-5 px-5">
          <div className="row ">
            <div className="col-sm-6 text-white py-5">
              <h3>WHO WE ARE</h3>
              <hr className="w-50 height-25" />
              <p className="py-2 text-light">
                ProjMan Technology is one of the Quality holder IT firm in
                Bangladesh. ProjMan Technology is one of the Quality holder IT
                firm in Bangladesh. ProjMan Technology was founded in 2017. We
                are a software solution provider and IT consulting company. Our
                team consists of professionally-managed web designers, web
                developers, mobile app developers, network engineers and QA
                testers.
              </p>
              <button type="button" className="btn btn-dark">
                Read More &#62;
              </button>
            </div>
            <div className="col-sm-6 pt-5">
              {/* <img src={aboutImage} className="w-100" alt="" /> 
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default WhoWeAre;
