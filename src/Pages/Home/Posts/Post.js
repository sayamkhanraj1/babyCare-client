import { faTag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetureImg from '../../../images/heading_img.png';
import { fetchPosts } from './postSlice';

const Post = () => {

         const tagIcon = <FontAwesomeIcon icon={faTag} />

         const {posts} = useSelector(state => state.posts)
         const dispatch = useDispatch();

         useEffect(()=>{
                  dispatch(fetchPosts())
         },[dispatch])
         return (
                  <div data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom">
                  <div className="container my-5 ">
                  <h2 className="text-center fw-bold products-text">Our Recent Posts</h2>
                  <div className="d-flex justify-content-center align-items-center my-3">
                  <img src={fetureImg} alt="" />
                  </div>
                  <div className="row">
                  {
                           posts.map(post=>  <div key={post.key} className="col-md-4 mt-4 mb-3">
                           <div className="card h-100 card-style">
                             <div className=" img-effect"> 
                               <img className="img-fluid" src={post?.img} alt="..."/>
                               </div>
                              <div className="mt-3 package-detail d-flex justify-content-around">
                              </div>
                              <div className="card-body text-center package-text">
                                <h3 className="card-title mb-3">{post?.name}</h3>
                                <span className="text-muted fw-bold fs-5">{tagIcon}  {post?.tag}</span>
                                    <p className="text-muted mt-3">{post?.discription}</p>
                              </div>
                              
                              <div className="d-flex justify-content-center align-items-center">
                               <button className="service-btn mb-3 btn">Read More</button>
                              </div>
                            </div>
                           </div>)
                  }
                  </div>
                  </div>
                  </div>
         );
};

export default Post;