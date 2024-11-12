import React from "react";
import s from './Navbar.module.scss'

const Navbar = () => {
  return (
    <nav className= {s.nav}>
      <div className=" {s.item}">
         {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#">Profile</a>
      </div>
      <div className=" {s.item}">
         {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#">Messages</a>
      </div>
      <div className=" {s.item}">
         {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#">News</a>
      </div>
      <div>
         {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#">Music</a>
      </div>
      <div className=" {s.item}">
         {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#">Settings</a>
      </div>
    </nav>
  );
};

export default Navbar;
