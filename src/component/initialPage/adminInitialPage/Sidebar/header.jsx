/**
 * App Header
 */
import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import {
  logo,
  mehrab,
  pmtLogoWhite,
  webIcon,
} from "../../../Entryfile/ImagePath.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBarsStaggered,
  faHouseChimney,
} from "@fortawesome/free-solid-svg-icons";
import "../../../assets/app.js";
import { useLocation } from "react-router-dom";
const Header = () => {
  const location = useLocation();
  let pathname = location.pathname;
  const logOutBtnHandler = () => {
    window.sessionStorage.clear();
  };

  return (
    <div>
      <div>
        <div className="header" style={{ right: "0px" }}>
          {/* Logo */}

          {/* /Logo */}
          <a
            id="toggle_btn"
            href=""
            style={{
              display: pathname.includes("tasks")
                ? "none"
                : pathname.includes("compose")
                ? "none"
                : "",
            }}
          >
            <span className="bar-icon">
              <span />
              <span />
              <span />
            </span>
          </a>
          {/* Header Title */}
          <div className="page-title-box">
            <a href="/">
              {" "}
              <img src={webIcon} width={40} height={40} alt="" />
            </a>
          </div>
          {/* /Header Title */}
          {/* <div className="">
            <img src={pmtLogoWhite} className="header_logo_size" alt="" />
          </div> */}
          <a id="mobile_btn" className="mobile_btn" href="#sidebar">
            <i className="fa fa-bars" />
          </a>
          {/* Header Menu */}
          <ul className="nav user-menu">
            <li className="nav-item dropdown has-arrow main-drop">
              <a
                href="#"
                className="dropdown-toggle nav-link"
                data-toggle="dropdown"
              >
                <span className="header-img">
                  {" "}
                  <div className="avatar">
                    <img className="avatar" src={mehrab} />
                  </div>
                  <span className="status online" />
                </span>
                <span>Mehrab Hossain</span>
              </a>
              <div className="dropdown-menu">
                <Link className="dropdown-item" to="/singleprofile">
                  My Profile
                </Link>
                <Link className="dropdown-item" to="/changepassword">
                  Change Password
                </Link>
                <a
                  onClick={logOutBtnHandler}
                  className="dropdown-item"
                  href="/"
                >
                  Logout
                </a>
              </div>
            </li>
          </ul>
          {/* /Header Menu */}
          {/* Mobile Menu */}
          <div className="dropdown mobile-user-menu">
            <a
              href="#"
              className="nav-link dropdown-toggle"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fa fa-ellipsis-v" />
            </a>
            <div className="dropdown-menu dropdown-menu-right">
              <Link className="dropdown-item" to="/singleprofile">
                My Profile
              </Link>
              <Link
                onClick={logOutBtnHandler}
                className="dropdown-item"
                to="/login"
              >
                Logout
              </Link>
            </div>
          </div>
          {/* /Mobile Menu */}
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Header;
