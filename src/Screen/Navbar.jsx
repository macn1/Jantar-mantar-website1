import React from "react";
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black" style={{height:'90px'}}>
      <div className="container">
 
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul className="navbar-nav mx-auto w-100 d-flex justify-content-between">
            <li className="nav-item">
              <a className="nav-link" href="/">HOME</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/history">HISTORY</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/instruments">INSTRUMENTS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#gallery">GALLERY</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#visit">VISIT</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#heritage">PRESERVING HERITAGE</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
