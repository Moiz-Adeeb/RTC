import React from "react";
import "./Cards.css";
import { CardsData } from "./CardsData";

const Cards = () => {
  return (
    <div className='d-fle card-div'>
      {CardsData.map((val, key) => {
        return (
          <div
            className='card m-1 card-container'
            key={key}
            style={{ backgroundColor: val.color }}>
            <div className='card-body'>
              <div className='d-flex'>{val.img}</div>
              <h5 className='card-title d-flex fs-5'>{val.title}</h5>
              <h6 className='card-subtitle mb-2 text-body-secondary'>
                {val.cateogry}
              </h6>
              <p className='card-text text-muted'>
                Required Skills:
                <br /> Min Dockers:
                <br /> Max Dockers:
                <br /> Duration
              </p>
            </div>
            <div className='card-body ps-0'>
              <br />
              <div role='button' className='d-flex justify-content-end'>
                {val.edit} {val.del}
              </div>
              <br />
              <p className='card-text fs-6 fw-semibold text-muted d-flex justify-content-end text-end'>
                {val.required_skills}
                <br /> {val.min_dockers}
                <br /> {val.max_dockers}
                <br /> {val.duration}
              </p>
            </div>
            <hr className='ms-4' />
            <hr className='me-4' />
            <button className='active rounded-5 p-0 m-4 mt-0 border-0'>
              Active
            </button>
            <p className='card-text fs-6 fw-semibold text-muted d-flex justify-content-end text-end m-4 mt-0 ms-0'>
              {val.used}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
