import React from "react";
import Cards from "./Cards/Cards";
import Table from "./Table/Table";
import { ContentData } from "../../assets/ContentDatat";
import "./Content.css";

function Content() {
  return (
    <div className='content container-fluid w-auto bg-white border rounded'>
      <ul className='nav-list nav d-flex nav-underline border-bottom'>
        {ContentData.map((val, key) => {
          return (
            <li key={key} className='nav-item fs-small'>
              <div
                id='icon-content'
                className='nav-link text-secondary fw-bold'
                href='#'>
                <img
                  id='icon-content-img'
                  className='text-end'
                  src={val.icon}
                />
                <div id='div-title' className='fw-semibold p-0 ms-2 text-start'>
                  {val.name}
                </div>
              </div>
            </li>
          );
        })}
        {/* <li className='nav-item'>
          <a className='nav-link text-secondary fw-bold' href='#'>
            Users
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link text-secondary fw-bold' href='#'>
            Roles
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link text-secondary fw-bold' href='#'>
            Shifts
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link text-secondary fw-bold'>Sites</a>
        </li>
        <li className='nav-item'>
          <a className='nav-link text-secondary fw-bold'>Tariffs</a>
        </li>
        <li className='nav-item'>
          <a className='nav-link text-secondary fw-bold'>Activity Types</a>
        </li> */}
      </ul>
      <div className='search mt-4 mb-2'>
        <h4 className='fs-5 mb-0 fw-bold'>Activity Type Management</h4>
        <p className='pt-0 fw-semibold text-secondary mt-0'>
          Define and manage docker work and activities and their specifications
        </p>
        <div className='search-div'>
          <form>
            <input
              id='searchbar'
              type='search'
              placeholder='Search activity types...'
              className='rounded-3 ps-3 border text-secondary border-2'
            />
            <div className='btn-group ms-1 text-right dropdown-buttons category-buttons text-end'>
              <button
                className='btn bg-white border search-btn border-2 btn-sm dropdown-toggle fw-semibold text-secondary ms-1 dropdown-button1 rounded-3'
                type='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'>
                All Categories &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </button>
              <ul className='dropdown-menu'>Menu</ul>
              <button
                className='btn bg-white border search-btn border-2 btn-sm dropdown-toggle fw-semibold text-secondary ms-1 dropdown-button2 rounded-3'
                type='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'>
                All Status
              </button>
              <ul className='dropdown-menu'>Menu</ul>
            </div>
          </form>
        </div>
      </div>

      <Cards />
      <br />
      <Table />
    </div>
  );
}

export default Content;
