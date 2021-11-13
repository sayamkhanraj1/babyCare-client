import React from 'react';
import { useForm } from "react-hook-form";
import './AddProduct.css'

const AddProduct = () => {
         const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();

         const onSubmit = data => {
                  console.log(data)
                  fetch('https://calm-mountain-67432.herokuapp.com/addProduct',{
                           method:"POST",
                           headers:{'content-Type' : 'application/json'},
                           body: JSON.stringify(data)
                  })
                  .then(res => res.json())
                  .then(result => console.log(result))


                  reset();
         };

         console.log(watch("example")); 
         return (
                  <div className="d-flex justify-content-center">
                        <div className="w-75">
                  <form className="add-form" onSubmit={handleSubmit(onSubmit)}>
                           <h3 className="mt-2 text-white">Add A New Product</h3>
                  <input placeholder="Product Name" {...register("name")} />
                  <input type="number" placeholder="Price" {...register("price", { required: true })} />
                  <input placeholder="Leave Stars" {...register("rating", { required: true })} />
                  <input placeholder="Discription" {...register("discription", { required: true })} />
                  <input placeholder="Image" {...register("img", { required: true })} />
                  {errors.exampleRequired && <span>This field is required</span>}
                  
                  <input className="fw-bolder fs-5" type="submit" />
                  </form>
                  </div>    
                  </div>
         );
};

export default AddProduct;