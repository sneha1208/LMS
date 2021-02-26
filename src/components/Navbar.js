import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../shared/context/auth-context";
import { Auth, navBar } from "aws-amplify";

import "./Navbar.css";
const Navbar = () => {
  const auth = useContext(AuthContext);
  const [hamburger, setHamburger] = useState(false);

  const handleSignOut = async () => {
    try {
      await Auth.signOut();
      auth.logout();
    } catch (error) {
      console.log("error signing out: ", error);
      alert(error.message);
    }
  };

  return (
    <div className="container-fluid Navbar__Main">
      <nav>
        <div className="row navStyle">
          <Link to="/" className="col-4 col-xs-6">
            <img
              src="Images/logo.png"
              alt="Kids Galaxy Logo"
              className=" d-inline-block align-top navLogo"
            />
          </Link>
          <div className="col-4 navLinks">
            <p>Courses</p>
            <p>Who We Are</p>
            <p>What We Do</p>
          </div>
          <div className="col-4 navSearch-User-Div">
            <div className="navSearch-user">
              <input
                className="nav-search-input"
                type="text"
                name="search"
                autocomplete="off"
              />
              {auth.isLoggedIn ? (
                <div className="user signoutNav" onClick={handleSignOut}>
                  <img src="Images/Icon awesome-user-alt.png" alt="" />
                  <p>Sign Out</p>
                </div>
              ) : (
                <Link to="/login" style={{ textDecoration: "none" }}>
                  <div className="user">
                    <img src="Images/Icon awesome-user-alt.png" alt="" />
                    <p>Sign In</p>
                  </div>
                </Link>
              )}
              <Link className="btn requestDemoBtn">Request Demo</Link>
            </div>
          </div>
          <div id="menu" className="">
            <div
              id="pencet"
              className={`${hamburger && "Diam"}`}
              onClick={() => setHamburger(!hamburger)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <div className={`hiddenNav ${hamburger && "hamburgerOpen"}`}>
          <div className="hiddenNavSearch-user">
            <form>
              <input
                className="nav-search-input"
                type="text"
                name="search"
                placeholder="Search"
              />
            </form>
            <Link to="/login">
              <div className="user">
                <img src="Images/Icon awesome-user-alt.png" alt="" />
                <p>Sign In</p>
              </div>
            </Link>
            <button type="submit">REQUEST DEMO</button>
          </div>
          <div className="hiddnNavLinks">
            <p>Courses</p>
            <p>Who We Are</p>
            <p>What We Do</p>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
