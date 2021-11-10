import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
         const [products, setProducts] = useState([]);

         useEffect(()=>{
                  fetch('/products.json')
                  .then(res => res.json())
                  .then(data => setProducts(data))
         },[])
         return (
                  <div>
                  <div className="container my-5">
                  <div className="proucts-text">
                  <h5>Choose Your Product</h5>
                  <h2 className="text-center fw-bold">Select Your Best <br /> Product For Your Car</h2>
                  </div>
                  <div className="row">
                  {
                           products.slice(0, 6).map(product=> <Product
                                    key={product.key}
                                    product={product}
                                     ></Product>)
                  }
                  </div>
                  </div>
                  </div>
         );
};

export default Products;