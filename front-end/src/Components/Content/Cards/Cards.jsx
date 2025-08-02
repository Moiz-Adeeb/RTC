import React from "react";
import "./Cards.css";
import { CardsData } from "../../../assets/CardsData";

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
              <div id='icon-card' className='d-flex mb-2'>
                <img id='icon-img-card' className='m-1' src={val.img} />
                <div className=''>
                  <h5 className='card-title ms-2 d-flex fs-6 rounded-3'>
                    {val.title}
                  </h5>
                  <h6 className='card-subtitle ms-2 mb-2 fs-small text-body-secondary'>
                    {val.cateogry}
                  </h6>
                </div>
              </div>

              <p className='card-text fs-small text-muted'>
                Required Skills:
                <br /> Min Dockers:
                <br /> Max Dockers:
                <br /> Duration
              </p>
            </div>
            <div className='card-body ps-0 mb-0 pb-0'>
              <br />
              <div className='d-flex justify-content-end'>
                <div role='button' className='d-flex w-50 justify-content-end'>
                  <img src={val.edit} className='w-25' />
                  <img src={val.del} className='w-25' />
                </div>
              </div>
              <p className='card-text fs-small fw-semibold text-dark d-flex justify-content-end mt-3 text-end mb-0 pb-0 '>
                {val.required_skills}
                <br /> {val.min_dockers}
                <br /> {val.max_dockers}
                <br /> {val.duration}
              </p>
            </div>
            <hr className='ms-4 m-0 p-0 pb-1' />
            <hr className='me-4 m-0 p-0 pb-1' />
            <button className='active rounded-5 p-0 m-4 mt-0 p-0 border-0'>
              {val.status}
            </button>
            <p className='card-text fs-small fw-semibold text-muted d-flex justify-content-end text-end m-4 mt-0 ms-0'>
              {val.used}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
