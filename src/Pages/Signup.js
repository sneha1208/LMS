import React, { useState } from "react";
// import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CreateAccount from "../SignupForms/CreateAccount";
import PersonalDetails_1 from "../SignupForms/PersonalDetails_1";
import PersonalDetails_2 from "../SignupForms/PersonalDetails_2";
import EducationalDetails_1 from "../SignupForms/EducationalDetails_1";

import "./Signup.css";
const Signup = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [isSignedUp, setIsSignedUp] = useState(true);

  const nextStep = () => {
    setStep(step + 1);
  };
  const previousStep = () => {
    setStep(step - 1);
  };

  const renderSwitch = (step) => {
    switch (step) {
      case 1:
        return (
          <CreateAccount
            nextStep={nextStep}
            previousStep={previousStep}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
          />
        );
      case 2:
        return (
          <PersonalDetails_1
            nextStep={nextStep}
            previousStep={previousStep}
            firstName={firstName}
            setFirstName={setFirstName}
            lastName={lastName}
            setLastName={setLastName}
            phone={phone}
            setPhone={setPhone}
          />
        );
      case 3:
        return (
          <PersonalDetails_2
            nextStep={nextStep}
            previousStep={previousStep}
            firstName={firstName}
            setFirstName={setFirstName}
            lastName={lastName}
            setLastName={setLastName}
            phone={phone}
          />
        );
      case 4:
        return (
          <EducationalDetails_1
            nextStep={nextStep}
            previousStep={previousStep}
            email={email}
            firstName={firstName}
            lastName={lastName}
            phone={phone}
            password={password}
            isSignedUp={isSignedUp}
            setIsSignedUp={setIsSignedUp}
          />
        );
    }
  };

  return (
    <div className="overlay container-fluid">
      <nav className="navbar navbarStyle">
        <div className="container-fluid">
          <Link to="/">
            <img
              src="Images/logo.png"
              alt="Kids Galaxy Logo"
              className="d-inline-block align-top"
            />
          </Link>
        </div>
      </nav>
      {/* <!-- Image and text -->
      {/* <img className="overlayImg" src="Images/Overlay Shapes.png" alt="" /> */}
      <div className="row mainContent">
        <div className="mainLeft col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
          <div className="mainLeftContent">
            <img src="Images/Sign Up Illustration.png" alt="" />
            <p>
              If you already have an account
              <span className="blue"> Log in here.</span>
            </p>
          </div>
          <div className="middleLine"></div>
        </div>
        {/* mainLeft end */}
        <div className="mainRight col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
          {renderSwitch(step)}
        </div>
        {/* mainRight end */}
      </div>
    </div>
  );
};

export default Signup;
