import React, { useState } from "react";

import "./Footer.css";
const Footer = () => {
  const [footer, setFooter] = useState(false);

  // const footerhandler = () => {
  //   setFooter(!footer);
  // };

  return (
    <div className={`footer ${footer && "up"}`}>
      <div className="footer-container">
        <div className={`social ${footer && "dissolve"}`}>
          <i className="fab fa-facebook-square"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-linkedin"></i>
        </div>
        <div
          className={`arrow ${footer && "rotate"}`}
          onClick={() => setFooter(!footer)}
        >
          <img src="Images/Footer Up Icon.png" alt="" />
        </div>
        <div className={`contacts ${footer && "dissolve"}`}>
          {/* <i class="fas fa-comment-alt"></i> */}
          <img src="Images/Icon material-chat.png" alt="" />
          <h2>Contact</h2>
        </div>
      </div>
      {/* hero end*/}
      <div className="footerHidden">
        <div className="villian">
          {/* hiddenLeft start */}
          <div className="hiddenLeft">
            <div className="logo">
              <img src="Images/Logo-01.png" alt="" />
            </div>
            {/* links start */}
            <div className="links">
              <div className="leftCl">
                <p>About Us</p>
                <p>Contact Us</p>
                <p>Help and Support</p>
                <p>Terms and Services</p>
              </div>
              <div className="rightCl">
                <p>Careers</p>
                <p>Blogs</p>
                <p>Forums</p>
                <p>FAQ's</p>
              </div>
            </div>
            {/* links end */}
          </div>
          {/* hiddenLeft end */}
          {/* hiddenRight start */}
          <div className="hiddenRight">
            <p>
              Copyrights @ <span>Kids Galaxy Pvt. Ltd</span>
            </p>
            <p>All rights Reserved</p>
            <div className="social">
              <i className="fab fa-facebook-square"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-linkedin"></i>
            </div>
          </div>
          {/* hiddenRight end */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
