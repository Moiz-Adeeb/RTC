import React from "react";
import "./Table.css";
import { TableData } from "../../../assets/TableData";

const Table = () => {
  return (
    <div className='table-div m-0 p-0 mb-3 fs-6 overflow-hidden'>
      <div className='border rounded-3'>
        <table className='table fs-small'>
          <thead>
            <tr>
              <th>Activity Type Statistics</th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
            <tr className='fs-6 fw-normal table-light'>
              <th className='fw-semibold' scope='col'>
                Activity Type
              </th>
              <th className='fw-semibold' scope='col'>
                Cateogry
              </th>
              <th className='fw-semibold' scope='col'>
                Usage Count
              </th>
              <th className='fw-semibold' scope='col'>
                Avg Duration
              </th>
              <th className='fw-semibold' scope='col'>
                Status
              </th>
              <th className='fw-semibold' scope='col'>
                Actions
              </th>
            </tr>
          </thead>
          {TableData.map((val, key) => {
            return (
              <tbody>
                <tr className='mb-0 pb-0'>
                  <th key={key} scope='row' className='fw-semibold'>
                    {val.title}
                  </th>
                  <td>{val.cateogry}</td>
                  <td>{val.used}</td>
                  <td>{val.duration}</td>
                  <td className='border-box'>
                    <button className='active rounded-5 p-0 m-4 mb-0 mt-0 border-0 ms-0'>
                      {val.status}
                    </button>
                  </td>
                  <td className='button-width'>
                    <div className='w-50 d-flex justify-content-center '>
                      <img src={val.edit} className='w-25 h-25 m-0 p-0' />
                      <img src={val.del} className='w-25 h-25 m-0 p-0' />
                    </div>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default Table;
