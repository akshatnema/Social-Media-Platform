import React,{useContext} from "react";
import Left from "../../components/Side-bar/left";
import Navbar from "../../components/Navbar/Navbar";
import { AuthContext } from "../../Context/Authcontext";
import Chatbody from "../../components/Chat-body/chat"
import "../../components/Navbar/Navbar.scss";
import "./messenger.scss";
import icon from "../../components/Right-Side-bar/pic.jpg";

function Messenger() {
  const { user } = useContext(AuthContext);

  return (
    <div className="messenger">
      <Navbar User={user} />
      <Left />
<<<<<<< HEAD
      <div> 
      <div className="title">
          <img src={icon} alt="profile-pic" />
          <div class="title-con">
            <div className="up"> Akshat</div>
            <div className="down">last seen</div>
=======
      <section className="chat">
      <div className="header">  
      <div className="title">
          <div className="title-head"> 
          <img src={icon} alt="profile-pic" />
           <div class="title-con">
            <div className="up"> Akshat</div>
            <div className="down">last seen</div>
           </div>
>>>>>>> 42198130d92198f857c419fd5c613327698217f1
          </div>
          <div className="icons">
            <i class="fas fa-video"></i>
            <i class="fas fa-phone-alt"></i>
          </div>
        </div>
        <div className="d-flex justify-content-between side-nav">
          CHATS 
          <i class="fas fa-search"></i>
<<<<<<< HEAD
        </div>
       <div className="chatbody">
      <Chatbody />
      </div>
      </div>
=======
         </div>
        </div> 
      <div className="chatbody">
      <Chatbody />
      </div>
      </section>
>>>>>>> 42198130d92198f857c419fd5c613327698217f1
    </div>
  );
}

export default Messenger;
