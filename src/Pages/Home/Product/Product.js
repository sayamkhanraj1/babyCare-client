import React from 'react';
import { faCartArrowDown, faStar} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './product.css'

const product = (props) => {

        const product = props.product;
        const {img, key, name, price, rating, category} = product;

        // icons
        const cartIcon = <FontAwesomeIcon icon={faCartArrowDown} />
        const starIcon = <FontAwesomeIcon icon={faStar} />
  

        //add to myOrders

//         const handleAddToCart = () =>{
//           const data = packag;
//           data.email = user?.email;
//           console.log(data)

//           fetch("https://powerful-sierra-60610.herokuapp.com/myOrder", {
//             method:"POST",
//             headers:{'content-type' : 'application/json'},
//             body: JSON.stringify(data)
//           })
//         }

        return (
                  <div className="col-md-4 mt-4 mb-3">
                 <div className="card h-100 card-style">
                   <div className=" img-effect"> 
                     <img className="img-fluid" src={img} alt="..."/>
                     </div>
                    <div className="mt-3 package-detail d-flex justify-content-around">
                    </div>
                    <div className="card-body text-center package-text">
                      <h3 className="card-title mb-3">{name}</h3>
                      <h4 className="card-title mb-3 fw-bold">{category}</h4>
                      <h5 className="fw-bold text-secondary mb-2">Price: {price}</h5>
                      <h6 className="fw-bold text-secondary"><span className="star">{starIcon}</span> {rating}</h6>
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

export default product;