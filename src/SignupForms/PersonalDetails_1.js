import React from "react";
import { Link } from "react-router-dom";
import { Button, Modal } from 'react-bootstrap';
import { useState } from "react";


const PersonalDetails_1 = ({
  nextStep,
  previousStep,
  firstName,
  setFirstName,
  lastName,
  setLastName,
  phone,
  setPhone,
}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="card loginCard">
      <div className="cardContent">
        <div className="title">
          <h1>Personal Details</h1>
        </div>
        <div className="inputs">
          <div className="CreateAccount-password-confirm">
            <div>
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
          <div className="input2 personalDetails_1-inputs">
            <p>Mobile Number</p>
            <input
              type="text"
              className="personalDetails_1-mobile_numbers"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
            <select className="personalDetails_1-mobile_numbers_select">
              <option>+91</option>
              <option>+92</option>
              <option>+93</option>
              <option>+94</option>
              <option>+94</option>
              <option>+94</option>
              <option>+94</option>
              <option>+94</option>
              <option>+94</option>
            </select>
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
        <p >
          <input type="checkbox" id="accept-checkbox"/>
          I accept the
          <button class="terms-of-service" onClick={handleShow}>Terms of Service</button>
        </p>
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

      <Modal show={show} onHide={handleClose} scrollable={true} dialogClassName="terms-modal" animation={true}>
        <Modal.Header>
          <Modal.Title>Terms of Service<h6>Updated on February 25th</h6></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem adipisci assumenda earum et ducimus quae ratione, saepe dolorum reiciendis. Neque voluptatem quasi iusto quam doloribus consequuntur sit! Obcaecati, qui distinctio?</p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus obcaecati ipsam recusandae error atque natus debitis fugiat nemo. Molestiae ut neque unde esse nesciunt saepe maiores voluptatem, atque porro rem.</p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eligendi vitae officiis ipsum quibusdam ad vero sunt iure, ratione molestiae, esse beatae cupiditate dolor deserunt distinctio quidem dolore nemo. Suscipit.</p>

          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus nostrum sunt velit? Accusantium delectus facilis, distinctio dolore corporis laborum corrupti doloremque? Non dolor molestias rem illo accusamus similique ex iusto.
          </p>

          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit accusantium voluptates atque voluptate? Rerum iure illum maxime ipsum impedit dolor voluptatum soluta tempora, tenetur odio doloremque autem cumque quo nihil!</p>

          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis vitae nostrum illo aspernatur, laboriosam, iure similique mollitia dignissimos praesentium facilis id ratione ab aut molestias perspiciatis perferendis fugiat accusamus corrupti.</p>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer> */}
      </Modal>

    </div>
  );
};

export default PersonalDetails_1;
