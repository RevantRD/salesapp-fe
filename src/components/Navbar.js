import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

//Navbar component
function Navbar() {
  const dispatch = useDispatch();
  const on = localStorage.getItem("token");
  //Deletes the token and user details from the local storage
  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    dispatch({ type: "LOGIN_ERROR" });
  };
  if (!on) {
    var isDisabled1 = "disabled";
  }
  if (on) {
    var isDisabled2 = "disabled";
  }

  return (
    <div className="container ">
      <nav className="navbar  navbar-expand-lg  bg-dark  " data-bs-theme="dark">
        <div className="container-fluid ">
          {/* Link to add all components to the single page individually */}
          <NavLink to={"/addsales"} className="navbar-brand  ">
            SALES APP
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to={"/addsales"} className={`nav-link ${isDisabled1}`}>
                  ADD SALES
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/topsales"} className={`nav-link ${isDisabled1}`}>
                  TOP 5 SALES
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to={"/todaysrevenue"}
                  className={`nav-link ${isDisabled1}`}
                >
                  TODAY'S TOTAL REVENUE
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to={"/login"} className={`nav-link ${isDisabled2}`}>
                  LOGIN
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/registration"} className="nav-link ">
                  REGISTER
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to={"/login"}
                  className={`nav-link ${isDisabled1}`}
                  onClick={logOut}
                >
                  LOGOUT
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
