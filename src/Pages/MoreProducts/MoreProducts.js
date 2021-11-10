import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import MoreProduct from '../MoreProduct/MoreProduct';

const MoreProducts = () => {
         const [moreProducts, setMoreProducts] = useState([]);

         useEffect(()=>{
                  fetch('/products.json')
                  .then(res => res.json())
                  .then(data => setMoreProducts(data))
         },[])
         return (
                  <div>
                  <div className="container my-5">
                  <div className="proucts-text">
                  <h5>Find Out More Products</h5>
                  <h2 className="text-center fw-bold">Find Out More <br /> Products For Your Car</h2>
                  </div>
                  <div className="row">
                  {
                           moreProducts.map(moreProduct=> <MoreProduct
                                    key={moreProduct.key}
                                    moreProduct={moreProduct}
                                     ></MoreProduct>)
                  }
                  </div>
                  </div>
                  </div>
         );
};

export default MoreProducts;