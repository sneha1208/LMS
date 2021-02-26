import React from "react";
// import { Link } from "react-router-dom";
import { Auth } from "aws-amplify";
// import awsconfig from "../aws-exports";
// Auth.configure(awsconfig);

import Navbar from "../components/Navbar";
import "./LandingPage.css";
const LandingPage = () => {
  const handleClick = async () => {
    try {
      let { user } = await Auth.currentAuthenticatedUser();
      console.log(user);
    } catch (error) {
      console.log("Error:", error);
    }
  };
  return (
    <div className="LandingPage">
      <Navbar />
      {/* main content */}
      <div className="container-fluid landingPage-main-content">
        <div className="row">
          <div className=" col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 landingPageLeft">
            <div className="landingPageLeft-content">
              <h1 className="landingPageLeft-upper-h1">Break the Barriers</h1>
              <h1 className="landingPageLeft-lower-h1">of Ordinary Learning</h1>
              <p>Let's build a brighter future together</p>
              <button onClick={handleClick}>Start Learning for Free</button>
            </div>
          </div>
          <div className=" col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 landingPageRight">
            <div className="landingPageRight-content">
              <img src="Images/Illustration.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
