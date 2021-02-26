import React from "react";
import { Link } from "react-router-dom";

const PersonalDetails_2 = ({
  nextStep,
  previousStep,
  firstName,
  setFirstName,
  lastName,
  setLastName,
  phone,
}) => {
  return (
    <div className="card loginCard">
      <div className="cardContent">
        <div className="title">
          <h1>Personal Details</h1>
        </div>
        <div className="inputs">
          <div className="CreateAccount-password-confirm">
            <div className="">
              <p>First Name</p>
              <input
                type="text"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
              />
            </div>
            <div>
              <p>Last Name</p>
              <input
                type="text"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
              />
            </div>
          </div>
          <div className="CreateAccount-password-confirm">
            <div className="">
              <p>Mobile Number</p>
              <input type="text" value={phone} readOnly />
            </div>
            <div className="">
              <p>Enter OTP</p>
              <input type="text" />
            </div>
          </div>
        </div>
        <div className="checkbox">
          <div className="rememberBox">
            <p class="blue">Resend OTP</p>
          </div>
        </div>
        <div className="login personalDetails_1-loginBtnDiv">
          <button className="loginBtn backBtn" onClick={previousStep}>
            Back
          </button>
          <button className="loginBtn" onClick={nextStep}>
            Submit
          </button>
        </div>
        <div className="orLogin">
          <div className="hero">
            <span className="hr"></span>
            <p>Or signup using</p>
            <span className="hr"></span>
          </div>
          <div className="faceG">
            <img src="Images/fb.png" alt="" />
            <img src="Images/google.png" alt="" />
            <p>
              Already a member?
              <Link to="/signup">
                <span className="blue"> Log in</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
      {/*  card content  */}
    </div>
  );
};

export default PersonalDetails_2;
