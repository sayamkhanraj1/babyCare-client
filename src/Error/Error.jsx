import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css'

const Error = () => {
         return (
                  <div>
                           <div className="logo">
                           <h1>404</h1>
                           <p className="text-center mx-2 text-danger fs-3">Error occurred! - File not Found</p>
                           </div>
                           <div className="d-flex justify-content-center  align-items-center mb-5">
                           <Link to="/home"><button className="btn btn-danger">Go Back Home</button></Link>
                           </div>   
                  </div>
         );
};

export default Error;