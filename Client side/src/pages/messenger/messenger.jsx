import React from "react";
import Left from "../../components/Side-bar/left";
import Logo from "../../components/Navbar/Logo";
import "../../components/Navbar/Navbar.scss";
import "./messenger.scss";
import icon from "../../components/Right-Side-bar/pic.jpg";
function Messenger() {
  return (
    <div>
      <div className="main-nav">
        <Logo />
        <div className="title">
          <img src={icon} alt="profile-pic" />
          <div class="title-con">
             <div className="up"> Akshat</div>
             <div className="down">last seen ....</div>
          </div>
          <i class="fas fa-video"></i>
          
        </div>
      </div>
      <Left />
    </div>
  );
}

export default Messenger;
