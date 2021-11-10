import React from 'react';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useAuth from '../../Hooks/useAuth';
import './Orders.css'
import { Link } from 'react-router-dom';

const Orders = () => {

         let {orders} = useParams();
         const {user} = useAuth();

         const [Orders, setOrders] = useState([]);
         const [singleOrder, setSingleOrder] = useState({});

         // icones
         const starIcon = <FontAwesomeIcon icon={faStar} />

         useEffect(()=>{
                  fetch('/products.json')
                  .then(res => res.json())
                  .then(data => setOrders(data))
         },[])

         useEffect(()=>{
                  const foundBooking = Orders.find(booking => (booking.key == orders))
                  setSingleOrder(foundBooking)
                  
         },[Orders])

         // react hook form
         const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
         const onSubmit = data => {
           console.log(data)
           reset();
        };

         console.log(watch("example")); 

         return (
                  <div className="container">
                  <div className="row"> 
                  <div className="col-md-6 mt-4 mb-3">
                 <div className="card h-100 card-style">
                   <div className=" img-effect"> 
                     <img className="img-fluid" src={singleOrder?.img} alt="..."/>
                     </div>
                    <div className="mt-3 package-detail d-flex justify-content-around">
                    </div>
                    <div className="card-body text-center package-text">
                      <h3 className="card-title mb-3">{singleOrder?.name}</h3>
                      <h5 className="fw-bold text-secondary mb-2">Price: {singleOrder?.price}</h5>
                      <h6 className="fw-bold text-secondary"><span className="star">{starIcon}</span> {singleOrder?.rating}</h6>
                      <p className="fw-bold text-secondary my-3">{singleOrder?.discription}</p>
                    </div>
                    
                    <div className="d-flex justify-content-center align-items-center">
                     <Link>
                     <button className="service-btn mb-3 btn">Panding</button>
                     </Link>
                    </div>
                  </div>
                 </div>

                  <div className="col-md-6 mt-4 mb-3">
                  <form className="order-form " onSubmit={handleSubmit(onSubmit)}>
                  <input defaultValue={user.displayName} {...register("name")} />
                  <input defaultValue={user.email} {...register("email")} />
                  <input placeholder="Address" {...register("address", { required: true })} />
                  <input placeholder="City" {...register("city", { required: true })} />
                  <input type="number" placeholder="Phone Number" {...register("number", { required: true })} />
                  {errors.exampleRequired && <span>This field is required</span>}
                  
                  <input className="fw-bolder fs-5" type="submit" />
                  </form>
                  </div>

                  </div>
                  </div>
         );
};

export default Orders;