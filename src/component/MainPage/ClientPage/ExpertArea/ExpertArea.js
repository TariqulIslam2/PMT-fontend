import React from "react";
import "./ExpertArea.css";
const ExpertArea = () => {
  return (
    <div className="my-5  mx-5 pt-3">
      <div
        style={{ backgroundColor: "#F3F3F3", borderRadius: "10px" }}
        className="py-5"
      >
        <h2 className="text-center pt-4 pb-5">
          Experts are here to solve your digital problems.
        </h2>
        <div>
          <div className="container px-4">
            <div className="row gx-5">
              <div className="col-sm-3">
                <div className=" ExpertboxBackgroud ">
                  <div className="p-3 Expertbox ">
                    <h4 className="my-4">Transforming ideas</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmodtempor incididunt ut labore et dolore magna
                      aliqua
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-3">
                <div className=" ExpertboxBackgroud ">
                  <div className="p-3 Expertbox ">
                    <h4 className="my-4">Towards the goal</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmodtempor incididunt ut labore et dolore magna
                      aliqua
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className=" ExpertboxBackgroud ">
                  <div className="p-3 Expertbox ">
                    <h4 className="my-4">Digital creation</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmodtempor incididunt ut labore et dolore magna
                      aliqua
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className=" ExpertboxBackgroud ">
                  <div className="p-3 Expertbox ">
                    <h4 className="my-4">Perfect & productive</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmodtempor incididunt ut labore et dolore magna
                      aliqua
                    </p>
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

export default ExpertArea;
