import React from "react";
import "./Navbar.scss";
import { IconContext } from "react-icons/lib";
import { FaSearch } from "react-icons/fa";
import { BsFillChatDotsFill, BsPeopleCircle, BsBellFill } from "react-icons/bs";
import Logo from "./Logo"

export const Navbar = () => {
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo  */}

        <Logo />

        {/* 2nd Search */}

        <div className="mid">
          {/* <h1>mid</h1> */}
          <div className="search-outline">
            <input type="text" placeholder="Search" className="search" />
          </div>
        </div>

        {/* 3rd Icons */}

        <IconContext.Provider value={{ color: "Black", size: "2em" }}>
          <div className="right">
            <ul className="right-desktop">
              <li>
                <a href="" target="_blank">
                  {" "}
                  {/* notification*/}
                  <BsBellFill size={27} />
                </a>
              </li>

              <li>
                <a href="" target="_blank">
                  {" "}
                  {/* messages/chat */}
                  <BsFillChatDotsFill size={27} />
                </a>
              </li>

              <li>
                <a href="" target="_blank">
                  {" "}
                  {/* user profile */}
                  <BsPeopleCircle size={27} />
                </a>
              </li>
            </ul>
          </div>
        </IconContext.Provider>
      </nav>
    </>
  );
};

export default Navbar;
