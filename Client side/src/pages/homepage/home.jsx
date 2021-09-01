import React from "react";
import Post from "../../components/Post/Post";
import Left from "../../components/Side-bar/left";
import Navbar from "../../components/Navbar/Navbar.jsx";
import axios from "axios";
import './home.scss';

function home() {
  const Logout = async () => {
    try {
      sessionStorage.removeItem("user");
      document.cookie.split(";").forEach(function (c) {
        document.cookie = c
          .replace(/^ +/, "")
          .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
      });
      const temp = await axios.get("/auth/logout");
      console.log(temp);
      window.location.reload();
    } catch (err) {}
  };

  return (
    <div className="Homepage">
    <Navbar />
      <Left Logout={Logout}/>
      <div className="posts">
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}

export default home;
