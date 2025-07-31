import React from "react";
import "./Header.css";
import { HeaderData } from "./HeaderData.jsx";

const Header = () => {
  return (
    <nav class='navbar fixed-top bg-body-tertiary header border container-fluid'>
      <div class=' header '>
        <h1 class='navbar-brand mb-0 fs-3 pb-0'>Admin Settings</h1>
        <h3 className='navbar-brand mt-0 fs-6 pt-0'>
          Manage Users, Roles, Shifts, and System Management
        </h3>
      </div>
      <div className='justify-content-end'>
        Print Items from the object here
      </div>
    </nav>
  );
};

export default Header;
