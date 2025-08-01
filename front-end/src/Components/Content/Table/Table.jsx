import React from "react";
import "./Table.css";
import { CardsData } from "../../../assets/CardsData";

const Table = () => {
  return (
    <div className='table-div m-0 p-0 fs-6'>
      <div>
        <table class='table'>
          <thead>
            <tr>
              <th>Activity Type Statistics</th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <th scope='col'>Activity Type</th>
              <th scope='col'>Cateogry</th>
              <th scope='col'>Usage Count</th>
              <th scope='col'>Avg Duration</th>
              <th scope='col'>Status</th>
              <th scope='col'>Actions</th>
            </tr>
          </thead>
          {CardsData.map((val, key) => {
            return (
              <tbody>
                <tr>
                  <th key={key} scope='row'>
                    {val.title}
                  </th>
                  <td>{val.cateogry}</td>
                  <td>{val.used}</td>
                  <td>{val.duration}</td>
                  <td>{val.status}</td>
                  <td>
                    {val.del} {val.edit}
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
