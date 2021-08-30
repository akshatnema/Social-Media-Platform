import React from 'react';
import  Post from '../../components/Post/Post';
import axios from 'axios'

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
        <div>
            <button onClick={Logout}>Logout</button>
            < Post />
            <Post />
            <Post />
        </div>
    )
}

export default home;
