import React from 'react';
import Banner from '../Banner/Banner';
import Post from '../Posts/Post';
import Products from '../Products/Products';
import SmallBanner from '../SmallBanner/SmallBanner';

const Home = () => {
         return (
                  <div>
                   <Banner />
                   <SmallBanner />
                   <Products />
                   <Post />
                  </div>
         );
};

export default Home;