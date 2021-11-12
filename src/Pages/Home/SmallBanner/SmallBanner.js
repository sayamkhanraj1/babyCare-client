import React from 'react';
import smallBanner from '../../../images/small-banner/small-banner.jpg';
import smallBanner2 from '../../../images/small-banner/small-banner 2.jpg';
import './SmallBanner.css';

const SmallBanner = () => {
         return (
                  <div className="row mx-5 my-5 ban-container">
                  <div className="card mb-3 col-md-6 banner-container  border-0">
                  <div className="row g-0">
                  <div className="col-md-4 banner-img">
                  <img src={smallBanner} alt="..."/>
                  </div>
                  <div className="col-md-8 d-flex justify-content-end align-items-center">
                  <div className=" small-banner-text">
                  <h2 className="card-title">Only your</h2>
                  <h1 className="card-title my-3">Love is Purer</h1>
                  <button className="service-btn mb-3 btn">Book Now</button>
                  </div>
                  </div>
                  </div>
                  </div>

                  <div className="card mb-3 col-md-6  border-0 banner-container">
                  <div className="row g-0">
                  <div className="col-md-4 banner-img">
                  <img src={smallBanner2} alt="..."/>
                  </div>
                  <div className="col-md-8 d-flex justify-content-end align-items-center">
                  <div className=" small-banner-text">
                  <h2 className="card-title">Baby Care</h2>
                  <h1 className="card-title my-3">Campaign Idea</h1>
                  <button className="service-btn mb-3 btn">Book Now</button>
                  </div>
                  </div>
                  </div>
                  </div>
                  </div>
         );
};

export default SmallBanner;