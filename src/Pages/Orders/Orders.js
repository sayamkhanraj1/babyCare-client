import React from 'react';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useAuth from '../../Hooks/useAuth';
import { useHistory } from 'react-router-dom';
import './Orders.css'

const Orders = () => {

         let {orders} = useParams();
         const {user} = useAuth();
         const history = useHistory();
         const redirect_uri = '/';

         const [Orders, setOrders] = useState([]);
         const [singleOrder, setSingleOrder] = useState({});

         // icones
         const starIcon = <FontAwesomeIcon icon={faStar} />

         useEffect(()=>{
                  fetch('https://calm-mountain-67432.herokuapp.com/products')
                  .then(res => res.json())
                  .then(data => setOrders(data))
         },[])

         useEffect(()=>{
                  const foundBooking = Orders.find(booking => (booking.key == orders))
                  setSingleOrder(foundBooking)
                  
         },[Orders, orders])

         // react hook form
         const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
         const onSubmit = (data) => {
          data.status= "Pending";
          fetch('https://calm-mountain-67432.herokuapp.com/ordersInfo', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
          })
            .then((res) => res.json())
            .then((result) =>{
                alert("Ordered Successfully!");
                reset();
                history.push(redirect_uri);
          });
          console.log(data);
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
                  </div>
                 </div>

                  <div className="col-md-6 mt-4 mb-3">
                  <form onSubmit={handleSubmit(onSubmit)}>
                                {
                                   singleOrder?.name &&  <input
                                   {...register("title")}
                                   defaultValue={singleOrder?.name}
                                   placeholder="Title"
                                   className="p-3 m-3 w-100 border border-success rounded"
                                   />
                                }
                               <br />
                               <input
                                {...register("name")}
                                defaultValue={user.displayName}
                                placeholder="Name"
                                className="p-3 m-3 w-100 border border-success rounded"
                                />
                               <br />
                               <input
                                {...register("email")}
                                defaultValue={user.email}
                                placeholder="Email"
                                className="p-3 m-3 w-100 border border-success rounded"
                                />
                               <br />
                               <input
                               {...register("date", { required: true })}
                               type="date"
                               className="p-3 m-3 w-100 border border-success rounded"
                               />
                                <br/>
                               <select {...register("gender")} className="p-3 m-3 w-100 border border-success rounded">
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                              </select>
                              <br/>
                              <input
                              {...register("city", { required: true })}
                              placeholder="City"
                              className="p-3 m-3 w-100 border border-success rounded"
                              />
                              <br />
                              {errors.exampleRequired && <span>This field is required</span>}
                              <input type="submit" value="Confirm Booking" className="btn btn-success w-100 border border-success rounded m-3" />
                            </form>
                  </div>

                  </div>
                  </div>
         );
};

export default Orders;