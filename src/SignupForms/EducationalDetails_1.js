import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

// import { AuthContext } from "../shared/context/auth-context";
import Amplify, { Auth } from "aws-amplify";
import awsconfig from "../aws-exports";
Auth.configure(awsconfig);

const EducationalDetails_1 = ({
  nextStep,
  previousStep,
  email,
  firstName,
  lastName,
  phone,
  password,
}) => {
  // const auth = useContext(AuthContext);
  const history = useHistory();
  const [stateBoard, setStateBoard] = useState(false);
  // const [selected, setSelected] = useState(false);

  const handleSignup = async () => {
    let user;
    try {
      user = await Auth.signUp({
        username: email,
        password: password,
        attributes: {
          email: email,
          phone_number: phone,
          name: firstName,
        },
      });
      console.log(user);
      history.push("/login");
    } catch (error) {
      console.log("error signing up:", error);
      alert(error.message);
    }

    if (user) {
      // auth.login();
      //sets the context isLoggedIn state to true
    }
  };

  return (
    <div className="card loginCard">
      <div className="cardContent">
        <div className="title">
          <h1>Educational Details</h1>
        </div>
        <div className="inputs">
          <p>Select your board</p>
          <div className="EducationalDetailsBoard">
            <div
              className="CBSE EducationalDetailsBoard_board"
              onClick={() => {
                setStateBoard(false);
              }}
            >
              <p>CBSE</p>
            </div>
            <div
              className="ICSE EducationalDetailsBoard_board"
              onClick={() => setStateBoard(false)}
            >
              <p>ICSE</p>
            </div>
            <div
              className="State EducationalDetailsBoard_board"
              onClick={() => setStateBoard(true)}
            >
              <p>State</p>
            </div>
          </div>
          <div className="EducationalDetails_class">
            {!stateBoard && (
              <div>
                <p>Select your Class</p>
                <select
                  name=""
                  id=""
                  className="EducationalDetails_class_select"
                >
                  <option>1st</option>
                  <option>2nd</option>
                  <option>3rd</option>
                  <option>4th</option>
                  <option>5th</option>
                  <option>6th</option>
                  <option>7th</option>
                  <option>8th</option>
                  <option>9th</option>
                  <option>10th</option>
                </select>
              </div>
            )}
            {stateBoard && (
              <div className="CreateAccount-password-confirm">
                <div className="EducationalDetails_class_select_stateDiv">
                  <p>Select your class</p>
                  <select
                    name=""
                    id=""
                    className="EducationalDetails_class_select_state"
                  >
                    <option>1st</option>
                    <option>2nd</option>
                    <option>3rd</option>
                    <option>4th</option>
                    <option>5th</option>
                    <option>6th</option>
                    <option>7th</option>
                    <option>8th</option>
                    <option>9th</option>
                    <option>10th</option>
                  </select>
                </div>
                <div className="EducationalDetails_class_select_stateDiv">
                  <p>Select your state</p>
                  <select
                    name=""
                    id=""
                    className="EducationalDetails_class_select_state"
                  >
                    <option>Maharashtra</option>
                    <option>Punjab</option>
                    <option>Goa</option>
                    <option>4th</option>
                    <option>5th</option>
                    <option>6th</option>
                    <option>7th</option>
                    <option>8th</option>
                    <option>9th</option>
                    <option>10th</option>
                  </select>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="checkbox">
          <div className="rememberBox EducationalDetails_class_remeberBox">
            <input type="checkbox" />
            <p>I would like to receive Kids Galaxy's newsletter.</p>
          </div>
        </div>
        <div className="login personalDetails_1-loginBtnDiv">
          <button className="loginBtn backBtn" onClick={previousStep}>
            Back
          </button>
          <button className="loginBtn" onClick={handleSignup}>
            Signup
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

export default EducationalDetails_1;
