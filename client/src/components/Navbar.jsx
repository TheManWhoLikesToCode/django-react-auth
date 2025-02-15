import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function Navbar() {
  const { isLoggedIn } = useAuth();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
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
              <NavLink className={"nav-link"} to={"/"}>
                Home
              </NavLink>
            </li>
            {isLoggedIn ? (
              <li className="nav-item">
                <NavLink className={"nav-link"} to={"/auth/user"}>
                  User
                </NavLink>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink className={"nav-link"} to={"/auth/login"}>
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={"nav-link"} to={"/auth/register"}>
                    Register
                  </NavLink>
                </li>
              </>
            )}
            <li className="nav-item">
              <NavLink className={"nav-link"} to={"/customerPage"}>
                Customer Page
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={"nav-link"} to={"/landingPage"}>
                Landing Page
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
