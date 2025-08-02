import React, { useState, useRef, useEffect } from "react";
import "./Header.css";
import { HeaderData } from "./HeaderData.jsx";

const Header = () => {
  const [divContent, setDivContent] = useState("belloff");
  const [isClicked, setIsClicked] = useState(false);
  const buttonRef = useRef(null);
  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.click();
    }
  }, []);

  return (
    <nav className=' header navbar fixed-top bg-white border-bottom border-3 container-fluid w-auto'>
      <div className=''>
        <h1 className='navbar-brand ms-3 fw-bold mb-1 fs-3 pb-0'>
          Admin Settings
        </h1>
        <h3 className=' ms-3 mt-0 fs-6 pt-0 fw-semibold text-secondary'>
          Manage Users, Roles, Shifts, and System Management
        </h3>
      </div>
      <div id='profile' className='navbar mt-0 pt-0 justify-content-end h-100'>
        {HeaderData.map((val, key) => {
          const bellClick = () => {
            if (!isClicked) {
              setDivContent(val.bell);
              setIsClicked(true);
            } else {
              setDivContent(val.belloff);
              setIsClicked(false);
            }
          };
          return (
            <div key={key} className='profile'>
              <div
                className='container p-0 ps-2 img-fluid w-50 h-100 object-fit bell'
                ref={buttonRef}
                onClick={bellClick}>
                {divContent}
              </div>
              <div className='container mt-1 p-0 m-0 img-fluid  h-100 object-fit '>
                <img className='profile-img' src={val.picture} />
              </div>
              <div className='mt-2'>
                <div className='container text-center fw-bold m-0 p-0 name'>
                  {val.name}
                </div>
                <div className='container fw-semibold text-secondary m-0 p-0 role'>
                  {val.role}
                </div>
              </div>
              <div className='container text-center p-0 m-0 img-fluid w-auto h-100 pt-3 object-fit arrow'>
                {val.arrow}
              </div>
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default Header;
