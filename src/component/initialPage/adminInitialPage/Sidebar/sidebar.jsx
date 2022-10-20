/**
 * App Header
 */

import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../../assets/style.css";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimney,
  faLaptopCode,
  faPeopleGroup,
  faUser,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
const Sidebar = () => {
  const location = useLocation();
  let pathname = location.pathname;

  return (
    <div className="sidebar" id="sidebar">
      <div className="sidebar-inner slimscroll">
        <div id="sidebar-menu" className="sidebar-menu">
          <ul>
            {/* <li className={pathname.includes("/") ? "active" : ""}>
              <div className="text-center mb-4">
                {" "}
                <input
                  type="text"
                  style={{
                    backgroundColor: "rgba(43, 43, 43, 0.98)",
                    borderRadius: "13px",
                    padding: "5px 15px",
                    color: "white",
                  }}
                  placeholder="Search in menu"
                />
              </div>
            </li> */}
            <li className={pathname.includes("/") ? "active" : ""}>
              <Link to="/">
                <FontAwesomeIcon icon={faHouseChimney} />
                <span> Dashboard</span>
              </Link>
            </li>
            <li className={pathname.includes("/hrm") ? "active" : ""}>
              <Link to="/hrm">
                <FontAwesomeIcon icon={faHouseChimney} /> <span>HRM</span>
              </Link>
            </li>
            <li className={pathname.includes("/gallery") ? "active" : ""}>
              <Link to="/gallery">
                <FontAwesomeIcon icon={faHouseChimney} /> <span>Gallery</span>
              </Link>
            </li>

            {/*Web Setup */}
            <li className="submenu text-start">
              <a href="#">
                <FontAwesomeIcon icon={faLaptopCode} /> <span> Web Setup</span>{" "}
                <span className="menu-arrow" />
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <Link
                    className={
                      pathname.includes("/headerSetup") ? "active" : ""
                    }
                    to="/headerSetup"
                  >
                    Header
                  </Link>
                </li>

                <li>
                  <Link
                    className={
                      pathname.includes("/footerSetup") ? "active" : ""
                    }
                    to="/footerSetup"
                  >
                    Footer
                  </Link>
                </li>

                <li>
                  <Link
                    className={pathname.includes("/pages") ? "active" : ""}
                    to="/pages"
                  >
                    Pages
                  </Link>
                </li>

                <li>
                  <Link
                    className={pathname.includes("/appearance") ? "active" : ""}
                    to="/appearance"
                  >
                    Appearance
                  </Link>
                </li>
              </ul>
            </li>
            <li className="submenu text-start">
              <a href="#">
                <FontAwesomeIcon icon={faPeopleGroup} />{" "}
                <span> Team Member</span> <span className="menu-arrow" />
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <Link
                    className={pathname.includes("/AddTeam") ? "active" : ""}
                    to="/AddTeam"
                  >
                    Add Team Member
                  </Link>
                </li>

                <li>
                  <Link
                    className={pathname.includes("/viewTeam") ? "active" : ""}
                    to="/viewTeam"
                  >
                    View all Member
                  </Link>
                </li>
              </ul>
            </li>

            <li className={pathname.includes("/user") ? "active" : ""}>
              <Link to="/user">
                <FontAwesomeIcon icon={faUser} /> <span>User</span>
              </Link>
            </li>
            <li className={pathname.includes("/system") ? "active" : ""}>
              <Link to="/system">
                <FontAwesomeIcon icon={faHouseChimney} /> <span>System</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
