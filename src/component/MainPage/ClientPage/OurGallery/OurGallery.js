import React from "react";
import Navbar from "./../../../initialPage/navbar/Navbar";
import { Link } from "react-router-dom";
import Footer from "./../../../initialPage/Footer/Footer";
import { AboutPic } from "../../../Entryfile/ImagePath";
import "./OurGallery.css";
import ModalImage from "react-modal-image";
const OurGallery = () => {
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
                  Gallery
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
          <h4 className="text-white text-center pt-5">View our gallery</h4>
          <h1 className="text-white text-center">Our Gallery</h1>
          <div className="text-center pb-2">
            <hr style={{ margin: "auto" }} className=" lineStyle text-white " />
          </div>
        </div>
      </div>

      <div className="container  my-5">
        <section id="photos">
          <ModalImage
            small="https://res.cloudinary.com/tariqtvsl/image/upload/v1655783583/ServiceImages/GalleryImage/g-23_bizbhg.jpg"
            medium="https://res.cloudinary.com/tariqtvsl/image/upload/v1655783583/ServiceImages/GalleryImage/g-23_bizbhg.jpg"
            hideDownload
            hideZoom
          />
          <ModalImage
            small="https://res.cloudinary.com/tariqtvsl/image/upload/v1655783581/ServiceImages/GalleryImage/g-33_mqikcf.jpg"
            medium="https://res.cloudinary.com/tariqtvsl/image/upload/v1655783581/ServiceImages/GalleryImage/g-33_mqikcf.jpg"
            hideDownload
            hideZoom
          />
          <ModalImage
            small="https://res.cloudinary.com/tariqtvsl/image/upload/v1655783583/ServiceImages/GalleryImage/g-24_akaeio.jpg"
            medium="https://res.cloudinary.com/tariqtvsl/image/upload/v1655783583/ServiceImages/GalleryImage/g-24_akaeio.jpg"
            hideDownload
            hideZoom
          />
          <ModalImage
            small="https://res.cloudinary.com/tariqtvsl/image/upload/v1655783578/ServiceImages/GalleryImage/g-26_tddted.jpg"
            medium="https://res.cloudinary.com/tariqtvsl/image/upload/v1655783578/ServiceImages/GalleryImage/g-26_tddted.jpg"
            hideDownload
            hideZoom
          />
          <ModalImage
            small="https://res.cloudinary.com/tariqtvsl/image/upload/v1655783578/ServiceImages/GalleryImage/g-31_levsyr.jpg"
            medium="https://res.cloudinary.com/tariqtvsl/image/upload/v1655783578/ServiceImages/GalleryImage/g-31_levsyr.jpg"
            hideDownload
            hideZoom
          />
          <ModalImage
            small="https://res.cloudinary.com/tariqtvsl/image/upload/v1655783581/ServiceImages/GalleryImage/g-29_pnk8zj.jpg"
            medium="https://res.cloudinary.com/tariqtvsl/image/upload/v1655783581/ServiceImages/GalleryImage/g-29_pnk8zj.jpg"
            hideDownload
            hideZoom
          />
          <ModalImage
            small="https://res.cloudinary.com/tariqtvsl/image/upload/v1655783581/ServiceImages/GalleryImage/g-25_lmnyhl.jpg"
            medium="https://res.cloudinary.com/tariqtvsl/image/upload/v1655783581/ServiceImages/GalleryImage/g-25_lmnyhl.jpg"
            hideDownload
            hideZoom
          />
          <ModalImage
            small="https://res.cloudinary.com/tariqtvsl/image/upload/v1655783581/ServiceImages/GalleryImage/g-36_kvww5o.jpg"
            medium="https://res.cloudinary.com/tariqtvsl/image/upload/v1655783581/ServiceImages/GalleryImage/g-36_kvww5o.jpg"
            hideDownload
            hideZoom
          />
          <ModalImage
            small="https://res.cloudinary.com/tariqtvsl/image/upload/v1655783577/ServiceImages/GalleryImage/g-27_zevgmz.jpg"
            medium="https://res.cloudinary.com/tariqtvsl/image/upload/v1655783577/ServiceImages/GalleryImage/g-27_zevgmz.jpg"
            hideDownload
            hideZoom
          />
        </section>
      </div>
      <div className="text-center mt-3 mb-5">
        <button className="serviceButton">View All Image</button>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default OurGallery;
