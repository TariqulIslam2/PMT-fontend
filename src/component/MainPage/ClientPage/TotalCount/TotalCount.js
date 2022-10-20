import React from "react";
import { totalCountBackground } from "../../../Entryfile/ImagePath";
import CountUp from "react-countup";
import "./TotalCount.css";
const TotalCount = () => {
  return (
    <div className="my-5  mx-5 pt-3">
      <div
        style={{
          borderRadius: "10px",
          backgroundImage: `url(${totalCountBackground})`,
          width: "100%",
          backgroundSize: "cover",
        }}
        className="py-4"
      >
        <div className="">
          <div className="container text-center">
            <div className="row gx-5 py-0 px-0  ">
              <div className="col-sm-3 pt-4">
                <div className=" totalboxBackgroud ">
                  <div className=" totalbox text-center py-2">
                    <h1 className="">
                      <CountUp start={1} end={6} duration={1} prefix="0" />
                    </h1>
                    <h5>Years of experience</h5>
                  </div>
                </div>
              </div>
              <div className="col-sm-3 pt-4">
                <div className=" totalboxBackgroud ">
                  <div className=" totalbox text-center py-2">
                    <h1 className="">
                      {" "}
                      <CountUp start={1} end={87} duration={5} />
                    </h1>
                    <h5>Total project</h5>
                  </div>
                </div>
              </div>
              <div className="col-sm-3 pt-4">
                <div className=" totalboxBackgroud ">
                  <div className=" totalbox text-center py-2 ">
                    <h1 className="">
                      {" "}
                      <CountUp start={1} end={4} prefix="0" duration={1} />
                    </h1>
                    <h5>Winning awards</h5>
                  </div>
                </div>
              </div>
              <div className="col-sm-3 pt-4">
                <div className=" totalboxBackgroud ">
                  <div className=" totalbox text-center py-2 ">
                    <h1 className="">
                      {" "}
                      <CountUp start={1} end={87} duration={5} />
                    </h1>
                    <h5>Happy clients</h5>
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

export default TotalCount;
