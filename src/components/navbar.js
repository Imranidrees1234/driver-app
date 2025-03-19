import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* Mobile Menu */}
      <div className="site-mobile-menu site-navbar-target">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close mt-3">
            <span className="icon-close2 js-menu-toggle"></span>
          </div>
        </div>
        <div className="site-mobile-menu-body"></div>
      </div>

      {/* Navbar Wrap */}
      <div className="site-navbar-wrap">
        {/* Top Bar */}
        <div className="site-navbar-top bg-dark text-light">
          <div className="container py-2">
            <div className="row align-items-center">
              <div className="col-md-6">
                <span className="mr-3">
                  <i className="fas fa-envelope"></i> info@domain.com
                </span>
                <span>
                  <i className="fas fa-phone"></i> +1 234 567 8910
                </span>
              </div>
              <div className="col-md-6 text-right">
                <a href="#" className="text-light p-2">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-light p-2">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-light p-2">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Link to="/" className="navbar-brand">
              MyBrand
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/deepface" className="nav-link">
                    Deepface
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/login" className="nav-link">
                    login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/signup" className="nav-link">
                    signup
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/verfication" className="nav-link">
                    verfication
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/livelocation" className="nav-link">
                    LL
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/driver/video" className="nav-link">
                    Video Verification
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
