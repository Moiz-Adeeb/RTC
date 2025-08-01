import React, { useState, useRef, useEffect } from "react";
import "./Header.css";
import { HeaderData } from "./HeaderData.jsx";

const Header = () => {
  const [divContent, setDivContent] = useState("bell");
  const [isClicked, setIsClicked] = useState(false);
  const buttonRef = useRef(null);
  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.click();
    }
  }, []);

  return (
    <nav className=' header navbar fixed-top bg-body-tertiary border container-fluid w-auto'>
      <div className=''>
        <h1 className='navbar-brand ms-3  mb-1 fs-3 pb-0'>Admin Settings</h1>
        <h3 className=' ms-3 mt-0 fs-6 pt-0 fw-normal'>
          Manage Users, Roles, Shifts, and System Management
        </h3>
      </div>
      <div id='profile' className='navbar justify-content-end h-100 w-auto'>
        {HeaderData.map((val, key) => {
          const bellClick = () => {
            if (!isClicked) {
              setDivContent(val.belloff);
              setIsClicked(true);
            } else {
              setDivContent(val.bell);
              setIsClicked(false);
            }
          };
          return (
            <div key={key} className='container-fluid h-100 w-auto bell'>
              <div
                className='container p-2 img-fluid w-25 h-100 object-fit'
                ref={buttonRef}
                onClick={bellClick}>
                {divContent}
              </div>
              <div className='container p-0 m-0 img-fluid w-auto h-100 object-fit'>
                {val.picture}
              </div>

              <div className=''>
                <div className='container text-center fw-normal'>
                  {val.name}
                </div>
                <div className='container fw-light'>{val.role}</div>
                <div className='container text-center p-0 m-0 img-fluid w-auto h-100 object-fit'>
                  {val.arrow}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default Header;
