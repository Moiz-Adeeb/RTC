import React from "react";
import "./Sidebar.css";
import { SidebarData, SidebarData1 } from "./SidebarData.jsx";

const Sidebar = () => {
  return (
    <div className='bg-color h-100 w-250px p-0 m-0 sidebar'>
      <div
        className='pb-4 text-center text-white mt-0 side-heading'
        onClick={() => {
          window.location.pathname == "/";
        }}>
        <h2 className='pt-4 text-center'>RTC S.A</h2>
        <span className=''>Work Force Manager</span>
      </div>
      <ul className='h-25 w-100 p-0'>
        {SidebarData.map((val, key) => {
          return (
            <li
              id={window.location.pathname == val.link ? "active" : "inactive"}
              className='list list-unstyled p-0 w-100 h-25 m-0 d-flex text-white justify-content-center align-items-center '
              key={key}
              onClick={() => {
                window.location.pathname = val.link;
              }}>
              <div id='icon'>{val.icon}</div>
              <div id='title'>{val.title}</div>
            </li>
          );
        })}
      </ul>
      <ul className='h-25 w-100 p-0'>
        {SidebarData1.map((val, key) => {
          return (
            <li
              id={window.location.pathname == val.link ? "active" : "inactive"}
              className='list list-unstyled p-0 w-100 h-25 m-0 d-flex text-white justify-content-center align-items-center '
              key={key}
              onClick={() => {
                window.location.pathname = val.link;
              }}>
              <div id='icon'>{val.icon}</div>
              <div id='title'>{val.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
