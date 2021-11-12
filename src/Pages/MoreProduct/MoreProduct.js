import React from 'react';
import { faCartArrowDown, faStar} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './MoreProduct.css'

const MoreProduct = (props) => {

        const moreProduct = props.moreProduct;
        const {img, key, name, price, rating, discription} = moreProduct;

        // icons
        const cartIcon = <FontAwesomeIcon icon={faCartArrowDown} />
        const starIcon = <FontAwesomeIcon icon={faStar} />

        return (
                  <div className="col-md-4 mt-4 mb-3">
                 <div className="card h-100 card-style">
                   <div className="img-effect d-flex justify-content-center align-items-center"> 
                     <img className="w-75" src={img} alt="..."/>
                     </div>
                    <div className="mt-3 package-detail d-flex justify-content-around">
                    </div>
                    <div className="card-body text-center package-detail">
                      <h3 className="card-title mb-3">{name}</h3>
                      <h5 className="fw-bold text-secondary mb-2">Price: {price}</h5>
                      <h6 className="fw-bold text-secondary"><span className="star">{starIcon}</span> {rating}</h6>
                      <p className="fw-bold text-secondary my-3">{discription}</p>
                    </div>
                    
                    <div className="d-flex justify-content-center align-items-center">
                     <Link to={`/orders/${key}`}>
                     <button className="service-btn mb-3 btn">{cartIcon} Book Now</button>
                     </Link>
                    </div>
                  </div>
                 </div>
         );
};

export default MoreProduct;