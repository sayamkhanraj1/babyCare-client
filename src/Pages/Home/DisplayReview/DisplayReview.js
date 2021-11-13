import React, {useState, useEffect} from 'react';
import Rating from 'react-rating';
import './DisplayReview.css';

const DisplayReview = () => {
         const [reviews, setReviews] = useState([]);

         useEffect(()=>{
                  fetch('https://calm-mountain-67432.herokuapp.com/reviews')
                  .then(res => res.json())
                  .then(data => setReviews(data))
         },[])
         return (
                  <div>
                  <div className="container my-5">
                  <div className="proucts-text">
                  <h2 className="text-center fw-bold products-text mb-5">Reviews</h2>
                  </div>
                  <div className="row">
                  {
                           reviews.map(review => 
                                    <div class="col-md-4 mb-3">
                                    <div class="card h-100 card-style">
                                    <div class="card-body">
                                    <h3 class="card-title header-text text-center mb-3">{review?.name}</h3>
                                    <div className="d-flex justify-content-center align-items-center"><Rating
                                    initialRating={review?.rating}
                                    readonly
                                    emptySymbol="far fa-star icon-color"
                                    fullSymbol = "fas fa-star icon-color"
                                    ></Rating></div>
                                    <p class="card-tex mt-3">{review?.discription}</p>
                                    </div>
                                    </div>
                              
                                   </div>

                            )
                  }
                  </div>
                  </div>
                  </div>
         );
};

export default DisplayReview;