import React from "react";
import Cards from "./Cards/Cards";
import "./Content.css";

function Content() {
  return (
    <div className='content container-fluid w-auto bg-light border rounded'>
      <ul className='nav nav-underline border-bottom'>
        <li className='nav-item'>
          <a className='nav-link text-dark fw-bold' href='#'>
            Users
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link text-dark fw-bold' href='#'>
            Roles
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link text-dark fw-bold' href='#'>
            Shifts
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link text-dark fw-bold'>Sites</a>
        </li>
        <li className='nav-item'>
          <a className='nav-link text-dark fw-bold'>Tariffs</a>
        </li>
        <li className='nav-item'>
          <a className='nav-link text-dark fw-bold'>Activity Types</a>
        </li>
      </ul>
      <div className='search mt-4'>
        <h4 className='fs-5 mb-0'>Activity Type Management</h4>
        <p className='pt-0 fw-light mt-0'>
          Define and manage docker work and activities and their specifications
        </p>
        <div className='search-div'>
          <form>
            <input
              id='searchbar'
              type='search'
              placeholder='Search activity types...'
              className='rounded-2'
            />
            <div className='btn-group ms-1 text-right dropdown-buttons category-buttons text-end'>
              <button
                className='btn btn-secondary btn-sm dropdown-toggle ms-1 dropdown-button1'
                type='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'>
                All Categories &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </button>
              <ul className='dropdown-menu'>Menu</ul>
              <button
                className='btn btn-secondary btn-sm dropdown-toggle ms-1 dropdown-button2'
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
      <br />
      <Cards />
    </div>
  );
}

export default Content;
