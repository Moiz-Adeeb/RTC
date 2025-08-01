import React from "react";
import "./Sidebar.css";
import { SidebarData, SidebarData1 } from "./SidebarData.jsx";

const Sidebar = () => {
  return (
    <div className='bg-light h-100 w-sidebar p-0 m-0 sidebar border-end border-2'>
      <div
        id='company'
        className='pb-3 text-center text-dark mt-0 side-heading border-bottom border-3'
        onClick={() => {
          window.location.pathname = "/";
        }}>
        <h2 className='pt-4 text-center'>RTC S.A</h2>
        <span className=''>Work Force Manager</span>
      </div>
      <ul className='h-25 w-100 p-0'>
        {SidebarData.map((val, key) => {
          return (
            <li
              id={window.location.pathname == val.link ? "active" : "inactive"}
              className='list list-unstyled p-0 w-100 h-25 m-0 d-flex text-dark justify-content-center align-items-center '
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
              className='list list-unstyled p-0 w-100 h-25 m-0 d-flex text-dark justify-content-center align-items-center '
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
