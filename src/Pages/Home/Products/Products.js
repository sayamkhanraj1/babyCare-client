import React from 'react';
import { useEffect } from 'react';
import Product from '../Product/Product';
import fetureImg from '../../../images/heading_img.png'
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from './productsSlice';

const Products = () => {
         /* const [products, setProducts] = useState([]); */

         // from redux
         const {products} = useSelector(state => state.products)
         const dispatch = useDispatch();

         useEffect(()=>{
                  dispatch(fetchProducts());
         },[dispatch])


         return (
                  <div>
                  <div className="container my-5 ">
                  <h2 className="text-center fw-bold products-text">Featured Products</h2>
                  <div className="d-flex justify-content-center align-items-center my-3">
                  <img src={fetureImg} alt="" />
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