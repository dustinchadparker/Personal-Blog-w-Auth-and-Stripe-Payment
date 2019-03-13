import * as React from "react";
import { Link } from "react-router-dom";

const Navbar: React.SFC<NavbarProps> = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
      <span className="navbar-brand">Your Personal Blog</span>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active nav-link">
            <Link to="/" className="nav-item nav-link mx-1">
              Show All Blogs
            </Link>
          </li>
          <li className="nav-item active nav-link">
            <Link to="/admin" className="nav-item nav-link mx-1">
              Admin Login
            </Link>
          </li>
          <li className="nav-item active nav-link">
            <Link to="/payment" className="nav-item nav-link mx-1">
              Payment
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

interface NavbarProps {}

export default Navbar;
