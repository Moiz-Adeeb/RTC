import React from "react";
import "./Sidebar.css";
import { SidebarData, SidebarData1 } from "./SidebarData.jsx";

const Sidebar = () => {
  return (
    <div className='bg-white h-100 w-sidebar p-0 m-0 sidebar border-end border-2'>
      <div
        id='company'
        className='pb-1 pt-1 text-start text-dark mt-0 side-heading border-bottom border-3 container'
        onClick={() => {
          window.location.pathname = "/";
        }}>
        <div className='row m-0 p-2 ps-5 justify-content-center pb-0'>
          <div class='col-md-12 text-start pb-0'>
            <h2 className='pt-4 fs-5 fw-bold text-start mb-0'>RTC S.A.</h2>
            <span className='pt-0 fs-smaller text-start fw-semibold text-secondary'>
              Work Force Manager
            </span>
          </div>
        </div>
        <br />
      </div>
      <ul className='h-25 w-100 p-0 fs-small'>
        {SidebarData.map((val, key) => {
          return (
            <li
              id={window.location.pathname == val.link ? "active" : "inactive"}
              className='list list-unstyled p-0 w-100 h-25 m-0 d-flex text-muted justify-content-center align-items-center '
              key={key}
              onClick={() => {
                window.location.pathname = val.link;
              }}>
              <div id='icon' className='  '>
                <img id='icon-img' className='text-end' src={val.icon} />
                <div id='title' className='fw-semibold p-0 ms-2 text-start'>
                  {val.title}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <ul className='h-25 w-100 p-0 fs-small'>
        {SidebarData1.map((val, key) => {
          return (
            <li
              id={window.location.pathname == val.link ? "active" : "inactive"}
              className='list list-unstyled p-0 w-100 h-25 m-0 d-flex text-muted justify-content-center align-items-center '
              key={key}
              onClick={() => {
                window.location.pathname = val.link;
              }}>
              <div id='icon' className='  '>
                <img id='icon-img' className='text-end' src={val.icon} />
                <div id='title' className='fw-semibold p-0 ms-2 text-start'>
                  {val.title}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      {/* <ul className='h-25 w-100 p-0'>
        {SidebarData1.map((val, key) => {
          return (
            <li
              id={window.location.pathname == val.link ? "active" : "inactive"}
              className='list list-unstyled p-0 w-100 h-25 m-0 d-flex text-muted justify-content-center align-items-center '
              key={key}
              onClick={() => {
                window.location.pathname = val.link;
              }}>
              <div id='icon'>{val.icon}</div>
              <div id='title'>{val.title}</div>
            </li>
          );
        })} 
      </ul> */}
    </div>
  );
};

export default Sidebar;
