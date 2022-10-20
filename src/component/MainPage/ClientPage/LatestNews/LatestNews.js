import React from "react";
import { blog1, blog2, blog3 } from "../../../Entryfile/ImagePath";
const LatestNews = () => {
  return (
    <div className=" py-5">
      <div className="mt-5 py-5 container">
        <div className="text-center">
          <h6 className="text-primary">PERFECT & PRODUCTIVE</h6>
          <h1 className="fw-bold">Read Our Latest News</h1>
        </div>
        <div className="text-center">
          <hr style={{ margin: "auto" }} className=" lineStyle " />
        </div>

        <div className="container px-4 mt-5">
          <div className="row gx-5">
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
                      The goal isn’t to build a website. The goal is to build
                      your business.
                    </h5>
                    <h6 className="text-black fw-normal mt-2">By Admin</h6>
                    <div className="mt-3">
                      <img src={blog1} className="w-100" alt="" />
                    </div>
                    <p className="mt-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin sed diam sapien. Sed semper urna ......
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
                      Digital thinking. We build intelligent and beautiful
                      websites.
                    </h5>
                    <h6 className="text-black fw-normal mt-2">By Admin</h6>
                    <div className="mt-3">
                      <img src={blog2} className="w-100" alt="" />
                    </div>
                    <p className="mt-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin sed diam sapien. Sed semper urna ......
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin sed diam sapien. Sed semper urna ......
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
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
